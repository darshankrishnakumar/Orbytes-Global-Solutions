export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryItem {
  slug: string;
  category: "business-retail" | "healthcare-wellness" | "education-research" | "manufacturing-industrial";
  categoryName: string;
  href: string;
  name: string;
  badge: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  imageUrl: string;
  imageAlt: string;
  challenges: { title: string; description: string }[];
  orbytesSolution: string;
  capabilities: { title: string; description: string }[];
  outcomes: { metric: string; label: string; description: string }[];
  subSectors: string[];
  faqs: IndustryFAQ[];
}

export const industriesData: Record<string, IndustryItem> = {
  // ===================================================
  // 1. BUSINESS & RETAIL
  // ===================================================
  "corporate": {
    slug: "corporate",
    category: "business-retail",
    categoryName: "Business & Retail",
    href: "/industries/business-retail/corporate",
    name: "Corporate Solutions",
    badge: "Enterprise IT & Hybrid Workplace",
    tagline: "Secure, agile technology infrastructure for multinational headquarters and regional corporate offices.",
    heroHeadline: "Corporate IT Solutions for Multi-Branch Enterprises",
    heroSubheadline: "Streamline operations and eliminate multi-vendor friction. We deliver centralized identity governance, high-availability hybrid networks, meeting room collaboration, and 24/7 executive support.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern corporate boardroom with executive team collaborating on enterprise digital systems",
    challenges: [
      { title: "Fragmented Branch Office Networks", description: "Inconsistent firewalls, disparate ISP vendors, and unstandardized hardware across regional branch locations create operational blindspots and security vulnerabilities." },
      { title: "Hybrid Workforce Security Risks", description: "Employees moving between home, airport lounges, and office desks introduce credential theft, unmanaged device vulnerabilities, and unsecured Wi-Fi risks." },
      { title: "Meeting Room & Collaboration Friction", description: "Unreliable conference room AV, incompatible meeting platforms, and poor conference call bandwidth waste executive time and delay critical decisions." },
    ],
    orbytesSolution: "Orbytes standardizes corporate IT across all locations with SD-WAN connectivity, zero-trust Entra ID authentication, centralized endpoint management, and white-glove executive conference room support.",
    capabilities: [
      { title: "Unified Enterprise SD-WAN", description: "Connect all corporate branches and cloud environments via encrypted, auto-failover SD-WAN links." },
      { title: "Centralized Identity & Access (SSO)", description: "Single sign-on, conditional access, and automated employee onboarding/offboarding workflows." },
      { title: "Smart Conference Room & AV Support", description: "Turnkey Microsoft Teams Rooms and Zoom Rooms integration with one-touch join and instant screen sharing." },
      { title: "Executive White-Glove IT Support", description: "Dedicated priority support queue with sub-5 minute response for C-suite and leadership personnel." },
    ],
    outcomes: [
      { metric: "99.99%", label: "Network Uptime", description: "High availability guaranteed across all corporate headquarters." },
      { metric: "< 5 min", label: "Executive SLA", description: "Immediate resolution for leadership and boardroom technologies." },
      { metric: "100%", label: "Device Compliance", description: "Standardized encryption and zero-trust policies on all corporate laptops." },
    ],
    subSectors: ["Corporate Headquarters", "Holding Companies", "Shared Services Centers", "Regional Enterprise Hubs"],
    faqs: [
      {
        question: "How do you manage IT for companies with multiple regional branch offices?",
        answer: "We deploy standardized network hardware, centralized cloud firewall management, and unified endpoint profiles so every branch operates with identical enterprise security and performance.",
      },
      {
        question: "Can you provide rapid on-site assistance for executive emergencies?",
        answer: "Yes, we combine 24/7 immediate remote diagnostics with on-site technician dispatch agreements across major metropolitan business districts.",
      },
    ],
  },

  "ecommerce": {
    slug: "ecommerce",
    category: "business-retail",
    categoryName: "Business & Retail",
    href: "/industries/business-retail/ecommerce",
    name: "E-commerce",
    badge: "High-Concurrency & Cloud Resilience",
    tagline: "Scalable cloud architecture, PCI-compliant checkout, and real-time ERP inventory sync for digital retailers.",
    heroHeadline: "E-Commerce IT Infrastructure & High-Traffic Availability",
    heroSubheadline: "Protect revenue and customer trust during peak promotional surges. We engineer auto-scaling cloud architectures, lightning-fast edge CDNs, and zero-downtime payment pipelines.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "High-volume e-commerce fulfillment and online payment processing center",
    challenges: [
      { title: "Flash Sale Server Crashes", description: "Unprepared cloud servers crash under sudden traffic surges during Black Friday, holiday promotions, or viral marketing campaigns." },
      { title: "Checkout Cart Abandonment", description: "Slow loading product catalogs, complex checkout steps, and payment gateway timeouts cause lost sales." },
      { title: "Inventory Overselling & Discrepancies", description: "Delayed inventory updates between the online storefront and warehouse management systems cause customer cancellations." },
    ],
    orbytesSolution: "We architect resilient, auto-scaling cloud platforms on Azure and AWS backed by global Cloudflare/CloudFront edge caching, sub-second product search, and automated ERP inventory feeds.",
    capabilities: [
      { title: "Elastic Auto-Scaling Infrastructure", description: "Dynamic cloud serverless compute that expands instantly during traffic spikes and scales down when traffic normalizes." },
      { title: "PCI-DSS Level 1 Compliant Security", description: "Tokenized payment gateways, encrypted customer data storage, and automated vulnerability scanning." },
      { title: "Real-Time WMS & ERP Synchronization", description: "Sub-second synchronization between storefronts and back-office ERPs, preventing overselling." },
      { title: "Bot Defense & Fraud Prevention", description: "Advanced web application firewalls (WAF) blocking credential stuffing, scraping bots, and payment card testing." },
    ],
    outcomes: [
      { metric: "100%", label: "Peak Uptime", description: "Zero downtime recorded during holiday flash sales and traffic spikes." },
      { metric: "< 800ms", label: "Page Load Speed", description: "Edge-cached storefront catalogs delivering sub-second experiences." },
      { metric: "0", label: "Inventory Errors", description: "Bi-directional real-time ERP inventory feeds eliminating overselling." },
    ],
    subSectors: ["Direct-to-Consumer (D2C) Brands", "Multi-Vendor Marketplaces", "B2B Wholesale Portals", "Omnichannel Retailers"],
    faqs: [
      {
        question: "How do you ensure our website doesn't crash during major sales events?",
        answer: "We deploy auto-scaling container clusters, configure global CDN edge caching for all static assets and product images, and perform pre-sale load testing up to 10x your expected peak.",
      },
      {
        question: "Can you connect our custom online store with NetSuite or SAP?",
        answer: "Yes, our API and middleware practice specializes in bi-directional integrations between storefronts and enterprise ERPs like NetSuite, SAP, Microsoft Dynamics, and custom SQL databases.",
      },
    ],
  },

  "logistics": {
    slug: "logistics",
    category: "business-retail",
    categoryName: "Business & Retail",
    href: "/industries/business-retail/logistics",
    name: "Logistics & Supply Chain",
    badge: "Fleet Telematics & Warehouse Wi-Fi",
    tagline: "Resilient IT for distribution centers, third-party logistics (3PL), and transportation networks.",
    heroHeadline: "Logistics IT Solutions for Real-Time Supply Chain Visibility",
    heroSubheadline: "Keep freight moving without disruption. We provide rugged warehouse Wi-Fi mesh, GPS fleet telematics integration, electronic logging device (ELD) compliance, and 24/7 terminal support.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Automated logistics warehouse with forklift barcode scanners and tracking systems",
    challenges: [
      { title: "Warehouse Wi-Fi Dead Zones", description: "Metal racking, moving pallet inventory, and vast square footage disrupt handheld RFID barcode scanners, stalling order fulfillment." },
      { title: "Fleet Connectivity & Telematics Outages", description: "Intermittent cellular coverage and dropped dispatch feeds cause delayed deliveries and compliance penalties." },
      { title: "Ransomware Targeting Supply Chains", description: "Cybercriminals increasingly target logistics hubs with ransomware to force urgent ransom payments to prevent supply chain halts." },
    ],
    orbytesSolution: "Orbytes designs enterprise RF-engineered Wi-Fi mesh networks that penetrate warehouse racking, deploys secure IoT telematics pipelines, and isolates critical dispatch systems behind 24/7 SOC monitoring.",
    capabilities: [
      { title: "Industrial Warehouse Wi-Fi Mesh", description: "High-density wireless access points engineered specifically for metal rack reflection and mobile handheld scanners." },
      { title: "TMS & Fleet Telematics Integration", description: "Continuous integration between GPS trackers, Electronic Logging Devices (ELD), and Transportation Management Systems." },
      { title: "Dual-WAN LTE/Satellite Failover", description: "Automatic failover to 5G/Starlink backup connections ensuring distribution centers never lose dispatch capabilities." },
      { title: "Rugged Mobile Device Management (MDM)", description: "Centralized configuration, security locking, and remote wiping of rugged Android warehouse scanners and driver tablets." },
    ],
    outcomes: [
      { metric: "99.99%", label: "Scanner Reliability", description: "Zero handheld disconnects across multi-acre warehouse facilities." },
      { metric: "< 10s", label: "Failover Time", description: "Seamless dual-WAN failover during primary ISP fiber cuts." },
      { metric: "100%", label: "ELD Compliance", description: "Continuous driver logging compliance adhering to transport regulations." },
    ],
    subSectors: ["3PL Distribution Centers", "Freight Forwarding", "Cold Storage Logistics", "Last-Mile Delivery Fleets"],
    faqs: [
      {
        question: "Why do our handheld warehouse scanners keep losing connection in certain aisles?",
        answer: "Metal racking and high-density inventory absorb and reflect radio frequencies. We perform on-site predictive RF heat-mapping and install directional industrial access points to eliminate dead zones.",
      },
      {
        question: "What happens to our warehouse operations if our primary fiber internet is cut?",
        answer: "Our dual-WAN automated failover routers instantly switch all traffic to redundant 5G or satellite connections within seconds, keeping picking and shipping fully operational.",
      },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    category: "business-retail",
    categoryName: "Business & Retail",
    href: "/industries/business-retail/real-estate",
    name: "Real Estate & Property Tech",
    badge: "Smart Buildings & Brokerage IT",
    tagline: "Secure property management systems, MLS integrations, and smart building IoT networks.",
    heroHeadline: "Real Estate IT Solutions for Brokerages & Property Managers",
    heroSubheadline: "Safeguard high-value transaction data and streamline tenant operations. We support MLS real-time synchronization, secure escrow wire communication, and smart building IoT infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern commercial real estate skyscrapers with digital property technology systems",
    challenges: [
      { title: "Wire Fraud & Escrow Phishing", description: "Real estate transactions are prime targets for wire fraud through compromised email accounts and forged wire instructions." },
      { title: "Dispersed Mobile Agent Devices", description: "Brokers and agents working on personal smartphones and laptops create unmanaged security risks for sensitive client financial records." },
      { title: "Smart Building IoT Security", description: "Unsecured smart thermostats, access control turnstiles, and surveillance cameras create backdoors into property management networks." },
    ],
    orbytesSolution: "We implement encrypted email authentication (DMARC/MFA) to stop wire fraud, deploy mobile device management for agents, and segment smart building IoT networks away from tenant databases.",
    capabilities: [
      { title: "Wire Fraud Prevention & Email Hardening", description: "Advanced phishing protection, encrypted email portals, and verified recipient verification for closing documents." },
      { title: "Property Management System (PMS) Hosting", description: "High-availability cloud hosting and support for Yardi, RealPage, AppFolio, and custom tenant portals." },
      { title: "Smart Building IoT Network Segmentation", description: "Isolate tenant Wi-Fi, HVAC controllers, security cameras, and elevator telemetry on private encrypted VLANs." },
      { title: "Agent Mobile Device Management (MDM)", description: "Secure client financial files and contracts on mobile devices with automated encryption and remote wipe." },
    ],
    outcomes: [
      { metric: "Zero", label: "Wire Fraud Incidents", description: "100% protection against escrow spoofing and invoice phishing." },
      { metric: "100%", label: "Isolated IoT", description: "Complete network segregation for all commercial building sensors." },
      { metric: "99.9%", label: "PMS Uptime", description: "Uninterrupted availability for tenant lease and payment portals." },
    ],
    subSectors: ["Commercial Property Management", "Residential Real Estate Brokerages", "REITs & Asset Managers", "Co-Working Facilities"],
    faqs: [
      {
        question: "How do you protect real estate brokerages against wire fraud?",
        answer: "We enforce strict multi-factor authentication, implement outbound DMARC/DKIM email signing, and deploy AI email security that flags forged wire instructions and fraudulent domains.",
      },
      {
        question: "Can you support our property management software like Yardi or AppFolio?",
        answer: "Yes, we regularly manage cloud hosting, user permission baselines, database backups, and client portal integrations for all major property management software suites.",
      },
    ],
  },

  "retail-stores": {
    slug: "retail-stores",
    category: "business-retail",
    categoryName: "Business & Retail",
    href: "/industries/business-retail/retail-stores",
    name: "Retail Stores & Point of Sale",
    badge: "POS Uptime & In-Store Networks",
    tagline: "Always-on POS terminals, PCI compliance, inventory scanners, and guest Wi-Fi for multi-location stores.",
    heroHeadline: "Retail IT Solutions for Point of Sale & In-Store Systems",
    heroSubheadline: "Never miss a sale due to network downtime. We provide hardened POS connectivity, LTE failover, isolated customer guest Wi-Fi, and real-time inventory management across all storefronts.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern retail store with digital checkout point of sale terminals and inventory scanners",
    challenges: [
      { title: "POS Downtime During Peak Hours", description: "When in-store internet fails, credit card processing halts, resulting in long checkout queues, abandoned purchases, and lost revenue." },
      { title: "PCI-DSS Compliance Audits", description: "Retail stores processing credit card data face strict compliance requirements and catastrophic penalties for unencrypted cardholder data." },
      { title: "Customer Wi-Fi Security Risks", description: "Unsegmented guest Wi-Fi allows malicious visitors to scan in-store networks and attempt attacks on POS terminals." },
    ],
    orbytesSolution: "Orbytes installs dual-WAN routers with instant LTE failover, isolates POS terminals on dedicated PCI-compliant VLANs, and provides 24/7 monitoring so registers never go offline.",
    capabilities: [
      { title: "Zero-Downtime POS LTE Failover", description: "Instant cellular backup that seamlessly keeps credit card terminals processing transactions during fiber outages." },
      { title: "PCI-DSS Compliant Network Segmentation", description: "Physically and logically separate payment terminals from back-office computers and customer Wi-Fi networks." },
      { title: "Secure Branded Guest Wi-Fi", description: "Provide fast, captive-portal customer Wi-Fi that collects marketing opt-ins while keeping corporate data totally isolated." },
      { title: "Multi-Store Centralized IT Management", description: "Push software updates, pricing feeds, and security patches to all store branches simultaneously from the cloud." },
    ],
    outcomes: [
      { metric: "< 5s", label: "LTE Failover", description: "Continuous transaction processing even during fiber internet cuts." },
      { metric: "100%", label: "PCI Compliance", description: "Zero audit infractions across all managed payment terminals." },
      { metric: "24/7", label: "Store Support", description: "Immediate assistance during evening and weekend retail operating hours." },
    ],
    subSectors: ["Apparel & Fashion Retailers", "Specialty Boutique Chains", "Convenience & Grocery Stores", "Hardware & Home Goods"],
    faqs: [
      {
        question: "What happens if our store internet cuts out during a busy weekend?",
        answer: "Our dual-WAN failover router switches transactions to a cellular LTE connection within 3 seconds, meaning cashiers and customers never notice the interruption.",
      },
      {
        question: "How do you ensure our customer Wi-Fi doesn't compromise credit card terminals?",
        answer: "We configure strict micro-segmented VLANs and hardware firewall rules ensuring public guest traffic has zero route to POS terminals or back-office accounting systems.",
      },
    ],
  },

  "salons-spas": {
    slug: "salons-spas",
    category: "business-retail",
    categoryName: "Business & Retail",
    href: "/industries/business-retail/salons-spas",
    name: "Salons & Spas",
    badge: "Booking Systems & Guest Experience",
    tagline: "Seamless appointment booking, client retention CRM, contactless payments, and fast guest Wi-Fi.",
    heroHeadline: "IT Solutions for Salons, Spas & Wellness Retail",
    heroSubheadline: "Deliver an exceptional, stress-free client experience. We support automated appointment scheduling, mobile checkout tablets, client profile databases, and isolated guest Wi-Fi.",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury salon and spa front desk with digital appointment booking tablets",
    challenges: [
      { title: "Missed Bookings from System Crashes", description: "When online booking portals or scheduling tablets crash, clients cannot book appointments, leading directly to lost revenue." },
      { title: "Client Privacy & Profile Protection", description: "Storing confidential client credit card details, treatment notes, and contact info requires strict data protection." },
      { title: "Unreliable Front Desk Tablets", description: "Slow tablet checkouts and failed contactless tap-to-pay transactions frustrate clients and slow down stylists." },
    ],
    orbytesSolution: "We configure reliable, cloud-backed booking platforms (Mindbody, Boulevard, Phorest, Fresha), optimize salon Wi-Fi, and provide managed iPads and payment terminals with instant support.",
    capabilities: [
      { title: "Booking Software Optimization & Cloud Sync", description: "Ensure calendar appointments, staff schedules, and client histories synchronize flawlessly across all devices." },
      { title: "Managed Front-Desk & Stylist Tablets", description: "Pre-configured iPads locked into single-app kiosk mode for rapid client check-in and mobile chairside payments." },
      { title: "Fast, Welcoming Guest Wi-Fi", description: "High-speed guest Wi-Fi for clients during treatments, isolated securely from appointment and payment systems." },
      { title: "Automated Data Backup & Client Protection", description: "Daily cloud backups of client notes, appointment histories, and loyalty balances." },
    ],
    outcomes: [
      { metric: "99.9%", label: "Booking Uptime", description: "Ensure online booking is always open for client appointments 24/7." },
      { metric: "0", label: "Front Desk Delays", description: "Sub-second tablet checkout and instant contactless tap-to-pay." },
      { metric: "100%", label: "Data Security", description: "Encrypted client records and PCI-compliant payment storage." },
    ],
    subSectors: ["Hair Salons & Barbershops", "Day Spas & Medical Spas", "Nail & Beauty Studios", "Massage & Wellness Clinics"],
    faqs: [
      {
        question: "Which salon and spa software platforms do you support?",
        answer: "We support all major industry platforms including Mindbody, Boulevard, Phorest, Vagaro, Fresha, Zenoti, and Square for Appointments.",
      },
      {
        question: "Can stylists accept payments directly at their stations?",
        answer: "Yes, we deploy secure mobile payment terminals and tablets that allow stylists to check out clients right from their stations, eliminating front-desk bottlenecks.",
      },
    ],
  },

  // ===================================================
  // 2. HEALTHCARE & WELLNESS
  // ===================================================
  "hospitals-clinics": {
    slug: "hospitals-clinics",
    category: "healthcare-wellness",
    categoryName: "Healthcare & Wellness",
    href: "/industries/healthcare-wellness/hospitals-clinics",
    name: "Hospitals & Clinics",
    badge: "HIPAA Compliant & Mission-Critical",
    tagline: "Zero-downtime IT for hospitals, surgical centers, outpatient clinics, and physician groups.",
    heroHeadline: "Healthcare IT Solutions for Hospitals & Clinical Networks",
    heroSubheadline: "Protect patient health records while maintaining 99.99% clinical uptime. We guarantee full HIPAA compliance, secure medical device telemetry, and rapid 24/7 emergency support.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern hospital intensive care unit with advanced clinical digital telemetry",
    challenges: [
      { title: "HIPAA Compliance & Ransomware Extortion", description: "Hospitals are the top target for ransomware. A breach exposes Protected Health Information (PHI) to massive fines and public scrutiny." },
      { title: "EHR / EMR System Latency", description: "Slow Electronic Health Record loading stalls clinician charting, delays medication orders, and frustrates physicians." },
      { title: "Medical Device Network Vulnerabilities", description: "Diagnostic imaging devices, infusion pumps, and patient monitors running legacy operating systems create attack entry points." },
    ],
    orbytesSolution: "Orbytes builds zero-trust healthcare networks with isolated medical device VLANs, immutable ransomware-proof patient backups, and priority sub-15 minute emergency clinical response.",
    capabilities: [
      { title: "HIPAA Zero-Trust Architecture", description: "Full data encryption at rest and in transit, multi-factor biometric authentication, and immutable audit logging." },
      { title: "EHR / PACS Optimization & High Availability", description: "Performance tuning and low-latency storage for Epic, Cerner, MEDITECH, and high-resolution PACS imaging." },
      { title: "Medical IoT & Telemetry Segmentation", description: "Isolate biomedical devices on private networks, preventing lateral threat movement." },
      { title: "24/7/365 Clinical Priority SLA", description: "Dedicated priority support queue with sub-15 minute response times for operating rooms and clinical workstations." },
    ],
    outcomes: [
      { metric: "100%", label: "HIPAA Audit Pass", description: "Zero infractions across all managed healthcare environments." },
      { metric: "99.99%", label: "Clinical Uptime", description: "Guaranteed system availability for critical patient care systems." },
      { metric: "< 15 min", label: "Emergency SLA", description: "Rapid response for operating rooms and urgent clinical issues." },
    ],
    subSectors: ["Regional Hospital Systems", "Outpatient Surgery Centers", "Specialty Medical Clinics", "Urgent Care Networks"],
    faqs: [
      {
        question: "Do you sign Business Associate Agreements (BAAs)?",
        answer: "Yes, we sign comprehensive BAAs with all healthcare clients, formally committing to all required administrative, physical, and technical HIPAA safeguards.",
      },
      {
        question: "How do you protect vulnerable legacy medical devices from network attacks?",
        answer: "We place connected medical devices on micro-segmented VLANs governed by strict firewall rules that prevent any communication outside authorized PACS/EHR servers.",
      },
    ],
  },

  "pharmacies": {
    slug: "pharmacies",
    category: "healthcare-wellness",
    categoryName: "Healthcare & Wellness",
    href: "/industries/healthcare-wellness/pharmacies",
    name: "Pharmacies & Pharmaceutical Care",
    badge: "DEA Compliance & Dispensing Systems",
    tagline: "Secure prescription dispensing, DEA Electronic Prescriptions for Controlled Substances (EPCS), and barcode verification.",
    heroHeadline: "Pharmacy IT Solutions for Prescription Dispensing & Compliance",
    heroSubheadline: "Keep dispensing lines running smoothly and securely. We support pharmacy management systems (PMS), DEA EPCS compliance, barcode verification networks, and encrypted insurance claims routing.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cleanroom pharmacy dispensing counter with digital prescription management systems",
    challenges: [
      { title: "Dispensing System Downtime", description: "When the pharmacy management system disconnects, pharmacists cannot verify drug interactions or fill urgent prescriptions." },
      { title: "DEA EPCS Compliance Mandates", description: "Electronic Prescriptions for Controlled Substances (EPCS) require strict two-factor authentication and auditable digital chain-of-custody." },
      { title: "Insurance Adjudication Timeouts", description: "Slow network connections cause real-time insurance claims processing to time out, creating angry customer lines." },
    ],
    orbytesSolution: "We provide high-speed, dual-WAN failover networks for uninterrupted insurance adjudication, hardened PMS hosting, and two-factor token authentication meeting strict DEA EPCS standards.",
    capabilities: [
      { title: "Pharmacy Management System (PMS) Support", description: "Expert maintenance and tuning for PioneerRx, QS/1, McKesson EnterpriseRx, and Computer-Rx." },
      { title: "DEA EPCS Two-Factor Authentication", description: "Deploy compliant hardware security keys and biometric tokens for controlled substance dispensing approval." },
      { title: "Low-Latency Claims Adjudication Routing", description: "Prioritized network quality-of-service (QoS) routing ensuring sub-second insurance claim approvals." },
      { title: "Automated Barcode & Pill Verification Networks", description: "High-speed Wi-Fi and scanner connectivity connecting pill counters, verification cameras, and label printers." },
    ],
    outcomes: [
      { metric: "< 2s", label: "Claims Adjudication", description: "Sub-second insurance response times at the dispensing counter." },
      { metric: "100%", label: "DEA EPCS Compliance", description: "Full compliance with electronic controlled substance requirements." },
      { metric: "99.99%", label: "System Uptime", description: "Continuous dispensing operations with dual-WAN failover." },
    ],
    subSectors: ["Independent Community Pharmacies", "Compounding Pharmacies", "Hospital Inpatient Pharmacies", "Mail-Order Specialty Pharmacies"],
    faqs: [
      {
        question: "How do you ensure our insurance claims adjudicate without timing out?",
        answer: "We implement network Quality-of-Service (QoS) rules that prioritize insurance switchboard traffic over all other store bandwidth, backed by redundant cellular LTE failover.",
      },
      {
        question: "Can you help us achieve DEA EPCS certification?",
        answer: "Yes, we implement the required identity proofing, two-factor authentication tokens, and dual-authorization workflows required by DEA audits.",
      },
    ],
  },

  "biotech-labs": {
    slug: "biotech-labs",
    category: "healthcare-wellness",
    categoryName: "Healthcare & Wellness",
    href: "/industries/healthcare-wellness/biotech-labs",
    name: "Biotech & Laboratories",
    badge: "LIMS & High-Throughput Genomics",
    tagline: "Petabyte data storage, Laboratory Information Management Systems (LIMS), and cleanroom workstation integration.",
    heroHeadline: "Biotechnology & Clinical Laboratory IT Infrastructure",
    heroSubheadline: "Accelerate scientific discovery with high-speed laboratory infrastructure. We support high-throughput sequencers, petabyte genomic data pipelines, and FDA 21 CFR Part 11 electronic records compliance.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Biotech research laboratory scientist using high-precision pipettes and scientific compute workstations",
    challenges: [
      { title: "Massive Genomic Data Sprawl", description: "Next-Generation Sequencers (NGS) generate terabytes of raw data daily, quickly overwhelming local storage and backup pipelines." },
      { title: "FDA 21 CFR Part 11 Audit Trails", description: "Clinical trial data and laboratory results must maintain immutable, tamper-evident audit logs to satisfy FDA scrutiny." },
      { title: "Cleanroom Workstation Restrictions", description: "Cleanroom IT equipment must comply with sterilization standards and maintain remote manageability without physical entry." },
    ],
    orbytesSolution: "Orbytes delivers tiered hybrid cloud storage for multi-petabyte datasets, validates LIMS systems for FDA 21 CFR Part 11 compliance, and deploys sealed, remotely managed cleanroom terminals.",
    capabilities: [
      { title: "High-Performance Compute & Scientific Storage", description: "10Gbps/40Gbps laboratory storage networks with automated tiering to low-cost cloud archive vaults." },
      { title: "LIMS System Integration & Support", description: "Seamless deployment, backup, and database tuning for leading Laboratory Information Management Systems." },
      { title: "FDA 21 CFR Part 11 Audit Trail Verification", description: "Immutable time-stamped logging and digital signature enforcement for all scientific testing results." },
      { title: "Instrument & Sequencer Network Integration", description: "Secure high-bandwidth data pipes connecting Illumina, Thermo Fisher, and mass spectrometry instruments directly to cloud storage." },
    ],
    outcomes: [
      { metric: "10 Gbps+", label: "Data Pipeline", description: "High-speed laboratory networks transferring massive sequencing runs." },
      { metric: "100%", label: "FDA 21 CFR Part 11", description: "Immutable audit logs satisfying pharmaceutical regulatory standards." },
      { metric: "70%", label: "Storage Cost Savings", description: "Automated cold-tier archiving for historical research datasets." },
    ],
    subSectors: ["Genomics & DNA Sequencing Labs", "Clinical Diagnostic Laboratories", "Pharmaceutical R&D", "Contract Research Organizations (CRO)"],
    faqs: [
      {
        question: "How do you handle the massive storage demands of Next-Generation Sequencing (NGS)?",
        answer: "We deploy high-speed local NVMe cache storage for active instrument runs, automatically archiving completed sequencing datasets to encrypted, cost-effective cloud object storage tiers.",
      },
      {
        question: "Can you assist with validating laboratory software for FDA compliance?",
        answer: "Yes, we produce full Installation Qualification (IQ) and Operational Qualification (OQ) documentation verifying audit trails, access controls, and electronic signatures under 21 CFR Part 11.",
      },
    ],
  },

  "fitness-centers": {
    slug: "fitness-centers",
    category: "healthcare-wellness",
    categoryName: "Healthcare & Wellness",
    href: "/industries/healthcare-wellness/fitness-centers",
    name: "Fitness Centers & Gyms",
    badge: "Turnstile Access & Member Billing",
    tagline: "RFID turnstile entry, multi-location membership billing, class scheduling, and member Wi-Fi.",
    heroHeadline: "IT Solutions for Fitness Centers, Gyms & Health Clubs",
    heroSubheadline: "Keep member check-ins moving smoothly 24/7. We integrate RFID turnstile access control, recurring membership billing software, high-bandwidth gym floor Wi-Fi, and digital signage.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern fitness center gym floor with cardio machines, digital screens, and member check-in portals",
    challenges: [
      { title: "Turnstile Entry Failures", description: "When member check-in scanners fail, long lines form at front desks, and unstaffed 24-hour gym locations become completely locked out." },
      { title: "Multi-Location Billing Sync Errors", description: "Members visiting different gym branches experience check-in rejection due to out-of-sync database records." },
      { title: "Gym Floor Wi-Fi Congestion", description: "Hundreds of concurrent members streaming music and video quickly saturate bandwidth, disrupting music feeds and cardio screens." },
    ],
    orbytesSolution: "We deploy cloud-managed access control with local offline caching, optimize member management systems (ABC Fitness, Mindbody, Jonas), and engineer high-density gym floor Wi-Fi.",
    capabilities: [
      { title: "24/7 Access Control & Turnstile Integration", description: "RFID, barcode, and mobile NFC turnstile systems with local offline caching that grants access even during internet outages." },
      { title: "Multi-Club Membership Database Sync", description: "Real-time synchronization of member status, payments, and waiver forms across all regional locations." },
      { title: "High-Density Member & Cardio Wi-Fi", description: "Enterprise access points supporting hundreds of concurrent streaming smartphones with bandwidth rate limiting." },
      { title: "Digital Signage & Sound System Networking", description: "Networked audio-visual distribution for workout displays, club announcements, and synchronized music streams." },
    ],
    outcomes: [
      { metric: "100%", label: "Turnstile Uptime", description: "Local offline access caching ensuring members are never locked out." },
      { metric: "24/7", label: "Unstaffed Security", description: "Automated access logging and surveillance network reliability." },
      { metric: "< 1s", label: "Check-in Speed", description: "Instant RFID and NFC member badge recognition." },
    ],
    subSectors: ["24/7 Fitness Franchises", "Luxury Health & Athletic Clubs", "CrossFit & Boutique Studios", "YMCAs & Community Recreation"],
    faqs: [
      {
        question: "What happens if the internet goes down at an unstaffed 24/7 gym location?",
        answer: "Our access control controllers store an active local copy of member credentials on-premises, continuing to validate cards and open turnstiles even if internet connectivity drops.",
      },
      {
        question: "How do you prevent members from hogging all the Wi-Fi bandwidth?",
        answer: "We configure smart bandwidth throttling per device on the guest network, reserving dedicated high-priority bandwidth for check-in computers, security cameras, and club music.",
      },
    ],
  },

  "wellness-services": {
    slug: "wellness-services",
    category: "healthcare-wellness",
    categoryName: "Healthcare & Wellness",
    href: "/industries/healthcare-wellness/wellness-services",
    name: "Wellness Services & Allied Health",
    badge: "Telehealth & HIPAA Intake",
    tagline: "Encrypted virtual therapy, digital patient intake forms, electronic charting, and appointment scheduling.",
    heroHeadline: "IT Solutions for Wellness Services & Allied Healthcare",
    heroSubheadline: "Provide compassionate care supported by secure technology. We engineer HIPAA-compliant telehealth portals, encrypted patient intake forms, and cloud practice management systems.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Holistic wellness clinic practitioner using secure telehealth tablet for client consultation",
    challenges: [
      { title: "Unencrypted Virtual Consultations", description: "Using standard non-compliant video platforms (FaceTime, standard Zoom) for therapy or wellness consultations violates HIPAA regulations." },
      { title: "Manual Paper Patient Intake", description: "Paper health histories require manual retyping, increasing administrative overhead and introducing transcription errors." },
      { title: "Remote Clinician Laptop Vulnerabilities", description: "Therapists and wellness practitioners working from home laptops risk exposing client clinical notes if devices are lost or stolen." },
    ],
    orbytesSolution: "We deploy turn-key, HIPAA-compliant telehealth portals, digital tablet intake workflows, and full-disk device encryption to protect client mental and physical health records.",
    capabilities: [
      { title: "HIPAA-Compliant Telehealth Infrastructure", description: "End-to-end encrypted video and audio consultation platforms that execute Business Associate Agreements (BAAs)." },
      { title: "Paperless Patient Intake & Consent", description: "Encrypted digital intake forms completed on patient phones or clinic iPads that populate directly into client charts." },
      { title: "Practice Management Cloud Hosting", description: "Configuration and optimization for SimplePractice, Jane App, TherapyNotes, and Kareo." },
      { title: "Remote Clinician Device Hardening", description: "BitLocker/FileVault encryption, remote wipe capabilities, and automated cloud backup for all practitioner laptops." },
    ],
    outcomes: [
      { metric: "100%", label: "HIPAA Compliance", description: "Full regulatory adherence across all telehealth and charting systems." },
      { metric: "0", label: "Paper Intake", description: "100% digital client onboarding with automated chart integration." },
      { metric: "< 5 min", label: "Clinician Support", description: "Fast remote support for therapists experiencing audio or video issues." },
    ],
    subSectors: ["Mental Health & Psychotherapy", "Physical Therapy & Chiropractic", "Nutrition & Functional Medicine", "Acupuncture & Holistic Care"],
    faqs: [
      {
        question: "Is standard Zoom or Google Meet compliant for telehealth sessions?",
        answer: "Standard free versions are not compliant because they do not sign a BAA. We configure enterprise healthcare tiers of Zoom, Microsoft Teams, or Google Workspace with formal BAAs and end-to-end encryption.",
      },
      {
        question: "What happens if a practitioner loses their laptop containing client therapy notes?",
        answer: "Because we enforce full-disk encryption and cloud MDM, the laptop data remains completely inaccessible to unauthorized parties, and our team can remotely wipe the machine instantly.",
      },
    ],
  },

  // ===================================================
  // 3. EDUCATION & RESEARCH
  // ===================================================
  "schools-universities": {
    slug: "schools-universities",
    category: "education-research",
    categoryName: "Education & Research",
    href: "/industries/education-research/schools-universities",
    name: "Schools & Universities",
    badge: "Campus Wi-Fi & Student Device MDM",
    tagline: "High-density campus networking, 1:1 Chromebook/iPad management, FERPA compliance, and classroom AV.",
    heroHeadline: "Campus IT Solutions for K-12 Schools & Universities",
    heroSubheadline: "Empower modern digital learning with resilient campus infrastructure. We engineer ultra-fast campus Wi-Fi, manage 1:1 student device fleets, ensure FERPA/CIPA compliance, and secure digital classrooms.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "University campus modern digital lecture hall with connected students and interactive displays",
    challenges: [
      { title: "Massive Campus Wi-Fi Saturation", description: "Thousands of students streaming educational video and connecting multiple personal devices simultaneously overwhelm campus access points." },
      { title: "Managing Large 1:1 Device Fleets", description: "Deploying, monitoring, and filtering thousands of student Chromebooks, iPads, and laptops across school districts is an administrative nightmare." },
      { title: "CIPA & FERPA Regulatory Compliance", description: "Schools must enforce strict content filtering to block inappropriate content (CIPA) while safeguarding student privacy records (FERPA)." },
    ],
    orbytesSolution: "Orbytes deploys high-density Wi-Fi 6E/7 campus networks, centralizes Google Workspace / Apple School Manager device fleets, and implements CIPA-compliant content filtering and threat protection.",
    capabilities: [
      { title: "High-Density Campus Wi-Fi 6E/7", description: "Engineered specifically for lecture halls, dormitories, and sports stadiums to support thousands of concurrent devices." },
      { title: "1:1 Student Device Fleet Management", description: "Automated provisioning, policy lockdown, web filtering, and remote recovery for Chromebook and iPad fleets." },
      { title: "CIPA Content Filtering & Cyber Safety", description: "Cloud-managed web filtering blocking adult content, malicious links, and self-harm keywords with automated alerts." },
      { title: "Classroom AV & Interactive Displays", description: "Turnkey integration for smart boards, classroom audio amplification, and wireless projection systems." },
    ],
    outcomes: [
      { metric: "10,000+", label: "Concurrent Users", description: "Seamless Wi-Fi connectivity during campus-wide testing and events." },
      { metric: "100%", label: "CIPA / FERPA Pass", description: "Full regulatory compliance qualifying schools for E-Rate funding." },
      { metric: "< 2 min", label: "Device Provisioning", description: "Zero-touch deployment for student Chromebooks and iPads." },
    ],
    subSectors: ["K-12 Public School Districts", "Private & Independent Academies", "Community Colleges", "Public & Private Universities"],
    faqs: [
      {
        question: "Can your solutions help our school qualify for E-Rate funding discounts?",
        answer: "Yes, our Category 1 and Category 2 networking equipment, managed internal broadband services, and basic maintenance qualify under universal service E-Rate guidelines.",
      },
      {
        question: "How do you prevent students from bypassing content filters using VPNs?",
        answer: "We deploy deep packet inspection (DPI) firewalls and cloud DNS security that actively detects, blocks, and alerts on unauthorized proxy and VPN protocol attempts.",
      },
    ],
  },

  "online-learning": {
    slug: "online-learning",
    category: "education-research",
    categoryName: "Education & Research",
    href: "/industries/education-research/online-learning",
    name: "Online Learning & EdTech",
    badge: "LMS Hosting & Virtual Classrooms",
    tagline: "High-concurrency LMS hosting, low-latency video streaming, exam proctoring security, and student data privacy.",
    heroHeadline: "EdTech & Online Learning IT Infrastructure",
    heroSubheadline: "Deliver uninterrupted virtual education at global scale. We architect high-concurrency LMS hosting (Canvas, Moodle, Blackboard), secure virtual classrooms, and automated exam proctoring environments.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student participating in interactive online video lecture on laptop with digital course materials",
    challenges: [
      { title: "Exam Day Server Outages", description: "Thousands of students logging in at the exact same minute to submit timed midterm or final exams crash under-provisioned LMS servers." },
      { title: "Video Latency & Buffer Lag", description: "Choppy video and out-of-sync audio during live virtual lectures degrade student engagement and retention." },
      { title: "Online Exam Cheating & Integrity", description: "Securing online testing environments against unauthorized browser tabs, screen sharing, and unverified test takers." },
    ],
    orbytesSolution: "We engineer auto-scaling cloud clusters for learning management systems, deploy low-latency WebRTC live video pipelines, and integrate secure lockdown browser proctoring tools.",
    capabilities: [
      { title: "High-Concurrency LMS Cloud Hosting", description: "Auto-scaling cloud infrastructure for Canvas, Moodle, and custom LMS platforms capable of handling 50,000+ simultaneous test takers." },
      { title: "Low-Latency Global Video Delivery", description: "Global CDN and WebRTC video streaming pipelines delivering sub-second interactive lectures without buffering." },
      { title: "Secure Lockdown Browser Integration", description: "Prevent test takers from copying text, capturing screens, or accessing external websites during exams." },
      { title: "Student Progress & Telemetry Analytics", description: "Big data pipelines tracking student completion rates, video watch engagement, and quiz drop-off metrics." },
    ],
    outcomes: [
      { metric: "99.99%", label: "Exam Uptime", description: "Zero server crashes during high-stakes university exam windows." },
      { metric: "< 500ms", label: "Video Latency", description: "Sub-second global classroom interaction and chat response." },
      { metric: "100%", label: "Data Encryption", description: "Encrypted student grades, test scores, and video records." },
    ],
    subSectors: ["EdTech SaaS Startups", "Virtual High Schools", "Online University Degree Programs", "Professional Certification Platforms"],
    faqs: [
      {
        question: "How do you prepare an LMS for massive traffic spikes during final exams?",
        answer: "We perform automated load testing simulating tens of thousands of concurrent users, pre-warm cloud server instances, and cache static course assets at the network edge.",
      },
      {
        question: "Can you host open-source LMS software like Moodle securely?",
        answer: "Yes, we architect enterprise-grade, high-availability Moodle clusters on Azure and AWS with isolated database tiers, Redis caching, and automated daily backups.",
      },
    ],
  },

  "research-institutions": {
    slug: "research-institutions",
    category: "education-research",
    categoryName: "Education & Research",
    href: "/industries/education-research/research-institutions",
    name: "Research Institutions & Laboratories",
    badge: "HPC Clusters & Scientific Storage",
    tagline: "High-Performance Computing (HPC), petabyte scientific data stores, grant compliance, and research collaboration.",
    heroHeadline: "IT Infrastructure for Scientific Research Institutions",
    heroSubheadline: "Fuel complex computational breakthroughs. We engineer High-Performance Computing (HPC) GPU clusters, ultra-fast research data networks, and NIST SP 800-171 grant compliance frameworks.",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Scientific supercomputer data cluster with fiber optic network cables and high-performance computing nodes",
    challenges: [
      { title: "Massive Computational Bottlenecks", description: "Complex climate simulations, AI model training, and molecular modeling take weeks when run on standard server clusters." },
      { title: "Petabyte Storage Cost Prohibitions", description: "Scientific instruments generate petabytes of raw data that exceed local budget constraints if stored on expensive primary SANs." },
      { title: "Federal Grant Cybersecurity Mandates", description: "Federal research grants (NSF, NIH, DoD) require strict NIST SP 800-171 and CMMC cybersecurity controls to prevent intellectual property theft." },
    ],
    orbytesSolution: "Orbytes designs hybrid HPC GPU compute clusters, deploys high-speed InfiniBand/100GbE storage pipelines, and implements NIST compliance frameworks to protect scientific discoveries.",
    capabilities: [
      { title: "High-Performance Compute (HPC) & GPU Clusters", description: "Architect and manage on-prem and cloud burst HPC clusters optimized for Slurm, MPI, and CUDA workloads." },
      { title: "Multi-Petabyte Research Data Stores", description: "High-throughput Ceph, Lustre, and cloud object storage tiers providing lightning-fast IOPS for simulation jobs." },
      { title: "NIST SP 800-171 & CMMC Compliance", description: "Implement Controlled Unclassified Information (CUI) enclaves satisfying federal research grant security requirements." },
      { title: "Global Research Mesh & Collaboration (Internet2)", description: "High-bandwidth science DMZ networks connecting researchers to national research networks without firewall bottlenecks." },
    ],
    outcomes: [
      { metric: "100 Gbps", label: "Science DMZ", description: "Frictionless petabyte data transfers between global research institutes." },
      { metric: "100%", label: "Grant Compliance", description: "Full adherence to federal CUI and NIST security standards." },
      { metric: "4x", label: "Compute Speedup", description: "Optimized GPU clustering accelerating simulation cycle times." },
    ],
    subSectors: ["University Research Laboratories", "National Science Centers", "Biomedical Research Institutes", "Aerospace & Defense Think Tanks"],
    faqs: [
      {
        question: "Can our researchers burst HPC simulation jobs to the cloud during high demand?",
        answer: "Yes, we architect hybrid cloud burst capabilities where local on-premises clusters automatically spin up additional GPU/CPU instances in Azure or AWS when local queues are full.",
      },
      {
        question: "How do you protect classified or export-controlled research data (ITAR)?",
        answer: "We build isolated CUI enclaves with air-gapped encryption, multi-factor biometric authentication, and strict egress filtering that meets ITAR and CMMC Level 2 standards.",
      },
    ],
  },

  "libraries-archives": {
    slug: "libraries-archives",
    category: "education-research",
    categoryName: "Education & Research",
    href: "/industries/education-research/libraries-archives",
    name: "Libraries & Digital Archives",
    badge: "Digital Preservation & Public Terminals",
    tagline: "Long-term cold preservation, metadata cataloging, secure public computer sandboxing, and patron Wi-Fi.",
    heroHeadline: "IT Solutions for Libraries & Cultural Archives",
    heroSubheadline: "Preserve history and serve the community securely. We provide immutable digital archive storage, integrated library system (ILS) hosting, and sandboxed public terminal management.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Historic library digital repository with public research computer terminals and book stacks",
    challenges: [
      { title: "Digital Bit Rot & Media Degradation", description: "Irreplaceable historical documents, high-res scans, and audio recordings suffer from digital bit rot and unverified media degradation." },
      { title: "Malware from Public Computer Use", description: "Patrons browsing public research computers introduce malware, keyloggers, and configuration tampering that compromise library networks." },
      { title: "Complex Metadata Search & Discovery", description: "Legacy library catalogs make searching rare manuscripts and digital historical collections difficult for remote scholars." },
    ],
    orbytesSolution: "We deploy immutable WORM cloud archiving with continuous hash verification, implement automated reboot-to-restore software on public terminals, and host modern discovery portals.",
    capabilities: [
      { title: "Immutable Digital Preservation & Archiving", description: "Long-term preservation storage with automated SHA-256 checksum verification to detect and repair data corruption." },
      { title: "Public Terminal Sandboxing & Instant Restore", description: "Automated wipe and re-image on every patron logout (Deep Freeze technology), removing all viruses and history." },
      { title: "Integrated Library System (ILS) Hosting", description: "High-availability cloud hosting for Koha, Polaris, Alma, and Symphony library catalog software." },
      { title: "Patron Print & Payment Automation", description: "Self-service mobile printing, wireless copy release stations, and contactless credit card payment kiosks." },
    ],
    outcomes: [
      { metric: "100%", label: "Archive Integrity", description: "Continuous checksum audits ensuring zero digital bit rot." },
      { metric: "0", label: "Public PC Infections", description: "Automated session wiping eliminating 100% of patron malware." },
      { metric: "99.9%", label: "Catalog Availability", description: "24/7 global access to library search and digital collections." },
    ],
    subSectors: ["Public Municipal Libraries", "University Rare Book Repositories", "State & National Archives", "Museums & Historical Societies"],
    faqs: [
      {
        question: "How do you protect public library computers from viruses and malware?",
        answer: "We deploy automated reboot-to-restore software. The moment a patron logs off or the PC reboots, the workstation instantly reverts to a pristine, clean system image, deleting all downloaded files and malware.",
      },
      {
        question: "How does your digital preservation ensure files remain readable decades from now?",
        answer: "We follow the OAIS (Open Archival Information System) reference model, storing multiple geo-replicated copies on immutable storage with automated migration to open preservation formats.",
      },
    ],
  },

  "training-centers": {
    slug: "training-centers",
    category: "education-research",
    categoryName: "Education & Research",
    href: "/industries/education-research/training-centers",
    name: "Training Centers & Academies",
    badge: "Virtual Sandboxes & Lab Provisioning",
    tagline: "Hands-on virtual learning labs, attendee provisioning, certification testing environments, and training room AV.",
    heroHeadline: "IT Solutions for Corporate Training Centers & Academies",
    heroSubheadline: "Deliver high-impact professional training with zero setup delays. We build automated virtual hands-on sandboxes, manage multi-screen training rooms, and secure certification testing centers.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Corporate professional training center classroom with instructor and collaborative student workstations",
    challenges: [
      { title: "Hours Wasted Setting Up Student Machines", description: "Instructors spend hours manually installing software, SDKs, and sample datasets on classroom computers before every training workshop." },
      { title: "Student Machine Conflicts & Corruption", description: "Previous students altering settings, deleting files, or leaving unfinished code breaks environments for the next day's attendees." },
      { title: "Strict Certification Testing Requirements", description: "Proctored certification testing centers (Pearson VUE, Prometric) require locked-down workstation standards and uninterrupted internet." },
    ],
    orbytesSolution: "Orbytes deploys one-click virtual lab provisioning that gives every attendee a fresh cloud environment in seconds, backed by high-speed classroom Wi-Fi and audio-visual integration.",
    capabilities: [
      { title: "Automated Virtual Hands-On Labs", description: "Spin up isolated cloud lab environments for coding, DevOps, or enterprise software workshops with a single click." },
      { title: "Rapid Classroom Reset & Re-Imaging", description: "Instantly re-image physical classroom workstations back to pre-course baseline in under 5 minutes between training cohorts." },
      { title: "Authorized Testing Center Network Security", description: "Hardened, camera-monitored network environments meeting strict proctored testing standards (Pearson VUE / Kryterion)." },
      { title: "Training Room Multi-Display & AV Control", description: "High-definition projection, wireless screen sharing, and ceiling microphone arrays for seamless hybrid instruction." },
    ],
    outcomes: [
      { metric: "< 30s", label: "Lab Spin-up", description: "Instant provisioning of fresh hands-on cloud labs for students." },
      { metric: "100%", label: "Testing Compliance", description: "Full accreditation pass rate for proctored examination centers." },
      { metric: "0", label: "Setup Downtime", description: "Zero minutes wasted on manual software installation before class." },
    ],
    subSectors: ["Corporate IT Academies", "Vocational & Trade Training Centers", "Professional Certification Centers", "Executive Leadership Institutes"],
    faqs: [
      {
        question: "How do virtual hands-on labs work for software and technical training?",
        answer: "Attendees log in via any standard web browser to access a fully functional, pre-configured virtual machine in the cloud, eliminating the need to install complex tools on their personal laptops.",
      },
      {
        question: "Can we run both in-person and remote hybrid training simultaneously?",
        answer: "Yes, we integrate training rooms with smart auto-tracking cameras, beam-forming ceiling microphones, and dual-screen video feeds so remote attendees experience the exact same clarity as in-person students.",
      },
    ],
  },

  // ===================================================
  // 4. MANUFACTURING & INDUSTRIAL
  // ===================================================
  "factories-production": {
    slug: "factories-production",
    category: "manufacturing-industrial",
    categoryName: "Manufacturing & Industrial",
    href: "/industries/manufacturing-industrial/factories-production",
    name: "Factories & Production Lines",
    badge: "OT / SCADA Security & MES Uptime",
    tagline: "Industrial IoT networking, Manufacturing Execution System (MES) uptime, shop-floor tablets, and air-gapped OT security.",
    heroHeadline: "Industrial IT & OT Solutions for Modern Manufacturing",
    heroSubheadline: "Protect shop-floor production from unplanned shutdowns and cyberattacks. We bridge Operational Technology (OT) with IT, maintain 99.99% MES uptime, and deploy rugged industrial networks.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Automated factory floor with robotic assembly arms and digital manufacturing telemetry screens",
    challenges: [
      { title: "Costly Production Line Outages", description: "In manufacturing, every minute of unplanned conveyor or CNC machine stoppage costs thousands of dollars in lost throughput." },
      { title: "OT / SCADA Ransomware Vulnerability", description: "Legacy PLC controllers and SCADA HMIs connected directly to corporate networks expose factory operations to devastating ransomware." },
      { title: "Harsh Factory Floor Physical Environment", description: "Vibration, extreme temperatures, dust, and electrical interference destroy standard office-grade Wi-Fi and computers." },
    ],
    orbytesSolution: "Orbytes implements Purdue Model OT network segmentation, deploys IP67-rated ruggedized industrial Wi-Fi and switches, and monitors MES production databases around the clock.",
    capabilities: [
      { title: "Purdue Model OT / IT Air-Gapping", description: "Strict demilitarized zones (DMZs) and industrial firewalls separating corporate office networks from factory floor PLCs." },
      { title: "MES & ERP Database High Availability", description: "Real-time clustering and instant failover for Manufacturing Execution Systems, SAP, and Plex platforms." },
      { title: "Rugged Industrial Wi-Fi & Switching", description: "Fanless, dust-sealed, DIN-rail mounted network switches and industrial Wi-Fi engineered for harsh manufacturing environments." },
      { title: "Predictive Maintenance IoT Telemetry", description: "Deploy vibration and heat sensor networks that alert maintenance teams before motor or bearing failures stop the line." },
    ],
    outcomes: [
      { metric: "99.99%", label: "Production Uptime", description: "Zero production line halts due to IT or network failures." },
      { metric: "100%", label: "OT Segmentation", description: "Complete isolation of PLC and SCADA devices from public threats." },
      { metric: "< 10 min", label: "Shop-Floor SLA", description: "Immediate response for manufacturing station interruptions." },
    ],
    subSectors: ["Automated Assembly Plants", "Food & Beverage Processing", "Consumer Goods Manufacturing", "Plastics & Metal Fabrication"],
    faqs: [
      {
        question: "How do you protect industrial SCADA and PLC systems from cyber threats?",
        answer: "We deploy strict Purdue Model network micro-segmentation. PLCs communicate only on isolated industrial VLANs through hardened industrial firewalls with zero direct internet access.",
      },
      {
        question: "Can your team support our Manufacturing Execution System (MES) 24/7 across shifts?",
        answer: "Yes, our 24/7 NOC/SOC monitors your MES servers and shop-floor networks continuously across first, second, and third shifts 365 days a year.",
      },
    ],
  },

  "automotive-aerospace": {
    slug: "automotive-aerospace",
    category: "manufacturing-industrial",
    categoryName: "Manufacturing & Industrial",
    href: "/industries/manufacturing-industrial/automotive-aerospace",
    name: "Automotive & Aerospace",
    badge: "CAD/CAM Clusters & CMMC Compliance",
    tagline: "High-performance CAD/CAM workstations, CMMC/ITAR defense compliance, automotive EDI pipelines, and precision engineering.",
    heroHeadline: "Aerospace & Automotive IT Infrastructure",
    heroSubheadline: "Meet rigorous engineering demands and defense compliance mandates. We support high-speed CAD/CAM simulation clusters, supplier EDI networks, and CMMC 2.0 / ITAR cybersecurity readiness.",
    imageUrl: "https://images.unsplash.com/photo-1517976487502-5f65330c6a58?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Advanced aerospace engineering facility assembling high-precision aircraft components",
    challenges: [
      { title: "CMMC & ITAR Defense Mandates", description: "Aerospace and defense subcontractors face strict Department of Defense (DoD) CMMC 2.0 cybersecurity standards to bid on defense contracts." },
      { title: "Massive 3D CAD/CAM File Transfer Latency", description: "Engineers collaborating on gigabyte-sized CATIA, SolidWorks, and Siemens NX assemblies suffer from sluggish file opening and saving over VPNs." },
      { title: "Automotive OEM EDI Supply Chain Deadlines", description: "Failing to transmit Electronic Data Interchange (EDI) advance shipping notices to Ford, GM, or Boeing results in severe supplier penalty chargebacks." },
    ],
    orbytesSolution: "We build secure CMMC Level 2 enclaves for defense manufacturing, optimize VDI virtual workstations for 3D CAD modeling, and provide 24/7 monitored EDI transaction gateways.",
    capabilities: [
      { title: "CMMC 2.0 & ITAR Compliance Enclaves", description: "Audit-ready cloud environments engineered to securely store and process Controlled Unclassified Information (CUI)." },
      { title: "GPU-Accelerated Virtual Workstations (VDI)", description: "High-performance cloud desktops powered by NVIDIA GPUs allowing engineers to model complex 3D CAD assemblies from anywhere." },
      { title: "Automated Automotive EDI Gateways", description: "High-reliability EDI 850/856 transaction processing integrating directly with tier-1 automotive ERPs." },
      { title: "Intellectual Property Vaulting & DLP", description: "Data Loss Prevention (DLP) stopping proprietary proprietary aerospace blueprints from being copied or exfiltrated." },
    ],
    outcomes: [
      { metric: "100%", label: "CMMC Readiness", description: "Full alignment with NIST SP 800-171 DoD cybersecurity controls." },
      { metric: "10x", label: "CAD Load Speed", description: "GPU-powered virtual desktops opening complex 3D assemblies in seconds." },
      { metric: "Zero", label: "EDI Chargebacks", description: "100% on-time transmission of supplier advance shipping notices." },
    ],
    subSectors: ["Tier-1 & Tier-2 Automotive Suppliers", "Aerospace Defense Contractors", "Precision CNC Machine Shops", "Electric Vehicle (EV) Component Plants"],
    faqs: [
      {
        question: "Can you help our machine shop become CMMC Level 2 compliant for defense contracts?",
        answer: "Yes, we implement all 110 NIST SP 800-171 controls, author System Security Plans (SSPs), configure FIPS-validated encryption, and prepare you for formal third-party C3PAO audits.",
      },
      {
        question: "How do your virtual workstations handle heavy 3D CAD software like SolidWorks or CATIA?",
        answer: "We deploy Azure NVv4/AWS G4 instances equipped with dedicated NVIDIA RTX GPUs and ultra-fast NVMe storage, delivering full 60fps responsiveness over standard internet connections.",
      },
    ],
  },

  "construction": {
    slug: "construction",
    category: "manufacturing-industrial",
    categoryName: "Manufacturing & Industrial",
    href: "/industries/manufacturing-industrial/construction",
    name: "Construction & Field Engineering",
    badge: "Jobsite 5G/Starlink & BIM Sync",
    tagline: "Mobile jobsite command trailers, Starlink/5G internet, Building Information Modeling (BIM) cloud sync, and rugged field tablets.",
    heroHeadline: "Construction IT Solutions for Jobsites & Field Teams",
    heroSubheadline: "Bring high-speed, secure IT to every construction jobsite. We deploy rugged mobile internet trailers, Starlink/5G satellite links, real-time BIM model synchronization, and rugged field tablets.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction jobsite project manager using rugged digital tablet to inspect structural building plans",
    challenges: [
      { title: "No Fiber Internet on New Jobsites", description: "New construction sites often lack telecommunications infrastructure for months, leaving trailers without reliable internet." },
      { title: "Slow BIM & Blueprint Synchronization", description: "Field engineers working off outdated blueprints due to slow syncing causes costly rework and construction delays." },
      { title: "Harsh Dust & Mud Jobsite Conditions", description: "Extreme temperatures, dust, vibrations, and weather quickly destroy consumer-grade laptops and networking equipment." },
    ],
    orbytesSolution: "Orbytes provides turnkey 'Jobsite-in-a-Box' trailers with auto-aiming Starlink and multi-carrier 5G, rugged field tablets, and cloud sync for Procore, Autodesk Construction Cloud, and Revit.",
    capabilities: [
      { title: "Jobsite-in-a-Box 5G & Starlink Connectivity", description: "Rapidly deployable, weather-sealed kits delivering high-speed internet and Wi-Fi to job trailers on day one." },
      { title: "BIM & Cloud Project Synchronization", description: "Optimized network pipelines for Procore, Autodesk Construction Cloud, Bluebeam, and PlanGrid." },
      { title: "Rugged Mobile Field Device Management", description: "Provision and lock down drop-tested, dust-proof Android and iPad tablets with daylight-readable screens." },
      { title: "Jobsite Security & Surveillance Cameras", description: "Solar-powered cellular security cameras protecting high-value tools, copper, and equipment from after-hours theft." },
    ],
    outcomes: [
      { metric: "Day 1", label: "Jobsite Internet", description: "High-speed internet active before ground is even broken." },
      { metric: "100%", label: "Blueprint Sync", description: "Field superintendents always working from the latest rev-stamped drawings." },
      { metric: "0", label: "Trailer Downtime", description: "Redundant cellular bonding ensuring continuous project management." },
    ],
    subSectors: ["General Commercial Contractors", "Civil & Heavy Highway Engineering", "Mechanical & Electrical Contractors (MEP)", "Residential Development Builders"],
    faqs: [
      {
        question: "How fast can you set up high-speed internet at a remote jobsite trailer?",
        answer: "We ship pre-configured, plug-and-play kits combining bonded multi-carrier 5G and satellite Starlink that provide instant high-speed Wi-Fi in under 30 minutes.",
      },
      {
        question: "Can your team support our construction software like Procore and Bluebeam?",
        answer: "Yes, we regularly manage license provisioning, user access control, and cloud synchronization optimization for Procore, Autodesk Build, Bluebeam Revu, and Fieldwire.",
      },
    ],
  },

  "energy-utilities": {
    slug: "energy-utilities",
    category: "manufacturing-industrial",
    categoryName: "Manufacturing & Industrial",
    href: "/industries/manufacturing-industrial/energy-utilities",
    name: "Energy & Utilities Infrastructure",
    badge: "NERC CIP Compliance & Grid Telemetry",
    tagline: "Substation network security, NERC CIP compliance, remote telemetry backhaul, and mobile field dispatch.",
    heroHeadline: "Energy & Utilities IT Solutions for Grid Reliability",
    heroSubheadline: "Protect critical infrastructure from sophisticated threats and ensure uninterrupted utility delivery. We provide NERC CIP compliance auditing, remote substation SCADA telemetry, and mobile field workforce connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "High-voltage electrical power grid substation with digital telemetry monitoring arrays",
    challenges: [
      { title: "Nation-State Cyber Attacks on Critical Infrastructure", description: "Energy grids, pipelines, and water treatment plants are prime targets for nation-state cyber warfare and destructive malware." },
      { title: "Strict NERC CIP Regulatory Mandates", description: "Electric utilities face severe daily fines for any physical or cybersecurity deficiency on BES (Bulk Electric System) cyber assets." },
      { title: "Remote Unmanned Substation Monitoring", description: "Monitoring substations and remote pump stations across hundreds of miles of remote terrain requires resilient industrial networking." },
    ],
    orbytesSolution: "We build NERC CIP compliant security architectures, deploy ruggedized cellular routers with IPsec encryption for remote telemetry, and provide 24/7 specialized utility SOC monitoring.",
    capabilities: [
      { title: "NERC CIP Audit & Compliance Hardening", description: "Comprehensive assistance achieving and documenting compliance with NERC CIP-002 through CIP-014 standards." },
      { title: "Rugged Substation SCADA Telemetry", description: "Substation-hardened (IEC 61850 / IEEE 1613) routers transferring RTU telemetry over private cellular APNs." },
      { title: "Critical Infrastructure 24/7 SOC Surveillance", description: "Dedicated industrial security operations monitoring network traffic for unauthorized PLC reprogramming attempts." },
      { title: "Field Crew Mobile Dispatch & Toughbook Support", description: "Rugged laptop MDM and secure mobile CAD/GIS dispatch integration for emergency utility restoration crews." },
    ],
    outcomes: [
      { metric: "100%", label: "NERC CIP Audit Pass", description: "Full regulatory compliance avoiding costly federal non-compliance penalties." },
      { metric: "99.999%", label: "Telemetry Uptime", description: "Five-nines network availability for critical grid control circuits." },
      { metric: "< 15 min", label: "Storm Dispatch", description: "Instant mobile dispatch connectivity for restoration technicians." },
    ],
    subSectors: ["Electric Power Utilities", "Renewable Solar & Wind Farms", "Water & Wastewater Municipalities", "Oil & Natural Gas Pipelines"],
    faqs: [
      {
        question: "How do you help utilities satisfy NERC CIP compliance requirements?",
        answer: "We establish Electronic Security Perimeters (ESPs), configure multi-factor authentication, maintain baseline configuration documentation, and automate patch monitoring per NERC CIP-007.",
      },
      {
        question: "Can your equipment operate in harsh electrical substation environments?",
        answer: "Yes, we deploy specialized utility-grade hardware tested to IEEE 1613 and IEC 61850-3 standards, featuring extreme electromagnetic immunity and operating temperatures from -40°C to +85°C.",
      },
    ],
  },

  "mining-agriculture": {
    slug: "mining-agriculture",
    category: "manufacturing-industrial",
    categoryName: "Manufacturing & Industrial",
    href: "/industries/manufacturing-industrial/mining-agriculture",
    name: "Mining & Precision Agriculture",
    badge: "Autonomous Telemetry & Remote Edge",
    tagline: "Rugged edge servers, autonomous fleet Wi-Fi, satellite backhaul, and precision sensor telemetry for remote operations.",
    heroHeadline: "Mining & Agritech IT Solutions for Remote Sites",
    heroSubheadline: "Operate reliably in the world's most remote environments. We engineer autonomous vehicle mesh networks, private LTE/5G arrays, satellite internet backhaul, and ruggedized edge compute.",
    imageUrl: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Heavy autonomous mining haul trucks operating in remote open pit mineral extraction facility",
    challenges: [
      { title: "Complete Lack of Commercial Telecom", description: "Remote open-pit mines and sprawling agricultural acreage have zero commercial cellular coverage or terrestrial fiber." },
      { title: "Dust, Mud, and Extreme Temperature Wear", description: "Airborne mineral dust, slurry, and temperature extremes rapidly overheat and short-circuit standard networking gear." },
      { title: "Autonomous Hauler Network Latency", description: "Autonomous drill rigs and robotic haul trucks require guaranteed low-latency wireless links to prevent emergency safety stops." },
    ],
    orbytesSolution: "We design Private LTE/5G wireless networks, deploy IP68 dust-proof edge compute clusters, and integrate Starlink/O3b satellite backhaul with local offline autonomous control.",
    capabilities: [
      { title: "Private LTE / 5G Industrial Networks", description: "Deploy dedicated private cellular base stations providing miles of reliable coverage for autonomous equipment." },
      { title: "Starlink & Satellite Telemetry Backhaul", description: "High-throughput satellite communication linking remote mining camps and agricultural sensors directly to headquarters." },
      { title: "Ruggedized Edge Computing Nodes", description: "Fanless, sealed edge micro-data centers that process telemetry locally without requiring constant cloud connectivity." },
      { title: "Agritech IoT & Soil Sensor Networks", description: "LoRaWAN long-range, low-power sensor arrays monitoring soil moisture, weather stations, and pivot irrigation controllers." },
    ],
    outcomes: [
      { metric: "100%", label: "Remote Coverage", description: "Private cellular coverage spanning thousands of remote acres." },
      { metric: "< 20ms", label: "Fleet Latency", description: "Sub-20ms wireless latency ensuring continuous autonomous hauler safety." },
      { metric: "0", label: "Dust Failures", description: "IP68 sealed enclosures preventing dust infiltration and overheating." },
    ],
    subSectors: ["Open-Pit & Underground Mining", "Large-Scale Agritech & Precision Farming", "Timber & Forestry Operations", "Remote Mineral Exploration Camps"],
    faqs: [
      {
        question: "Why is Private LTE better than Wi-Fi for remote mining or agricultural sites?",
        answer: "Private LTE covers miles from a single tower (versus a few hundred feet for Wi-Fi), provides seamless vehicle handoff without dropped packets, and operates on dedicated, interference-free frequencies.",
      },
      {
        question: "What happens if satellite internet disconnects at a remote mining facility?",
        answer: "Our edge servers maintain all local operational telemetry, vehicle dispatching, and security logging offline, automatically syncing historical batches once satellite connectivity restores.",
      },
    ],
  },

  "transportation": {
    slug: "transportation",
    category: "manufacturing-industrial",
    categoryName: "Manufacturing & Industrial",
    href: "/industries/manufacturing-industrial/transportation",
    name: "Transportation & Fleet Networks",
    badge: "Fleet Telematics & ELD Compliance",
    tagline: "Commercial fleet telematics, FMCSA ELD compliance, driver tablets, route optimization, and passenger Wi-Fi.",
    heroHeadline: "Transportation IT Solutions for Fleet & Transit Operations",
    heroSubheadline: "Keep fleets rolling safely and efficiently. We support automated Electronic Logging Device (ELD) compliance, real-time GPS fleet telematics, driver tablet management, and passenger Wi-Fi.",
    imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Commercial transportation logistics highway fleet with digital telematics GPS navigation",
    challenges: [
      { title: "FMCSA Hours-of-Service (HOS) Violations", description: "Failing to capture accurate driver hours via Electronic Logging Devices results in heavy fines and vehicles pulled out of service." },
      { title: "Driver Cell Phone Distraction & Security", description: "Unsecured driver tablets allow unauthorized app downloads and social media use, creating severe road safety and liability risks." },
      { title: "Cargo Temperature Telemetry Outages", description: "Refrigerated freight requires continuous temperature logging; dropped sensor alerts cause spoiled loads and costly insurance claims." },
    ],
    orbytesSolution: "We deploy locked-down Mobile Device Management (MDM) on driver tablets, integrate IoT reefers with real-time temperature telemetry, and ensure 100% ELD data compliance.",
    capabilities: [
      { title: "ELD Compliance & Hours-of-Service Integration", description: "Automated engine diagnostic connectors transmitting verified driving hours to dispatch and regulatory portals." },
      { title: "Kiosk-Locked Driver Tablet MDM", description: "Lock company tablets so drivers can only access dispatch, navigation, and inspection apps, preventing distractions." },
      { title: "Reefer Cold-Chain IoT Temperature Monitoring", description: "Real-time temperature telemetry alerting dispatch immediately if refrigeration units experience deviation." },
      { title: "Transit Passenger Wi-Fi & Bus Telematics", description: "CIPA-filtered public Wi-Fi and automated vehicle location (AVL) feeds for commuter transit buses and trains." },
    ],
    outcomes: [
      { metric: "100%", label: "FMCSA ELD Compliance", description: "Zero Hours-of-Service infractions across commercial carrier audits." },
      { metric: "Zero", label: "Reefer Cargo Loss", description: "Real-time alerts preventing perishable temperature spoilage." },
      { metric: "24/7", label: "Fleet Visibility", description: "Real-time GPS tracking and vehicle diagnostic engine telemetry." },
    ],
    subSectors: ["Long-Haul Trucking Carriers", "Public Transit Authorities", "Intermodal Rail Transport", "Corporate Shuttle & Bus Fleets"],
    faqs: [
      {
        question: "How do you lock down driver tablets so drivers cannot use unapproved apps while driving?",
        answer: "We configure Mobile Device Management (MDM) with motion-detection policies that lock the tablet screen into a simple navigation and dispatch mode whenever the vehicle is in motion.",
      },
      {
        question: "Can your telematics systems alert us before a vehicle engine breaks down on the highway?",
        answer: "Yes, our diagnostic adapters read engine fault codes (J1939 / OBD-II) in real time and send immediate alerts to maintenance managers when critical engine or transmission anomalies appear.",
      },
    ],
  },
};

// ==========================================
// BACKWARD COMPATIBILITY / CATEGORY ALIASES
// ==========================================
industriesData["healthcare"] = industriesData["hospitals-clinics"];
industriesData["financial-services"] = industriesData["corporate"];
industriesData["manufacturing"] = industriesData["factories-production"];
industriesData["retail"] = industriesData["retail-stores"];
industriesData["education"] = industriesData["schools-universities"];
industriesData["professional-services"] = industriesData["corporate"];

// Category Hub Aliases
industriesData["business-retail"] = industriesData["corporate"];
industriesData["healthcare-wellness"] = industriesData["hospitals-clinics"];
industriesData["education-research"] = industriesData["schools-universities"];
industriesData["manufacturing-industrial"] = industriesData["factories-production"];

// ==========================================
// SUB-SECTOR VERTICALS & SLUG ALIASES
// ==========================================
industriesData["specialty-clinics"] = {
  ...industriesData["hospitals-clinics"],
  slug: "specialty-clinics",
  category: "healthcare-wellness",
  categoryName: "Healthcare & Wellness",
  href: "/industries/healthcare-wellness/specialty-clinics",
  name: "Specialty Clinics & Outpatient Centers",
  badge: "Ambulatory & Clinical IT",
  tagline: "High-reliability clinical networks, automated patient intake, and HIPAA-compliant PACS imaging for specialized medical practices.",
  heroHeadline: "IT Solutions for Specialty Clinics & Outpatient Care Centers",
  heroSubheadline: "Eliminate downtime in treatment rooms. We deliver high-speed medical Wi-Fi, seamless EHR integration, automated appointment telephony, and 24/7 proactive cybersecurity.",
  subSectors: ["Orthopedic & Spine Centers", "Cardiology Outpatient Clinics", "Ambulatory Surgical Centers (ASC)", "Ophthalmology & Eye Care Clinics"],
};

industriesData["clinical-labs"] = {
  ...industriesData["biotech-labs"],
  slug: "clinical-labs",
  category: "healthcare-wellness",
  categoryName: "Healthcare & Wellness",
  href: "/industries/healthcare-wellness/clinical-labs",
  imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Advanced diagnostic clinical pathology laboratory instrumentation",
  name: "Clinical Diagnostics & Pathology Labs",
  badge: "LIMS & Clinical Pathology",
  tagline: "Ultra-secure diagnostic instrument networks, automated LIMS test reporting, and HIPAA/CAP-compliant pathology storage.",
  heroHeadline: "High-Throughput IT & Data Infrastructure for Diagnostic Laboratories",
  heroSubheadline: "Accelerate test turnaround times with high-throughput laboratory networks, automated instrument interfaces, and encrypted result delivery portals.",
  subSectors: ["Pathology Diagnostic Centers", "Genomic Sequencing Labs", "Clinical Reference Laboratories", "Toxicology & Blood Testing Centers"],
};

industriesData["dental-practices"] = {
  ...industriesData["hospitals-clinics"],
  slug: "dental-practices",
  category: "healthcare-wellness",
  categoryName: "Healthcare & Wellness",
  href: "/industries/healthcare-wellness/dental-practices",
  imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Modern digital operatory dental practice clinical technology suite",
  name: "Dental Groups & Orthodontics",
  badge: "Dental Practice Management",
  tagline: "High-speed digital intraoral sensor networks, 3D cone-beam CT server clustering, and cloud practice management software.",
  heroHeadline: "Dental IT & Practice Management Infrastructure",
  heroSubheadline: "Streamline multi-chair operatory imaging, patient chart synchronization, and automated appointment confirmations with 99.99% uptime.",
  subSectors: ["Multi-Location Dental Groups", "Orthodontic & Pediatric Practices", "Oral & Maxillofacial Surgical Centers", "Periodontal Specialist Clinics"],
};

industriesData["wellness-fitness"] = {
  ...industriesData["fitness-centers"],
  slug: "wellness-fitness",
  category: "healthcare-wellness",
  categoryName: "Healthcare & Wellness",
  href: "/industries/healthcare-wellness/wellness-fitness",
  name: "Wellness & Digital Health Fitness",
  badge: "Member Experience & IoT",
  tagline: "High-density streaming cardio Wi-Fi, turnstile RFID access control, and resilient cloud booking infrastructure.",
  heroHeadline: "Modern IT Architecture for Health Clubs & Wellness Studios",
  heroSubheadline: "Keep member check-ins moving fast and cardio streams uninterrupted with enterprise Wi-Fi 6E, automated payment processing, and unified surveillance.",
  subSectors: ["Commercial Health & Athletic Clubs", "Boutique Fitness Franchises", "Day Spas & Medical Spas", "Holistic Wellness Centers"],
};

industriesData["financial"] = {
  ...industriesData["corporate"],
  slug: "financial",
  category: "business-retail",
  categoryName: "Business & Retail",
  href: "/industries/business-retail/financial",
  imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "High-security financial services trading floor and quantitative banking dashboard",
  name: "Financial Services & Banking",
  badge: "FINRA / SEC & Wealth Tech",
  tagline: "Zero-trust cybersecurity, immutable transaction logging, and high-availability trading networks for wealth managers and financial institutions.",
  heroHeadline: "Financial-Grade Cybersecurity & Mission-Critical IT Management",
  heroSubheadline: "Protect fiduciary assets and satisfy SEC/FINRA examination requirements with automated compliance archiving, DLP data safeguards, and 24/7 SOC surveillance.",
  subSectors: ["Wealth Management & Family Offices", "Community Banks & Credit Unions", "Private Equity & Hedge Funds", "Accounting & Audit Advisory Firms"],
};

industriesData["ecommerce-fulfillment"] = {
  ...industriesData["ecommerce"],
  slug: "ecommerce-fulfillment",
  category: "business-retail",
  categoryName: "Business & Retail",
  href: "/industries/business-retail/ecommerce-fulfillment",
  name: "E-Commerce & Digital Storefronts",
  badge: "High-Concurrency Cloud & PCI-DSS",
  tagline: "Elastic cloud compute for viral flash sales, sub-second checkout latency, and real-time fulfillment warehouse ERP sync.",
  heroHeadline: "High-Scalability Cloud Foundations for E-Commerce & Fulfillment",
  heroSubheadline: "Ensure zero cart abandonment during peak seasonal demand with auto-scaling Kubernetes clusters, PCI-DSS Level 1 security, and multi-CDN edge delivery.",
  subSectors: ["DTC Consumer Brands", "Multi-Channel Retailers", "Third-Party Logistics (3PL) E-Commerce", "Subscription Box Platforms"],
};

industriesData["hospitality"] = {
  ...industriesData["salons-spas"],
  slug: "hospitality",
  category: "business-retail",
  categoryName: "Business & Retail",
  href: "/industries/business-retail/hospitality",
  imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Luxury hotel resort lobby with digital guest concierge check-in and Wi-Fi infrastructure",
  name: "Hospitality & Hotel Networks",
  badge: "Guest Wi-Fi & PMS Systems",
  tagline: "High-speed guest Wi-Fi gateways, keycard RFID lock servers, and 24/7 PMS payment terminal uptime for hospitality properties.",
  heroHeadline: "Hospitality IT Solutions for Hotels, Resorts & Event Venues",
  heroSubheadline: "Deliver 5-star digital guest experiences with high-density in-room Wi-Fi, PMS-integrated digital check-in, and reliable restaurant POS networking.",
  subSectors: ["Boutique & Luxury Hotels", "Resort & Conference Centers", "Restaurant & Hospitality Groups", "Extended-Stay Properties"],
};

industriesData["warehousing-logistics"] = {
  ...industriesData["logistics"],
  slug: "warehousing-logistics",
  category: "business-retail",
  categoryName: "Business & Retail",
  href: "/industries/business-retail/warehousing-logistics",
  name: "Warehousing & Logistics Networks",
  badge: "Supply Chain & Industrial Wi-Fi",
  tagline: "Extreme-range warehouse wireless, rugged barcode scanner mobility, and automated EDI order dispatch clustering.",
  heroHeadline: "Industrial Wi-Fi & Mission-Critical WMS Infrastructure for Logistics",
  heroSubheadline: "Eliminate barcode scanner dropouts in high-rack aisles with directional antennas, redundant dual-ISP fiber failover, and automated cold-chain sensor monitoring.",
  subSectors: ["Regional Distribution Centers", "Cold Storage & Refrigerated Logistics", "Cross-Docking Facilities", "Freight Forwarding Operations"],
};

industriesData["k12-districts"] = {
  ...industriesData["schools-universities"],
  slug: "k12-districts",
  category: "education-research",
  categoryName: "Education & Research",
  href: "/industries/education-research/k12-districts",
  name: "K-12 School Districts & Academies",
  badge: "CIPA & 1:1 Student Devices",
  tagline: "CIPA-compliant web filtering, 1:1 student Chromebook fleet automation, and district-wide campus emergency notification systems.",
  heroHeadline: "Secure Classroom Networks & Device Management for K-12 Districts",
  heroSubheadline: "Provide safe, uninterrupted learning for thousands of concurrent students with automated content filtering, Google Workspace for Education governance, and campus safety IoT.",
  subSectors: ["Public School Districts", "Private & Independent Academies", "Charter School Systems", "Regional Educational Boards"],
};

industriesData["research-institutes"] = {
  ...industriesData["research-institutions"],
  slug: "research-institutes",
  category: "education-research",
  categoryName: "Education & Research",
  href: "/industries/education-research/research-institutes",
  name: "Research Institutes & Scientific Labs",
  badge: "HPC Clusters & Big Data",
  tagline: "Petabyte-scale scientific file systems, InfiniBand GPU clusters, and NIST 800-171 controlled research compliance.",
  heroHeadline: "HPC & Ultra-High Bandwidth Infrastructure for Research Institutes",
  heroSubheadline: "Empower breakthroughs with GPU-accelerated computing pipelines, automated scientific instrument backups, and zero-loss multi-terabit research networking.",
  subSectors: ["Applied Physics & Materials Labs", "Biomedical Research Institutes", "Renewable Energy Research Centers", "Atmospheric & Environmental Science Hubs"],
};

industriesData["aerospace-defense"] = {
  ...industriesData["automotive-aerospace"],
  slug: "aerospace-defense",
  category: "manufacturing-industrial",
  categoryName: "Manufacturing & Industrial",
  href: "/industries/manufacturing-industrial/aerospace-defense",
  imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Advanced defense aerospace manufacturing and precision avionics assembly facility",
  name: "Aerospace & Defense Contractors",
  badge: "CMMC 2.0 & ITAR Security",
  tagline: "CMMC Level 2 cybersecurity, ITAR-compliant air-gapped CAD engineering vaults, and DFARS supply chain audit readiness.",
  heroHeadline: "CMMC 2.0 & Defense Supply Chain Cyber Infrastructure",
  heroSubheadline: "Protect Controlled Unclassified Information (CUI) and maintain DoD contract eligibility with encrypted CAD/CAM enclaves, multi-factor hardware keys, and 24/7 US/Canada-based SOC logging.",
  subSectors: ["DoD Tier-1 & Tier-2 Suppliers", "Precision Aerospace Machining", "Avionics & Drone Systems", "Defense Electronics Manufacturers"],
};

