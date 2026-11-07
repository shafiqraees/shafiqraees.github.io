"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  A tiny, self-contained "live coding" window for the hero section.  */
/*  It types real-looking code from my day-to-day work, runs a fake    */
/*  build in the terminal, then moves on to the next file.             */
/* ------------------------------------------------------------------ */

export type Token = [text: string, cls: string];

const KEYWORDS = new Set([
  "import", "from", "export", "default", "function", "async", "await", "return", "const", "let",
  "for", "in", "if", "else", "new", "type", "true", "false", "endfor", "assign",
]);

const C = {
  kw: "text-accent2",
  str: "text-accent",
  fn: "text-accent3",
  num: "text-accent3",
  com: "text-muted italic",
  tag: "text-accent2",
  plain: "text-fg",
  punct: "text-muted",
};

/** very small tokenizer: strings, comments, numbers, keywords, calls, liquid tags */
export function tokenize(line: string): Token[] {
  const out: Token[] = [];
  const re =
    /(\/\/.*$)|("[^"]*"|'[^']*'|`[^`]*`)|(\{%-?[^%]*%\}|\{\{[^}]*\}\})|(<\/?[A-Za-z][\w.-]*)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\()|([A-Za-z_$][\w$]*)|([{}()[\];,.:=<>/+\-*!?|&]+)|(\s+)/g;
  let m: RegExpExecArray | null;
  let last = 0;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push([line.slice(last, m.index), C.plain]);
    last = m.index + m[0].length;
    if (m[1]) out.push([m[0], C.com]);
    else if (m[2]) out.push([m[0], C.str]);
    else if (m[3]) out.push([m[0], C.tag]);
    else if (m[4]) out.push([m[0], C.tag]);
    else if (m[5]) out.push([m[0], C.num]);
    else if (m[6]) out.push([m[0], C.fn]);
    else if (m[7]) out.push([m[0], KEYWORDS.has(m[0]) ? C.kw : C.plain]);
    else if (m[8]) out.push([m[0], C.punct]);
    else out.push([m[0], C.plain]);
  }
  if (last < line.length) out.push([line.slice(last), C.plain]);
  return out;
}

const files = [
  {
    name: "DocumentAgent.php",
    lang: "PHP / Laravel",
    code: `<?php
// extract a document, then a person reviews it
public function classify(Document $doc) {
  $draft = Llm::extract($doc->text, [
    'fields' => ['vendor', 'total', 'date'],
  ]);

  Review::queue($doc, $draft);
  return $draft;
}`,
    run: [
      ["$ php artisan queue:work", "text-fg"],
      ["✓ Document classified", "text-accent"],
      ["✓ Sent for human review", "text-accent"],
    ],
  },
  {
    name: "PaymentGateway.php",
    lang: "PHP / Laravel",
    code: `<?php
// Stripe, PayPal, Telebirr, QisstPay
public function charge(Order $order) {
  $pay = Gateway::charge($order, [
    'provider' => $order->gateway,
    'currency' => $order->currency,
  ]);

  Webhook::listen($pay->id);
  return response()->json($pay);
}`,
    run: [
      ["$ php artisan payments:test", "text-fg"],
      ["✓ Payment captured", "text-accent"],
      ["✓ Stripe · PayPal · Telebirr · QisstPay", "text-accent"],
    ],
  },
  {
    name: "TenantService.php",
    lang: "PHP / Laravel",
    code: `<?php
// one service, many tenants
public function report(Tenant $tenant) {
  $rows = DB::table('invoices')
    ->where('tenant_id', $tenant->id)
    ->latest()
    ->limit(50)
    ->get();

  return Cache::remember($tenant->id, 60, fn () => $rows);
}`,
    run: [
      ["$ php artisan test", "text-fg"],
      ["✓ Tenant data stays isolated", "text-accent"],
      ["✓ Report served from Redis", "text-accent"],
    ],
  },
  {
    name: "OrderEvents.ts",
    lang: "TypeScript",
    code: `import { bus } from "./queue";

// publish once, let other services react
export async function orderPaid(id: string) {
  await bus.publish("order.paid", {
    id,
    at: Date.now(),
  });

  return { queued: true };
}`,
    run: [
      ["$ npm run events", "text-fg"],
      ["✓ Event published", "text-accent"],
      ["✓ RabbitMQ consumers caught up", "text-accent"],
    ],
  },
];

