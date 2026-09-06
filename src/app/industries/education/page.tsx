import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";

export const metadata: Metadata = {
  title: "Education & Research IT Solutions | Technosprint",
  description: "High-density campus Wi-Fi, scalable LMS hosting, FERPA compliance, and academic research cloud clusters.",
};

export default function EducationPage() {
  const ind = industriesData["education"];
  return <IndustryTemplate industry={ind} />;
}
