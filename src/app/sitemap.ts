import type { MetadataRoute } from "next";

const SITE_URL = "https://nexumlabs.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/how-we-work", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
