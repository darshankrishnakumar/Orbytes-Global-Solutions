import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

export const metadata: Metadata = {
  title: "Manufacturing IT Solutions | Orbytes",
  description: "OT/SCADA network security, predictive maintenance telemetry, and factory floor uptime from Orbytes.",
};

export default function ManufacturingPage() {
  const ind = industriesData["manufacturing"];
  return <IndustryTemplate industry={ind} />;
}
