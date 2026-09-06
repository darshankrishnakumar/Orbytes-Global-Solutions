import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";

export const metadata: Metadata = {
  title: "Digital Solutions & Integrations | Technosprint",
  description: "Custom web applications, cloud-integrated software, API middleware, and e-commerce platforms from Technosprint.",
};

export default function DigitalSolutionsPage() {
  const service = servicesData["digital-solutions"];
  return <ServiceTemplate service={service} />;
}
