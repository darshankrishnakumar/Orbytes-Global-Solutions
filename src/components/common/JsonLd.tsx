import React from "react";
import { companyData } from "@/data/companyData";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://technosprint.net/#organization",
        "name": companyData.name,
        "alternateName": companyData.shortName,
        "url": "https://technosprint.net",
        "logo": "https://technosprint.net/logo.png",
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
        "@id": `https://technosprint.net/#office-${idx}`,
        "name": `${companyData.name} - ${office.city}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": office.address,
          "addressLocality": office.city,
          "addressCountry": office.country,
        },
        "telephone": office.phone,
        "parentOrganization": {
          "@id": "https://technosprint.net/#organization",
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
