import { MetadataRoute } from "next";
import { getAllLocationRoutes } from "@/components/Data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://igrdigital.com";
  const now = new Date();

  // 1. Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/digital-marketing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // {
    //   url: `${baseUrl}/locations`,
    //   lastModified: now,
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Programmatic Location, City & Service Routes (Disabled temporarily)
  // const locationRoutes = getAllLocationRoutes();
  // const programmaticLocationPages: MetadataRoute.Sitemap = locationRoutes.map((route) => ({
  //   url: `${baseUrl}${route.path}`,
  //   lastModified: now,
  //   changeFrequency: "weekly",
  //   priority: route.priority,
  // }));

  return [...staticPages];
}
