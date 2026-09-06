import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "IT Service Management (ITSM) | Orbytes",
  description: "ITIL v4 process frameworks, structured ticketing workflows, and IT asset management from Orbytes.",
};

export default function ITSMPage() {
  const service = servicesData["itsm"];
  return <ServiceTemplate service={service} />;
}
