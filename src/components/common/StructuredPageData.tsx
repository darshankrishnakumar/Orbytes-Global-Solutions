import React from "react";
import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredPageDataProps {
  title: string;
  description?: string;
  url: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: FAQItem[];
}

export function StructuredPageData({
  title,
  description,
  url,
  breadcrumbs,
  faqs,
}: StructuredPageDataProps) {
  const fullUrl = url.startsWith("http") ? url : `${siteConfig.url}${url}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith("http") ? crumb.url : `${siteConfig.url}${crumb.url}`,
    })),
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
