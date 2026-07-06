export interface SeoConfig {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = "Campus Connect";
const SITE_URL = "https://campusconnect.app";

/**
 * Applies SEO metadata (title, meta description, canonical, Open Graph,
 * Twitter Card, and JSON-LD structured data) to the document head.
 */
export function applySeo({ title, description, path }: SeoConfig) {
  const fullTitle = `${title} · ${SITE_NAME}`;
  document.title = fullTitle;

  const setMeta = (attr: "name" | "property", key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("name", "description", description);
  setMeta("property", "og:title", fullTitle);
  setMeta("property", "og:description", description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:url", `${SITE_URL}${path}`);
  setMeta("property", "og:site_name", SITE_NAME);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", fullTitle);
  setMeta("name", "twitter:description", description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `${SITE_URL}${path}`);

  let ld = document.getElementById("ld-json");
  if (!ld) {
    ld = document.createElement("script");
    ld.id = "ld-json";
    ld.setAttribute("type", "application/ld+json");
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "EducationApplication",
    description,
    url: `${SITE_URL}${path}`,
  });
}
