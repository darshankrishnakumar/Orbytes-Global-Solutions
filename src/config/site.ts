export const siteConfig = {
  name: "Orbytes Global Solutions",
  shortName: "Orbytes",
  description:
    "Orbytes delivers proactive cybersecurity (MSSP), managed IT operations (MSP), zero-downtime cloud migration, ITSM, and digital solutions for growing and enterprise organizations across India and North America.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://orbytesglobal.com").replace(/\/$/, ""),
  tagline: "Technology that Secures. Technology that Scales.",
  keywords: [
    "Managed Security Services",
    "MSSP",
    "Managed IT Services",
    "MSP",
    "Cloud Migration",
    "Azure FinOps",
    "ITSM",
    "ITIL",
    "IT Consulting",
    "Orbytes Global Solutions",
    "Enterprise IT Solutions",
    "Cybersecurity Operations Center",
    "Zero Trust Architecture",
    "Disaster Recovery as a Service",
  ],
  author: {
    name: "Orbytes Global Solutions",
    url: "https://orbytesglobal.com",
  },
  creator: "Orbytes Global Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Orbytes Global Solutions",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@orbytesglobal",
  },
} as const;

export type SiteConfig = typeof siteConfig;
