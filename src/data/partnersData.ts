export interface PartnerLogo {
  name: string;
  category: string;
  description: string;
  badge: string;
  imageUrl?: string;
}

export const partnersData: PartnerLogo[] = [
  {
    name: "Microsoft",
    category: "Cloud & Productivity Partner",
    description: "Certified Microsoft Cloud Solutions Provider for Azure infrastructure, Microsoft 365, and Entra ID security deployments.",
    badge: "Cloud Partner",
    imageUrl: "/images/partners/microsoft.webp",
  },
  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud Infrastructure",
    description: "Architecting scalable cloud compute, elastic storage, and multi-region disaster recovery landing zones.",
    badge: "Infrastructure Partner",
    imageUrl: "/images/partners/aws.webp",
  },
  {
    name: "GoDaddy",
    category: "Web & Domain Infrastructure",
    description: "Domain asset management, DNS failover configuration, and enterprise hosting collaboration.",
    badge: "Domain Services",
    imageUrl: "/images/partners/godaddy.webp",
  },
  {
    name: "Hostinger",
    category: "Hosting & Web Infrastructure",
    description: "High-speed edge hosting and web application deployment partner for SMB and mid-market web solutions.",
    badge: "Hosting Partner",
    imageUrl: "/images/partners/hostinger.webp",
  },
  {
    name: "NXT GEN",
    category: "Data Center & Cloud Services",
    description: "Enterprise data center colocation, high-density server infrastructure, and low-latency hybrid cloud connectivity.",
    badge: "Data Center Partner",
    imageUrl: "/images/partners/nxtgen.webp",
  },
];
