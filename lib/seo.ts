import { profile } from "./content";

/** Public address of the site. Set NEXT_PUBLIC_SITE_URL in your host so canonical links, sitemap and social cards use it. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? profile.site).replace(/\/$/, "");

export const seo = {
  title: "Senior Backend Engineer | Muhammad Shafiq",
  shortTitle: "Muhammad Shafiq | Laravel & Backend",
  // Kept under 160 characters so Google shows it in full.
  description:
    "Senior Backend Engineer and Laravel team lead in Dubai, open to remote. PHP 8, Node.js, React, AWS, payments and microservices. 9+ years.",
  keywords: [
    "Laravel developer",
    "senior PHP Laravel developer",
    "senior backend engineer",
    "PHP developer",
    "technical team lead",
    "microservices",
    "REST API developer",
    "GraphQL",
    "Stripe integration",
    "PayPal integration",
    "AWS",
    "Azure developer",
    "Node.js developer",
    "React developer",
    "Dubai",
    "remote backend engineer",
  ],
};

const knowsAbout = ["Laravel", "PHP", "Node.js", "React", "Vue.js", "Microservices", "REST APIs", "GraphQL", "MySQL", "PostgreSQL", "Redis", "RabbitMQ", "Kafka", "AWS", "Microsoft Azure", "Stripe", "Docker", "Kubernetes"];

/** Structured data: tells Google who the page is about. Only facts that are already visible on the page. */
export function jsonLd() {
  const personId = `${siteUrl}/#person`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: `${profile.name} | Portfolio`,
        description: seo.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: `${siteUrl}/`,
        name: seo.title,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: "Muhammad",
        familyName: "Shafiq",
        jobTitle: profile.title,
        description: profile.summary,
        url: `${siteUrl}/`,
        image: `${siteUrl}${profile.photo}`,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        worksFor: { "@type": "Organization", name: profile.company },
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
        sameAs: [profile.linkedin, profile.github],
        knowsAbout,
      },
    ],
  };
}
