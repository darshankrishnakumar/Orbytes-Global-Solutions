import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "IT Strategy & Consulting | Technosprint",
  description: "Virtual CIO advisory, GRC regulatory audits, IT architecture assessments, and technology roadmaps from Technosprint.",
};

export default function ConsultingPage() {
  const service = servicesData["consulting"];
  return <ServiceTemplate service={service} />;
}
