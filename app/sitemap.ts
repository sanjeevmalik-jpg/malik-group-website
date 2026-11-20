import type { MetadataRoute } from "next";
import { communities } from "@/lib/communities";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/about",
  "/buy",
  "/sell",
  "/relocation",
  "/communities",
  "/indian-realtor-orlando",
  "/reviews",
  "/contact",
  ...communities.map((community) => `/communities/${community.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-20");
  return paths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
