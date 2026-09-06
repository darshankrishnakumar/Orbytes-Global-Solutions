import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

export const metadata: Metadata = {
  title: "Healthcare IT Solutions | Orbytes",
  description: "HIPAA-compliant cloud architectures, EHR integrations, medical IoT security, and 24/7 clinical support.",
};

export default function HealthcarePage() {
  const ind = industriesData["healthcare"];
  return <IndustryTemplate industry={ind} />;
}