const compiled = files.map((f) => {
  const lines = f.code.split("\n");
  return { ...f, lines, tokens: lines.map(tokenize), total: f.code.length };
});

const MAX_LINES = Math.max(...compiled.map((f) => f.lines.length));
const TICK = 55; // ms per step, about 18 characters a second
const STEP_RUN = 16; // ticks between terminal lines
const HOLD = 55; // ticks to rest before the next file

export default function CodeEditor() {
  const reduce = useReducedMotion();
  const [fi, setFi] = useState(0);
  const [step, setStep] = useState(0);

  const file = compiled[fi];
  const runCount = file.run.length;

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => setStep((s) => s + 1), TICK);
    return () => window.clearInterval(t);
  }, [reduce]);

  // move to the next file after typing + terminal + a short rest
  useEffect(() => {
    if (reduce) return;
    if (step > file.total + runCount * STEP_RUN + HOLD) {
      setFi((v) => (v + 1) % compiled.length);
      setStep(0);
    }
  }, [step, file.total, runCount, reduce]);

  // reduced motion: show the first file completely, no timers
  const typed = reduce ? file.total : Math.min(step, file.total);
  const done = typed >= file.total;
  const termLines = reduce ? runCount : done ? Math.min(runCount, Math.floor((step - file.total) / STEP_RUN) + 1) : 0;

  // slice the tokens to the number of typed characters
  const visible = useMemo(() => {
    let left = typed;
    const rows: Token[][] = [];
    for (let l = 0; l < file.tokens.length; l++) {
      const row: Token[] = [];
      for (const [text, cls] of file.tokens[l]) {
        if (left <= 0) break;
        row.push([text.slice(0, left), cls]);
        left -= text.length;
      }
      rows.push(row);
      left -= 1; // newline
      if (left < 0) break;
    }
    return rows;
  }, [file, typed]);

  const activeLine = Math.max(0, visible.length - 1);

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-2xl border border-line shadow-[0_30px_80px_-30px_var(--glow)] backdrop-blur-xl"
      style={{ background: "color-mix(in srgb, var(--bg-soft) 88%, transparent)" }}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-1 font-mono text-[11px] text-muted">shafiq / portfolio</span>
        <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:block">{file.lang}</span>
      </div>

      {/* tabs */}
      <div className="flex border-b border-line font-mono text-[11px]">
        {compiled.map((f, i) => (
          <div
            key={f.name}
            className={`relative truncate px-4 py-2 transition-colors duration-700 ${
              i === fi ? "bg-fg/[0.04] text-fg" : "text-muted"
            }`}
          >
            {f.name}
            {i === fi && <span className="absolute inset-x-0 bottom-0 h-px bg-accent" />}
          </div>
        ))}
      </div>

      {/* code */}
      <div
        className="overflow-hidden px-4 py-3 font-mono text-[12px] leading-[22px] sm:text-[13px]"
        style={{ height: MAX_LINES * 22 + 24 }}
      >
        {visible.map((row, l) => (
          <div key={l} className="flex whitespace-pre">
            <span
              className={`mr-4 w-5 shrink-0 select-none text-right ${l === activeLine ? "text-accent" : "text-muted/50"}`}
            >
              {l + 1}
            </span>
            <span>
              {row.map(([text, cls], k) => (
                <span key={k} className={cls}>
                  {text}
                </span>
              ))}
              {l === activeLine && <span className="caret" />}
            </span>
          </div>
        ))}
      </div>

      {/* terminal */}
      <div className="border-t border-line bg-bg/40 px-4 py-3 font-mono text-[11px] leading-[20px] sm:text-xs" style={{ minHeight: 3 * 20 + 24 + 22 }}>
        <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${done && termLines < runCount ? "bg-accent3" : "bg-accent"}`} />
          Terminal
        </div>
        {file.run.slice(0, termLines).map(([text, cls], i) => (
          <div key={i} className={cls}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
