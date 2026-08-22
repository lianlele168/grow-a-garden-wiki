import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://growagarden.robloxwikihub.com";
  const d = new Date().toISOString();
  return [
    { url: base, lastModified: d, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/codes`, lastModified: d, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/crop-tier-list`, lastModified: d, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/mutation-calculator`, lastModified: d, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/weather-events`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/gear-guide`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pets-defense`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/beginner-guide`, lastModified: d, changeFrequency: "monthly", priority: 0.7 },
  ];
}
