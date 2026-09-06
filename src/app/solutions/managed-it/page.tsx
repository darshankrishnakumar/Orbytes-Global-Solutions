import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "Managed IT Services (MSP) | Orbytes",
  description: "Proactive 24/7 infrastructure monitoring, 99.99% uptime SLAs, helpdesk, and maintenance from Orbytes.",
};

export default function ManagedITPage() {
  const service = servicesData["managed-it"];
  return <ServiceTemplate service={service} />;
}
