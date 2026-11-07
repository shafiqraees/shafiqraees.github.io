// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to change text, links,
// projects and experience without touching any component.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Muhammad Shafiq",
  firstName: "Muhammad",
  title: "Senior Backend Engineer & Team Lead",
  company: "BambooHR",
  location: "Dubai, UAE",
  email: "malikshafiq7088@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-shafiq-900594151",
  site: "https://shafiqraees.github.io",
  github: "https://github.com/shafiqraees",
  phone: "+92 300 2656488",
  whatsappNumber: "+92 302 2656488",
  whatsapp:
    "https://wa.me/923022656488?text=Hi%20Muhammad!%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you.%20Could%20we%20discuss%20a%20project%3F",
  jobType: "Full-time · open to remote",
  cv: "/Muhammad_Shafiq_Resume.pdf",
  /** About section portrait (file in /public). */
  photo: "/profile.jpg",
  roles: [
    "Laravel and PHP backends",
    "FinTech payment platforms",
    "microservices and APIs",
    "AI workflow automation",
    "SaaS platforms for remote teams",
  ],
  summary:
    "Senior Backend Engineer and Technical Team Lead with 9+ years designing and scaling backend systems for SaaS, FinTech, HR technology and e-commerce, for clients in North America, Europe and the Gulf. I work in PHP 8 and Laravel, with production experience in Node.js, React and Vue.js. My focus is software architecture, microservices, event-driven systems, REST and GraphQL, MySQL and PostgreSQL, Redis, and queues such as RabbitMQ and Kafka. I lead remote teams of 5–10 engineers and I am a Microsoft Certified Azure Developer Associate (AZ-204).",
};

export const highlights = [
  { label: "Years building backend systems", value: "9+" },
  { label: "Production applications delivered", value: "30+" },
  { label: "Largest team led", value: "10" },
  { label: "Uptime on the SaaS platform", value: "99.9%" },
];

export const interests = [
  "Software architecture",
  "System design",
  "Mentoring",
  "FinTech",
  "Remote teams",
  "Continuous learning",
];

export const services = [
  {
    icon: "code",
    title: "Laravel & PHP backends",
    text: "PHP 8 and Laravel services with clean architecture, Eloquent, queues, Livewire and REST or GraphQL APIs. Built so a growing team can keep shipping.",
    points: ["PHP 8 & Laravel", "REST & GraphQL", "Queues & jobs"],
  },
  {
    icon: "chart",
    title: "FinTech payment platforms",
    text: "Stripe, PayPal, Telebirr and QisstPay behind one payments API: tokenization, webhooks, refunds, disputes and reconciliation, with no card data stored in scope.",
    points: ["Stripe & PayPal", "Webhooks", "Reconciliation"],
  },
  {
    icon: "workflow",
    title: "Microservices & integrations",
    text: "Monoliths split into bounded services, plus ERP, CRM and accounting connectors with RabbitMQ, Kafka, retries and dead-letter handling.",
    points: ["Microservices", "Event-driven", "ERP connectors"],
  },
  {
    icon: "store",
    title: "Multi-tenant SaaS",
    text: "Tenant isolation, subscription billing, role-based access and reporting pipelines for business platforms that have to stay up as the data grows.",
    points: ["Multi-tenant", "Stripe billing", "RBAC"],
  },
  {
    icon: "search",
    title: "Cloud, performance & delivery",
    text: "AWS and Azure, Docker and Kubernetes, and CI/CD in GitHub Actions, GitLab CI and Jenkins. Query tuning and Redis caching on the hot paths.",
    points: ["AWS & Azure", "Docker & Kubernetes", "CI/CD"],
  },
  {
    icon: "bot",
    title: "AI workflow automation",
    text: "LLM APIs for document extraction and classification, with human review, queues and rate limits, wired into Laravel and React.",
    points: ["LLM APIs", "Document extraction", "Human review"],
  },
];

