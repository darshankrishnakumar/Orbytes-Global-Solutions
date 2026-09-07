import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { insightsData } from "@/data/insightsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://technosprint.net";

  const staticRoutes = [
    "",
    "/services",
    "/services/integrated",
    "/services/cloud",
    "/services/consulting",
    "/services/development",
    "/solutions",
    "/industries",
    "/industries/business-retail",
    "/industries/healthcare-wellness",
    "/industries/education-research",
    "/industries/manufacturing-industrial",
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
    priority: route === "" ? 1.0 : 0.85,
  }));

  // Deduplicate services by href
  const uniqueServiceHrefs = Array.from(
    new Set(Object.values(servicesData).map((svc) => svc.href))
  );
  const serviceRoutes = uniqueServiceHrefs.map((href) => ({
    url: `${baseUrl}${href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Deduplicate industries by href
  const uniqueIndustryHrefs = Array.from(
    new Set(Object.values(industriesData).map((ind) => ind.href))
  );
  const industryRoutes = uniqueIndustryHrefs.map((href) => ({
    url: `${baseUrl}${href}`,
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
