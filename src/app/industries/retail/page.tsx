import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

export const metadata: Metadata = {
  title: "Retail & E-commerce IT Solutions | Orbytes",
  description: "POS terminal resilience, LTE failover, high-concurrency cloud scaling, and PCI-DSS compliance.",
};

export default function RetailPage() {
  const ind = industriesData["retail"];
  return <IndustryTemplate industry={ind} />;
}
