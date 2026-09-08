export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone?: string;
  isHeadquarter?: boolean;
  imageUrl?: string;
}

export interface ModernPillar {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface GovernancePrinciple {
  number: string;
  title: string;
  description: string;
}

export const companyData = {
  name: "Orbytes Global Solutions",
  shortName: "Orbytes",
  tagline: "Technology that secures. Technology that scales. Technology that moves business forward.",
  philosophy: "Stay Focused on Leadership — We've Got Your IT Covered.",
  missionStatement: "At Orbytes, we deliver cutting-edge IT solutions that empower businesses to thrive in the digital age. Built from the ground up for modern enterprise agility, unbreakable cybersecurity, and cloud elasticity.",
  partnerPromise: "Your Strategic IT Partner: Delivering exceptional IT services tailored to your business objectives, ensuring long-term success, zero downtime, and a definitive competitive advantage.",
  email: "info@orbytesglobal.com",
  secondaryEmail: "contact@orbytesglobal.com",
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
      imageUrl: "/images/about/company2.webp",
    },
    {
      city: "Puducherry",
      country: "India",
      address: "3rd & 4th Floor, Fun Center, 64, South Boulevard, MG Road Area, Puducherry - 605 001",
      phone: "+91 90037 14619",
      isHeadquarter: false,
      imageUrl: "/images/about/company.webp",
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
    { label: "Continuous Monitoring", value: "24/7/365", detail: "Proactive threat detection & SOC defense" },
    { label: "Global Coverage", value: "India & Canada", detail: "Multi-region technical dispatch & support" },
    { label: "Delivery Standard", value: "Zero Downtime", detail: "Engineered for business continuity" },
  ],
  foundationalPillars: [
    {
      title: "Born Cloud-Native & Zero Legacy Debt",
      tagline: "Pure Modern Architecture",
      description: "Unlike traditional MSPs bogged down by legacy architectures, Orbytes was built from Day One with cloud-native pipelines, containerized microservices, and modern infrastructure-as-code.",
      highlights: ["No legacy technical debt", "Container & cloud-native first", "Automated deployment pipelines", "Modern observability tooling"],
    },
    {
      title: "24/7 Proactive SOC & Threat Defense",
      tagline: "Autonomous Security Operations",
      description: "Our Security Operations Center delivers continuous monitoring, AI-augmented telemetry, and immediate endpoint containment to protect client data before breaches occur.",
      highlights: ["Real-time threat telemetry", "Zero Trust access enforcement", "Sub-15 min critical response", "Proactive vulnerability remediation"],
    },
    {
      title: "Enterprise Multi-Cloud & FinOps Scalability",
      tagline: "Elastic Infrastructure",
      description: "We architect resilient multi-cloud environments on Microsoft Azure and AWS, incorporating continuous FinOps cost governance to maximize ROI while maintaining 99.99% uptime.",
      highlights: ["Certified Azure & AWS engineers", "Automated disaster recovery", "FinOps continuous cost reduction", "Hybrid-cloud migration expertise"],
    },
    {
      title: "Global Delivery & Unified Enterprise SLAs",
      tagline: "Seamless Cross-Border Support",
      description: "Operating synchronously across India and North America, our delivery model combines around-the-clock follow-the-sun technical expertise with guaranteed SLAs.",
      highlights: ["India & Canada operational hubs", "Follow-the-sun 24/7 coverage", "Transparent ticketing & reporting", "Direct access to lead engineers"],
    },
  ] as ModernPillar[],
  governancePrinciples: [
    { number: "01", title: "Accountability", description: "Taking full ownership of infrastructure resilience and data security across every client engagement." },
    { number: "02", title: "Identifying Purpose", description: "Ensuring every technology deployment and data process serves a clear, documented business objective." },
    { number: "03", title: "Consent & Transparency", description: "Maintaining complete transparency in data handling, communication, and client authorization." },
    { number: "04", title: "Limiting Collection", description: "Collecting and analyzing only telemetry and data essential to operational excellence." },
    { number: "05", title: "Accuracy & Integrity", description: "Enforcing strict data integrity, automated validation, and rigorous change management (CAB)." },
    { number: "06", title: "Safeguarding Information", description: "Deploying end-to-end encryption, multi-factor authentication, and Zero Trust access controls." },
    { number: "07", title: "Openness", description: "Providing direct, real-time access to system status, metrics, and incident reporting." },
    { number: "08", title: "Individual Access", description: "Empowering client teams with self-service visibility, auditing rights, and clear data ownership." },
    { number: "09", title: "Compliance Excellence", description: "Adhering strictly to international privacy frameworks, ISO 27001, SOC 2, and regulatory standards." },
    { number: "10", title: "Continuous Mastery", description: "Relentless improvement, ongoing security drills, and continuous upskilling across modern technology." },
  ] as GovernancePrinciple[],
};
