import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { insightsData } from "@/data/insightsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://technosprint.net";

  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/about",
    "/about/leadership",
    "/about/partners",
    "/success",
    "/insights",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryRoutes = Object.keys(industriesData).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const insightRoutes = insightsData.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...insightRoutes];
}