export const skillGroups: { title: string; highlight?: boolean; items: string[] }[] = [
  {
    title: "PHP & Laravel",
    highlight: true,
    items: ["PHP 8", "Laravel", "Laravel 12", "Livewire", "Eloquent ORM", "Laravel Queues", "Job scheduling", "REST APIs", "OAuth2", "JWT", "Webhooks"],
  },
  {
    title: "Architecture",
    highlight: true,
    items: ["Software architecture", "System design", "Microservices", "Monolith to microservices", "Event-driven architecture", "Domain-driven design", "Clean architecture", "SOLID", "Multi-tenant SaaS", "High availability"],
  },
  {
    title: "Node.js",
    highlight: true,
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "API gateway", "Third-party APIs"],
  },
  {
    title: "Payments & FinTech",
    highlight: true,
    items: ["Stripe", "PayPal", "Telebirr", "QisstPay", "Payment gateways", "Tokenization", "Webhook reconciliation", "Refunds & disputes", "SaaS billing", "PCI-aware design"],
  },
  {
    title: "AI Integration",
    highlight: true,
    items: ["LLM API integration", "Document extraction", "Document classification", "Workflow automation", "Human-in-the-loop", "Rate limits"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Redux", "Vue.js", "Nuxt.js", "jQuery", "HTML5", "CSS3"],
  },
  {
    title: "Databases & Caching",
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Memcached", "Elasticsearch", "Query optimization", "Indexing", "Replication"],
  },
  {
    title: "Messaging & Queues",
    items: ["RabbitMQ", "Apache Kafka", "Laravel Queues", "Pub/Sub", "Asynchronous processing"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "EC2", "RDS", "Lambda", "S3", "CloudFront", "Microsoft Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Jenkins", "Nginx", "Linux"],
  },
  {
    title: "Testing & Security",
    items: ["PHPUnit", "Unit testing", "Feature testing", "TDD", "Code review", "OWASP Top 10", "Application security"],
  },
  {
    title: "GitHub & Version Control",
    items: ["Git", "GitHub", "GitHub Actions", "GitLab", "Pull requests", "Code reviews"],
  },
  {
    title: "Leadership & Process",
    items: ["Technical leadership", "Mentoring", "Agile / Scrum", "Kanban", "Jira", "Confluence", "Hiring interviews", "Remote teams"],
  },
];

export const skillLevels = [
  { name: "PHP 8 & Laravel (APIs, queues, Livewire)", level: 95 },
  { name: "Microservices, DDD & event-driven design", level: 92 },
  { name: "Node.js, Express, REST & GraphQL", level: 88 },
  { name: "Stripe, PayPal, Telebirr & QisstPay", level: 90 },
  { name: "LLM integration & document automation", level: 85 },
  { name: "React, Vue.js & Nuxt.js", level: 82 },
  { name: "MySQL, PostgreSQL, Redis & Elasticsearch", level: 90 },
  { name: "RabbitMQ, Kafka & Laravel Queues", level: 88 },
  { name: "AWS, Azure, Docker & Kubernetes", level: 88 },
  { name: "PHPUnit, TDD & OWASP", level: 85 },
  { name: "GitHub Actions, GitLab CI & Jenkins", level: 90 },
  { name: "Technical leadership & mentoring", level: 92 },
];

export const marquee = [
  "PHP 8", "Laravel", "Node.js", "React", "Vue.js", "MySQL", "PostgreSQL", "Redis",
  "Microservices", "REST", "GraphQL", "RabbitMQ", "Kafka", "Stripe", "PayPal",
  "AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "LLM APIs",
];

export type Category = "Fintech" | "Automation" | "Web" | "Internal tools" | "AI";

