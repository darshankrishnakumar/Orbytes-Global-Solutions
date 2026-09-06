import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

export const metadata: Metadata = {
  title: "Financial Services IT Solutions | Technosprint",
  description: "High-availability financial infrastructure, PCI-DSS compliance, fraud defense, and 24/7 financial SOC.",
};

export default function FinancialServicesPage() {
  const ind = industriesData["financial-services"];
  return <IndustryTemplate industry={ind} />;
}
