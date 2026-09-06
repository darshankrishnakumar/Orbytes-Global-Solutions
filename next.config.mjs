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
      { source: '/IT%20services/MSSP', destination: '/solutions/managed-security', permanent: true },
      { source: '/IT services/MSSP', destination: '/solutions/managed-security', permanent: true },
      { source: '/IT%20services/MSP', destination: '/solutions/managed-it', permanent: true },
      { source: '/IT services/MSP', destination: '/solutions/managed-it', permanent: true },
      { source: '/IT%20services/ITSM', destination: '/solutions/itsm', permanent: true },
      { source: '/IT services/ITSM', destination: '/solutions/itsm', permanent: true },
      { source: '/Cloud%20Services/Cloud&Data', destination: '/solutions/cloud', permanent: true },
      { source: '/Cloud%20Services/Azure_Cost_Management', destination: '/solutions/cloud', permanent: true },
      { source: '/Cloud%20Services/IAAS', destination: '/solutions/cloud', permanent: true },
      { source: '/Cloud%20Services/Disaster_recovery_service', destination: '/solutions/cloud', permanent: true },
      { source: '/Cloud%20Services/Microsoft_cloud_service', destination: '/solutions/cloud', permanent: true },
      { source: '/IT%20consulting/IT_Strategy', destination: '/solutions/consulting', permanent: true },
      { source: '/IT%20consulting/Governance', destination: '/solutions/consulting', permanent: true },
      { source: '/IT%20consulting/IT_Assessment', destination: '/solutions/consulting', permanent: true },
      { source: '/IT%20consulting/Technology_strategy', destination: '/solutions/consulting', permanent: true },
      { source: '/IT%20development/web-sol', destination: '/solutions/digital-solutions', permanent: true },
      { source: '/IT%20development/cloud_integration', destination: '/solutions/digital-solutions', permanent: true },
      { source: '/IT%20development/api', destination: '/solutions/digital-solutions', permanent: true },
      { source: '/IT%20development/e-commerce', destination: '/solutions/digital-solutions', permanent: true },
      { source: '/Industries/Healthcare%20&%20Wellness/:path*', destination: '/industries/healthcare', permanent: true },
      { source: '/Industries/Manufacturing/:path*', destination: '/industries/manufacturing', permanent: true },
      { source: '/Industries/Education%20&%20Research/:path*', destination: '/industries/education', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Corporate%20Solutions', destination: '/industries/financial-services', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Retail%20Stores', destination: '/industries/retail', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/E-commerce', destination: '/industries/retail', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Real%20Estate', destination: '/industries/professional-services', permanent: true },
      { source: '/Industries/BUSINESS%20&%20RETAIL/Logistics', destination: '/industries/professional-services', permanent: true },
      { source: '/about/about', destination: '/about', permanent: true },
      { source: '/leadership', destination: '/about/leadership', permanent: true },
      { source: '/about/Partner', destination: '/about/partners', permanent: true },
      { source: '/about/P&P', destination: '/privacy', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
