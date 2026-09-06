import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "Managed Security Services (MSSP) | Technosprint",
  description:
    "Proactive 24/7 SOC defense, SIEM telemetry correlation, threat detection, and HIPAA/GDPR/PCI-DSS compliance from Technosprint.",
};

export default function ManagedSecurityPage() {
  const service = servicesData["managed-security"];
  return <ServiceTemplate service={service} />;
}
