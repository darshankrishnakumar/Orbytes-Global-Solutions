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
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud Infrastructure",
    description: "Architecting scalable cloud compute, elastic storage, and multi-region disaster recovery landing zones.",
    badge: "Infrastructure Partner",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "GoDaddy",
    category: "Web & Domain Infrastructure",
    description: "Domain asset management, DNS failover configuration, and enterprise hosting collaboration.",
    badge: "Domain Services",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hostinger",
    category: "Hosting & Web Infrastructure",
    description: "High-speed edge hosting and web application deployment partner for SMB and mid-market web solutions.",
    badge: "Hosting Partner",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "NXT GEN",
    category: "Data Center & Cloud Services",
    description: "Enterprise data center colocation, high-density server infrastructure, and low-latency hybrid cloud connectivity.",
    badge: "Data Center Partner",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
];
