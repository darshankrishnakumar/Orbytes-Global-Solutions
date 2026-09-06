import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "IT Strategy & Consulting | Orbytes",
  description: "Virtual CIO advisory, GRC regulatory audits, IT architecture assessments, and technology roadmaps from Orbytes.",
};

export default function ConsultingPage() {
  const service = servicesData["consulting"];
  return <ServiceTemplate service={service} />;
}
