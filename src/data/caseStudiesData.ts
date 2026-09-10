export interface CaseStudy {
  slug: string;
  title: string;
  clientIndustry: string;
  clientType: string;
  imageUrl: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "manufacturing-operations-transformation",
    title: "How Orbytes Transformed 24/7 IT Operations for an Industrial Manufacturer",
    clientIndustry: "Manufacturing & Heavy Industrial",
    clientType: "Multi-Plant Operations Firm (VP of Operations)",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Automated precision manufacturing machinery with industrial monitoring systems",
    challenge: "Frequent assembly-line network drops and uncoordinated server maintenance cycles were costing up to $80,000 per hour in idle production line downtime.",
    solution: "Deployed Orbytes Managed IT & MSSP monitoring across all factory floors, implemented automated OT/IT network segmentation, and instituted scheduled predictive maintenance.",
    impact: "Achieved 99.99% production line availability, reduced unexpected IT incidents by 45%, and established 24/7 dedicated industrial NOC response.",
    metrics: [
      { value: "45%", label: "Incident Reduction" },
      { value: "99.99%", label: "Plant Uptime" },
      { value: "< 15 min", label: "Average Response Time" },
    ],
    tags: ["Managed IT", "MSSP", "Manufacturing", "OT Security"],
  },
  {
    slug: "legal-firm-cloud-cybersecurity",
    title: "Securing Privileged Client Files and Modernizing Infrastructure for a Leading Law Firm",
    clientIndustry: "Professional Services & Legal",
    clientType: "Leading Commercial Law Practice (Managing Partner)",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise corporate legal and compliance professionals reviewing secure digital documents",
    challenge: "The law firm required strict client confidentiality, automated document archiving, and reliable remote access for litigation attorneys with zero tolerance for data leaks.",
    solution: "Engineered a zero-trust cloud document management system, implemented end-to-end encryption for all privileged briefs, and rolled out 24/7 SOC endpoint protection.",
    impact: "Enabled 100% secure remote billable hours, passed comprehensive client cybersecurity audits with zero findings, and eliminated document synchronization lag.",
    metrics: [
      { value: "100%", label: "Client Confidentiality" },
      { value: "35%", label: "Productivity Increase" },
      { value: "0", label: "Security Breaches" },
    ],
    tags: ["Cybersecurity", "Cloud Migration", "Legal IT", "Compliance"],
  },
  {
    slug: "ecommerce-cloud-scalability",
    title: "Scaling E-commerce Cloud Infrastructure for High-Concurrency Holiday Traffic",
    clientIndustry: "Retail & E-commerce",
    clientType: "Fast-Growing Retailer (Operations Director)",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "High-traffic online digital commerce analytics and cloud transaction processing interface",
    challenge: "Digital storefront servers were crashing during promotional flash sales, resulting in cart abandonment and severe revenue loss during peak seasonal periods.",
    solution: "Re-architected the web environment on Microsoft Azure with auto-scaling virtual machine clusters, global CDN caching, and automated Azure cost optimization.",
    impact: "Successfully handled a 600% traffic surge with zero latency degradation while cutting monthly cloud waste by 28% through FinOps governance.",
    metrics: [
      { value: "6x", label: "Traffic Elasticity" },
      { value: "28%", label: "Cloud Cost Savings" },
      { value: "99.99%", label: "Peak Uptime" },
    ],
    tags: ["Cloud Migration", "Azure FinOps", "E-commerce", "Web Solutions"],
  },
];
