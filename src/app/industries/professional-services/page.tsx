import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

export const metadata: Metadata = {
  title: "Professional Services & Logistics IT | Technosprint",
  description: "Encrypted legal document management, zero-trust remote work, and fleet logistics integration.",
};

export default function ProfessionalServicesPage() {
  const ind = industriesData["professional-services"];
  return <IndustryTemplate industry={ind} />;
}
