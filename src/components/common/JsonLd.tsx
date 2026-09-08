import React from "react";
import { companyData } from "@/data/companyData";
import { siteConfig } from "@/config/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        "name": companyData.name,
        "alternateName": companyData.shortName,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/icon.svg`,
        "sameAs": [
          companyData.socials.linkedin,
          companyData.socials.facebook,
          companyData.socials.instagram,
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": companyData.phones.indiaPrimary,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Tamil"],
          },
          {
            "@type": "ContactPoint",
            "telephone": companyData.phones.canada,
            "contactType": "customer service",
            "areaServed": "CA",
            "availableLanguage": ["English"],
          },
        ],
      },
      ...companyData.offices.map((office, idx) => ({
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#office-${idx}`,
        "name": `${companyData.name} - ${office.city}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": office.address,
          "addressLocality": office.city,
          "addressCountry": office.country,
        },
        "telephone": office.phone,
        "parentOrganization": {
          "@id": `${siteConfig.url}/#organization`,
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
