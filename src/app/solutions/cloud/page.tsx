import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "Cloud & Data Migration Services | Orbytes",
  description: "Zero-downtime cloud migration, Azure cost management, IaaS infrastructure, and disaster recovery from Orbytes.",
};

export default function CloudPage() {
  const service = servicesData["cloud"];
  return <ServiceTemplate service={service} />;
}