export const projects: {
  title: string;
  category: Category;
  text: string;
  tags: string[];
}[] = [
  {
    title: "FinTech payment platform",
    category: "Fintech",
    text: "A unified payments API with gateway abstraction for Stripe, PayPal, Telebirr and QisstPay. Idempotent webhooks, refunds, disputes and audit logs. Reconciliation accuracy above 99%, with no card data stored in scope.",
    tags: ["Laravel", "Stripe", "PayPal", "RabbitMQ"],
  },
  {
    title: "Crypto payments",
    category: "Fintech",
    text: "Crypto checkout and wallet transfers on Laravel and React, next to the card gateways. Webhook confirmation, order status updates, and the same reconciliation and audit trail as the fiat payments.",
    tags: ["Crypto", "Laravel", "React", "Webhooks"],
  },
  {
    title: "Enterprise SaaS platform",
    category: "Web",
    text: "Multi-tenant business suite. I led tenant isolation, Stripe subscription billing, role-based access and reporting. Scaled to thousands of tenant organizations with 99.9%+ uptime, running on AWS with Azure used for selected workloads.",
    tags: ["Laravel", "React", "AWS", "Azure"],
  },
  {
    title: "AWS & Azure cloud",
    category: "Web",
    text: "Production on AWS (EC2, RDS, S3, Lambda, CloudFront, IAM, Route 53, CloudWatch) and Microsoft Azure. Docker and Kubernetes, Linux and Nginx, SSL, and zero-downtime deploys through GitHub Actions.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Prime Estimate",
    category: "Web",
    text: "Construction estimation platform. I designed the estimation engine, versioned pricing catalogs and the quote-to-project workflow. Estimate preparation dropped from days to hours.",
    tags: ["Laravel", "Vue.js", "Nuxt.js", "PostgreSQL"],
  },
  {
    title: "ERP integration platform",
    category: "Automation",
    text: "Middleware for enterprise systems. Connector framework, mapping engine, retry and dead-letter handling. Near-real-time sync across ERP, CRM and accounting, with new connectors shipping in days.",
    tags: ["Laravel", "Node.js", "Kafka", "Elasticsearch"],
  },
  {
    title: "AI automation platform",
    category: "AI",
    text: "Document extraction and classification with LLM APIs, human review, and cost and rate-limit controls. Average handling time fell by 60%+ and the workflow spread across departments.",
    tags: ["Laravel", "LLM APIs", "React", "Kubernetes"],
  },
  {
    title: "Hospital system with AI",
    category: "AI",
    text: "Hospital management on Laravel and React: patients, appointments, billing and staff roles. AI reads clinical documents, suggests a classification, and waits for a clinician to confirm before anything is saved.",
    tags: ["Laravel", "React", "AI", "RBAC"],
  },
  {
    title: "HR platform APIs",
    category: "Internal tools",
    text: "REST APIs for employee records, time tracking, benefits and reporting, with versioning, pagination and auth. Legacy pieces split into services, with p95 times cut by about 40% on key workflows.",
    tags: ["REST", "Microservices", "Redis", "AWS"],
  },
];

