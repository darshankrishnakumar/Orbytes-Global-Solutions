/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Services redirects
      { source: '/IT%20services/MSSP:ext(.html)?', destination: '/services/integrated/managed-security', permanent: true },
      { source: '/IT services/MSSP:ext(.html)?', destination: '/services/integrated/managed-security', permanent: true },
      { source: '/IT%20services/MSP:ext(.html)?', destination: '/services/integrated/managed-it', permanent: true },
      { source: '/IT services/MSP:ext(.html)?', destination: '/services/integrated/managed-it', permanent: true },
      { source: '/IT%20services/ITSM:ext(.html)?', destination: '/services/integrated/itsm', permanent: true },
      { source: '/IT services/ITSM:ext(.html)?', destination: '/services/integrated/itsm', permanent: true },

      { source: '/Cloud%20Services/Azure_Cost_Management:ext(.html)?', destination: '/services/cloud/azure-cost-management', permanent: true },
      { source: '/Cloud services/Azure_Cost_Management:ext(.html)?', destination: '/services/cloud/azure-cost-management', permanent: true },
      { source: '/Cloud%20Services/IAAS:ext(.html)?', destination: '/services/cloud/iaas', permanent: true },
      { source: '/Cloud services/IAAS:ext(.html)?', destination: '/services/cloud/iaas', permanent: true },
      { source: '/Cloud%20Services/Disaster_recovery_service:ext(.html)?', destination: '/services/cloud/disaster-recovery', permanent: true },
      { source: '/Cloud services/Disaster_recovery_service:ext(.html)?', destination: '/services/cloud/disaster-recovery', permanent: true },
      { source: '/Cloud%20Services/Cloud&Data:ext(.html)?', destination: '/services/cloud/cloud-data-migration', permanent: true },
      { source: '/Cloud services/Cloud&Data:ext(.html)?', destination: '/services/cloud/cloud-data-migration', permanent: true },
      { source: '/Cloud%20Services/Microsoft_cloud_service:ext(.html)?', destination: '/services/cloud/microsoft-cloud', permanent: true },
      { source: '/Cloud services/Microsoft_cloud_service:ext(.html)?', destination: '/services/cloud/microsoft-cloud', permanent: true },

      { source: '/IT%20consulting/Governance:ext(.html)?', destination: '/services/consulting/grc', permanent: true },
      { source: '/IT consulting/Governance:ext(.html)?', destination: '/services/consulting/grc', permanent: true },
      { source: '/IT%20consulting/IT_Assessment:ext(.html)?', destination: '/services/consulting/it-assessment', permanent: true },
      { source: '/IT consulting/IT_Assessment:ext(.html)?', destination: '/services/consulting/it-assessment', permanent: true },
      { source: '/IT%20consulting/Technology_syrategy:ext(.html)?', destination: '/services/consulting/technology-strategy', permanent: true },
      { source: '/IT consulting/Technology_syrategy:ext(.html)?', destination: '/services/consulting/technology-strategy', permanent: true },
      { source: '/IT%20consulting/Technology_strategy:ext(.html)?', destination: '/services/consulting/technology-strategy', permanent: true },
      { source: '/IT%20consulting/IT_Strategy:ext(.html)?', destination: '/services/consulting/it-strategy', permanent: true },
      { source: '/IT consulting/IT_Strategy:ext(.html)?', destination: '/services/consulting/it-strategy', permanent: true },

      { source: '/IT%20development/web-sol:ext(.html)?', destination: '/services/development/web-development', permanent: true },
      { source: '/IT%20development/e-commerce:ext(.html)?', destination: '/services/development/ecommerce', permanent: true },
      { source: '/IT%20development/cloud_integration:ext(.html)?', destination: '/services/development/cloud-integration', permanent: true },
      { source: '/IT%20development/api:ext(.html)?', destination: '/services/development/api-development', permanent: true },

      // Legacy Industries redirects
      { source: '/Industries/BUSINESS%20&%20RETAIL/Corporate%20Solutions:ext(.html)?', destination: '/industries/business-retail/corporate', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Retail%20Stores:ext(.html)?', destination: '/industries/business-retail/retail-stores', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/E-commerce:ext(.html)?', destination: '/industries/business-retail/ecommerce-fulfillment', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Hospitality:ext(.html)?', destination: '/industries/business-retail/hospitality', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Real%20Estate:ext(.html)?', destination: '/industries/business-retail/real-estate', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Logistics:ext(.html)?', destination: '/industries/business-retail/warehousing-logistics', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Salons%20&%20Spas:ext(.html)?', destination: '/industries/business-retail', permanent: true },

      { source: '/Industries/Healthcare%20&%20Wellness/Hospitals%20&%20Clinics:ext(.html)?', destination: '/industries/healthcare-wellness/hospitals-clinics', permanent: true },
      { source: '/Industries/Healthcare%20&%20Wellness/Pharmacies:ext(.html)?', destination: '/industries/healthcare-wellness/pharmacies', permanent: true },
      { source: '/Industries/Healthcare%20&%20Wellness/Biotech%20&%20Labs:ext(.html)?', destination: '/industries/healthcare-wellness/clinical-labs', permanent: true },
      { source: '/Industries/Healthcare%20&%20Wellness/Fitness%20Centers:ext(.html)?', destination: '/industries/healthcare-wellness/wellness-fitness', permanent: true },
      { source: '/Industries/Healthcare%20&%20Wellness/Wellness%20Services:ext(.html)?', destination: '/industries/healthcare-wellness/wellness-fitness', permanent: true },
      { source: '/Industries/Healthcare%20&%20Wellness/Health%20Insurance:ext(.html)?', destination: '/industries/healthcare-wellness', permanent: true },

      { source: '/Industries/Education%20&%20Research/Schools%20&%20Universities:ext(.html)?', destination: '/industries/education-research/schools-universities', permanent: true },
      { source: '/Industries/Education%20&%20Research/Online%20Learning:ext(.html)?', destination: '/industries/education-research/online-learning', permanent: true },
      { source: '/Industries/Education%20&%20Research/Training%20Centers:ext(.html)?', destination: '/industries/education-research/training-centers', permanent: true },
      { source: '/Industries/Education%20&%20Research/Research%20Institutions:ext(.html)?', destination: '/industries/education-research/research-institutes', permanent: true },
      { source: '/Industries/Education%20&%20Research/Libraries%20&%20Archives:ext(.html)?', destination: '/industries/education-research', permanent: true },

      { source: '/Industries/Industries%20&%20Manufacturing/Factories%20&%20Production:ext(.html)?', destination: '/industries/manufacturing-industrial/factories-production', permanent: true },
      { source: '/Industries/Industries%20&%20Manufacturing/Automotive%20&%20Aerospace:ext(.html)?', destination: '/industries/manufacturing-industrial/aerospace-defense', permanent: true },
      { source: '/Industries/Industries%20&%20Manufacturing/Energy%20&%20Utilities:ext(.html)?', destination: '/industries/manufacturing-industrial/energy-utilities', permanent: true },
      { source: '/Industries/Industries%20&%20Manufacturing/Construction:ext(.html)?', destination: '/industries/manufacturing-industrial', permanent: true },
      { source: '/Industries/Industries%20&%20Manufacturing/Mining%20&%20Agriculture:ext(.html)?', destination: '/industries/manufacturing-industrial/mining-agriculture', permanent: true },
      { source: '/Industries/Industries%20&%20Manufacturing/Transportation:ext(.html)?', destination: '/industries/manufacturing-industrial/transportation', permanent: true },

      // Legacy General Pages
      { source: '/about/about:ext(.html)?', destination: '/about', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/leadership', destination: '/about/leadership', permanent: true },
      { source: '/about/Partner', destination: '/about/partners', permanent: true },
      { source: '/about/P&P', destination: '/privacy', permanent: true },
    ];
  },
};

export default nextConfig;
