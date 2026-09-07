export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone?: string;
  isHeadquarter?: boolean;
  imageUrl?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export const companyData = {
  name: "Orbytes Global Solutions",
  shortName: "Orbytes",
  tagline: "Technology that secures. Technology that scales. Technology that moves business forward.",
  foundedYear: 2020,
  email: "info@technosprint.net",
  secondaryEmail: "info@technosprintinfo.com",
  phones: {
    indiaPrimary: "+91 90433 10908",
    indiaSecondary: "+91 90037 14619",
    canada: "+1 (647) 269-2509",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/tehchnosprint-info-solutions/posts/?feedView=all",
    facebook: "https://www.facebook.com/technosprint.infosolutions.9",
    instagram: "https://www.instagram.com/technosprint_infosolutions",
  },
  offices: [
    {
      city: "Chennai",
      country: "India",
      address: "A4, Chandra Shekhar Avenue, 1st Street, Thuraipakkam, Chennai - 600 097, Tamil Nadu",
      phone: "+91 90433 10908",
      isHeadquarter: true,
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      city: "Puducherry",
      country: "India",
      address: "3rd & 4th Floor, Fun Center, 64, South Boulevard, MG Road Area, Puducherry - 605 001",
      phone: "+91 90037 14619",
      isHeadquarter: false,
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "15 Freeborn Crescent, Scarborough, Toronto, Ontario M1P 3T9",
      phone: "+1 (647) 269-2509",
      isHeadquarter: false,
      imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    },
  ] as OfficeLocation[],
  metrics: [
    { label: "Uptime SLA Guarantee", value: "99.99%", detail: "Enterprise-grade operational reliability" },
    { label: "Continuous Monitoring", value: "24/7/365", detail: "Proactive threat detection and SOC defense" },
    { label: "Global Coverage", value: "3 Continents", detail: "Serving India, North America & Central Africa" },
    { label: "Enterprise Experience", value: "10+ Years", detail: "Collective technical leadership expertise" },
  ],
  milestones: [
    {
      year: "2020",
      title: "Foundation of Orbytes",
      description: "Founded with a clear mission to provide high-reliability enterprise IT services, modern infrastructure, and secure technology management.",
    },
    {
      year: "2021",
      title: "MSSP & Managed IT Launch",
      description: "Launched flagship 24/7 Managed Security Services (MSSP) and Managed IT Services (MSP) with continuous network defense and SLA monitoring.",
    },
    {
      year: "2022",
      title: "Cloud & Data Migration Expansion",
      description: "Expanded our service portfolio to include enterprise Cloud Migration, Azure Cost Governance, and Infrastructure as a Service (IaaS).",
    },
    {
      year: "2023",
      title: "ITSM & Strategic Consulting",
      description: "Introduced comprehensive IT Service Management (ITSM) aligning with ITIL standards and strategic Governance, Risk & Compliance (GRC) advisory.",
    },
    {
      year: "2024",
      title: "Industry Vertical Specialization",
      description: "Engineered purpose-built technology architectures for Healthcare (HIPAA compliant), Manufacturing (OT/IoT), and Education sectors.",
    },
    {
      year: "2025–2026",
      title: "Global Enterprise Transformation",
      description: "Established operations in Canada and Africa while delivering autonomous cybersecurity resilience and cloud-scale architectures worldwide.",
    },
  ] as TimelineMilestone[],
};
