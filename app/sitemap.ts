import type { MetadataRoute } from "next";
import { products } from "./products/data";
import { solutions } from "./solutions/data";

const siteUrl = "https://airtecsolutions.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/about-us", "/contact", "/industries", "/solutions", "/products"]
    .map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
    .concat(
      solutions.map(({ slug }) => ({
        url: `${siteUrl}/solutions/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
      products.map(({ slug }) => ({
        url: `${siteUrl}/products/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    );
}
