import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

interface Props {
  params: { category: string; slug: string };
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  Object.entries(industriesData).forEach(([key, item]) => {
    if (item && item.category && item.slug) {
      params.push({
        category: item.category,
        slug: key,
      });
      if (item.slug !== key) {
        params.push({
          category: item.category,
          slug: item.slug,
        });
      }
    }
  });

  const uniqueMap = new Map<string, { category: string; slug: string }>();
  params.forEach((p) => {
    uniqueMap.set(`${p.category}/${p.slug}`, p);
  });

  return Array.from(uniqueMap.values());
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industriesData[params.slug];
  if (!industry) return { title: "Industry | Orbytes" };

  return {
    title: `${industry.name} IT Solutions | Orbytes`,
    description: industry.heroSubheadline,
    openGraph: {
      title: `${industry.name} IT Solutions | Orbytes`,
      description: industry.heroSubheadline,
      images: industry.imageUrl ? [{ url: industry.imageUrl }] : undefined,
    },
  };
}

export default function SubIndustryDetailPage({ params }: Props) {
  const industry = industriesData[params.slug];
  if (!industry) return notFound();

  return <IndustryTemplate industry={industry} />;
}