export const experience = [
  {
    company: "BambooHR",
    role: "Senior Backend Engineer / Technical Team Lead",
    period: "2025 – Present",
    place: "USA · Remote",
    points: [
      "Architect and build backend services for an enterprise HR SaaS platform used by thousands of business customers.",
      "Lead a product engineering squad: system design reviews, architecture decisions and delivery in Agile/Scrum.",
      "Design REST APIs for employee records, time tracking, benefits and reporting, with versioning, pagination, authentication and consistent errors.",
      "Split legacy monolith pieces into bounded microservices so teams can deploy without stepping on each other.",
      "Cut p95 response times by about 40% on key workflows with SQL tuning, Redis caching and background jobs.",
      "Connect internal services with queues and publish/subscribe so failures stay isolated.",
      "Work on multi-tenant design for data isolation, background processing and large reporting pipelines.",
      "Run CI/CD in GitHub Actions with tests, static analysis and Docker builds, and support Kubernetes with several safe production deploys a day.",
      "Operate services on AWS (EC2, RDS, S3, Lambda, CloudWatch, IAM) and apply OWASP practices to auth and access control.",
      "Write coding guidelines, review checklists and architecture decision records, and mentor engineers, including several promoted within the year.",
      "Run system design and coding interviews for backend hiring.",
    ],
  },
  {
    company: "Software consultancy & product engineering",
    role: "Senior PHP Laravel Developer / Technical Team Lead",
    period: "2017 – 2025",
    place: "Islamabad, Pakistan · Remote",
    points: [
      "Delivered 30+ production applications in PHP, Laravel, Node.js, React and Vue.js for clients in the USA, UK, Europe and the Gulf, across SaaS, FinTech, e-commerce and construction.",
      "Grew from software engineer to senior Laravel developer and technical team lead.",
      "Architected Laravel backends with clean architecture, DDD, SOLID and repository/service patterns.",
      "Integrated Stripe, PayPal, Telebirr and QisstPay with tokenization, webhooks and reconciliation for a payments layer handling thousands of transactions a day.",
      "Led a high-traffic Laravel monolith toward microservices, improving deploys, fault isolation and team autonomy.",
      "Built REST and GraphQL APIs for web and mobile with OAuth2/JWT and role-based access.",
      "Ran notifications, email, SMS, invoicing and long jobs on Laravel Queues, Redis and RabbitMQ.",
      "Cut slow-query volume by over 70% on key systems through indexing, query refactoring and read/write separation, plus Redis caching.",
      "Deployed on AWS and Azure: Linux, Nginx, SSL and firewall hardening.",
      "Set up GitHub Actions, GitLab CI and Jenkins for tests, style checks and zero-downtime deploys, with PHPUnit and TDD.",
      "Led teams of 5–10, running planning, grooming and retrospectives in Jira and Confluence, and was the technical contact for international clients.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology (BS-IT)",
    school: "Information Technology",
    period: "",
  },
];

export const certifications = [
  "Microsoft Certified: Azure Developer Associate (AZ-204)",
  "English — professional working proficiency",
  "Urdu — native",
];

export type WorkType = "Web apps" | "Shopify" | "WordPress";

export const clientWork: { name: string; type: WorkType; note: string; url: string; image: string; bleed?: boolean }[] = [
  { name: "Air Academic", type: "Web apps", note: "Next.js · Figma to website", url: "https://airacademic.com/", image: "air-academic" },
  { name: "ProDoo", type: "Web apps", note: "Next.js · Figma to website", url: "https://stage.prodoo.com/", image: "prodoo" },
  { name: "Glam Seven", type: "Web apps", note: "Next.js · Figma to website", url: "https://www.glamseven.com/", image: "glam-seven" },
  { name: "STS Cars", type: "Web apps", note: "HTML & PHP · Web portal", url: "https://www.stscars.co.uk/", image: "sts-cars", bleed: true },
  { name: "Assa Transfer", type: "Web apps", note: "Website & online booking system", url: "https://assatransfers.co.uk/", image: "assa-transfer", bleed: true },
  { name: "Platinum Transfers", type: "Web apps", note: "Website & online booking system", url: "https://platinumtransfers.co.uk/", image: "platinum-transfers", bleed: true },
  { name: "Taxi Dispatch Software", type: "Web apps", note: "Web app · custom UI & design", url: "https://taxidespatch.co.uk/beta/", image: "taxi-dispatch", bleed: true },
  { name: "Snowe Home", type: "Shopify", note: "Custom theme development", url: "https://snowehome.com/", image: "snowe-home" },
  { name: "Mode & Affaire", type: "Shopify", note: "Full store customisation", url: "https://modeandaffaire.com/", image: "mode-affaire" },
  { name: "BURGA", type: "Shopify", note: "USA based store", url: "https://www.burga.com/", image: "burga" },
  { name: "Tilevera", type: "Shopify", note: "Custom theme & design", url: "https://www.tilevera.co.za/", image: "tilevera" },
  { name: "Discount LED Lights", type: "Shopify", note: "E-commerce store", url: "https://discountledlights.com/", image: "discount-led" },
  { name: "Sox and Jox", type: "Shopify", note: "E-commerce store", url: "https://www.soxandjox.co.za/", image: "sox-and-jox" },
  { name: "White Suede", type: "Shopify", note: "Jewellery store", url: "https://whitesuedejewelry.com/", image: "white-suede" },
  { name: "Yumi Organics", type: "Shopify", note: "Organic products store", url: "https://www.yumi-organics.ca/", image: "yumi-organics", bleed: true },
  { name: "GTCFX Portal", type: "WordPress", note: "PDF to website", url: "https://mtgtcfx.com/beta/", image: "gtcfx-portal" },
  { name: "Bliss Pilates", type: "WordPress", note: "Custom design", url: "https://blisspilates.com.au/", image: "bliss-pilates" },
  { name: "Moonwalk Properties", type: "WordPress", note: "Real estate website", url: "https://moonwalkproperties.com/", image: "moonwalk" },
  { name: "Agility ECC", type: "WordPress", note: "Full website development", url: "https://www.agilityecc.com/", image: "agility-ecc" },
  { name: "RockzFX", type: "WordPress", note: "Website & design", url: "https://rockzfx.com/", image: "rockzfx" },
  { name: "Powerhouse Hub", type: "WordPress", note: "Figma to website", url: "https://www.powerhousehub.com/", image: "powerhouse-hub" },
  { name: "Oxford Minibus Company", type: "WordPress", note: "Figma to website", url: "https://www.theoxfordminibuscompany.co.uk/", image: "oxford-minibus", bleed: true },
  { name: "Maximus Accountants", type: "WordPress", note: "Business website", url: "https://maximusaccountants.com/", image: "maximus", bleed: true },
  { name: "FreedomFi", type: "WordPress", note: "Custom website design", url: "https://freedomfi.com/", image: "freedomfi" },
  { name: "Home Scanner", type: "WordPress", note: "Promotional landing page", url: "https://promotion.homescaner.com/", image: "home-scanner" },
  { name: "One Nine Properties", type: "WordPress", note: "Real estate website", url: "https://onenineproperties.com/", image: "one-nine", bleed: true },
  { name: "360 Home Scanner", type: "WordPress", note: "Promotional landing page", url: "https://330rc.homescaner.com/", image: "360-home-scanner" },
];

export const testimonials = [
  {
    quote:
      "Shafiq is an exceptional developer — highly skilled, reliable, and always delivers on time. He built our platform with great attention to detail and performance.",
    name: "Ahsan Zahid",
    role: "CEO & Founder, Pakistan",
  },
  {
    quote:
      "Shafiq worked with my team and was extremely cooperative, professional, and technically strong. A great asset to any project.",
    name: "Waleed Mansoor",
    role: "Senior Graphic Designer, UAE",
  },
  {
    quote:
      "Shafiq developed multiple websites for us with excellent quality. He understands requirements quickly and delivers clean, scalable code.",
    name: "M Taimur Khan",
    role: "HR Manager, UAE",
  },
  {
    quote:
      "A very thorough and professional developer. Shafiq took full ownership of our project and delivered beyond expectations.",
    name: "Noman Tariq",
    role: "Data Engineer, UAE",
  },
  {
    quote:
      "Shafiq understood my requirements perfectly and delivered a high-quality website. Professional, communicative, and highly recommended.",
    name: "Ali Raza",
    role: "Entrepreneur, Pakistan",
  },
  {
    quote:
      "Amazing experience working with Shafiq. A highly proficient Shopify developer who truly knows his craft. Highly recommended!",
    name: "M Amir",
    role: "CEO, Branding Bytes, Pakistan",
  },
];
