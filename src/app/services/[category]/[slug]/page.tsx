import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

interface Props {
  params: { category: string; slug: string };
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  Object.values(servicesData).forEach((service) => {
    params.push({
      category: service.category,
      slug: service.slug,
    });
  });
  return params;
}

export function generateMetadata({ params }: Props): Metadata {
  const service = servicesData[params.slug];
  if (!service) return { title: "Service | Orbytes" };

  return {
    title: `${service.title} | Orbytes`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Orbytes Enterprise Solutions`,
      description: service.shortDescription,
      images: service.imageUrl ? [{ url: service.imageUrl }] : undefined,
    },
  };
}

export default function NestedServiceDetailPage({ params }: Props) {
  const service = servicesData[params.slug];
  if (!service) return notFound();

  return <ServiceTemplate service={service} />;
}
