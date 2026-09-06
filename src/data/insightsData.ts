export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  content: string[];
}

export const insightsData: InsightArticle[] = [
  {
    slug: "zero-trust-architecture-enterprise-security",
    title: "Why Perimeter Defense Is Dead: Implementing Zero-Trust in Modern Hybrid Workforces",
    category: "Cybersecurity",
    readTime: "5 min read",
    publishedDate: "January 2026",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Futuristic zero-trust cybersecurity digital identity and biometric network security",
    summary: "How modern enterprises are moving beyond conventional VPNs to identity-first zero-trust network access (ZTNA) and micro-segmentation.",
    content: [
      "Traditional perimeter security operated under the assumption that everything inside the corporate firewall could be trusted. In today's distributed enterprise environment, where employees connect from home, branch offices, and airport lounges, this perimeter has fundamentally dissolved.",
      "Zero-Trust Architecture (ZTA) operates on the core principle: 'Never trust, always verify.' Every access request—regardless of origin—must be dynamically authenticated, authorized, and continuously validated before access is granted.",
      "At Orbytes, our Managed Security Services (MSSP) practice helps organizations deploy least-privilege access controls, multi-factor authentication (MFA), and automated conditional access policies to stop lateral threat movement dead in its tracks.",
    ],
  },
  {
    slug: "finops-curbing-azure-aws-waste",
    title: "Mastering Cloud FinOps: How Enterprises Cut Unused Azure and AWS Spend by 30%",
    category: "Cloud Strategy",
    readTime: "6 min read",
    publishedDate: "February 2026",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise cloud FinOps dashboard displaying financial data analytics and resource cost optimization",
    summary: "A practical framework for IT leaders to regain visibility into sprawling cloud budgets without slowing down engineering innovation.",
    content: [
      "The rapid shift to public cloud infrastructure brought unprecedented agility, but also unprecedented budget unpredictability. Without strict FinOps governance, orphaned disks, over-provisioned virtual instances, and idle staging environments quickly inflate monthly bills.",
      "Orbytes's Azure Cost Management and Cloud Optimization practice focuses on continuous cost telemetry: matching actual workload resource consumption to the optimal compute tiers, utilizing automated reserved instance commitments, and instituting automated shutdown schedules.",
      "Organizations adopting continuous FinOps principles frequently experience a 25% to 35% reduction in cloud expenditures within the first 90 days, freeing capital for strategic digital initiatives.",
    ],
  },
  {
    slug: "itil-v4-modern-itsm-efficiency",
    title: "From Chaos to Predictability: Scaling IT Operations with ITIL v4 and Automated ITSM",
    category: "IT Operations",
    readTime: "4 min read",
    publishedDate: "March 2026",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise IT engineering team collaborating on ITIL service management workflows",
    summary: "How modern service management standardizes ticket pipelines, mitigates change conflicts, and boosts end-user satisfaction.",
    content: [
      "When IT requests are treated as ad-hoc interruptions across chat messages and direct emails, visibility drops to zero. SLAs become impossible to measure, and emergency changes inadvertently cause secondary system outages.",
      "Modern IT Service Management (ITSM) implements structured ITIL v4 frameworks that automate tier-1 triage, provide self-service equipment ordering, and institute lightweight Change Advisory Board (CAB) validation.",
      "By standardizing repetitive workflows, internal IT teams reduce average resolution times by over 40% while capturing complete compliance audit logs required for ISO 27001 and SOC 2 certifications.",
    ],
  },
];
