export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryItem {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  imageUrl: string;
  imageAlt: string;
  challenges: { title: string; description: string }[];
  technosprintSolution: string;
  capabilities: { title: string; description: string }[];
  outcomes: { metric: string; label: string; description: string }[];
  subSectors: string[];
  faqs: IndustryFAQ[];
}

export const industriesData: Record<string, IndustryItem> = {
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    badge: "HIPAA Compliant & Mission-Critical",
    tagline: "Secure, compliant IT for hospitals, clinics, biotech, and telehealth providers.",
    heroHeadline: "Healthcare IT Solutions for Hospitals, Clinics & Life Sciences",
    heroSubheadline: "Protecting sensitive patient health information (PHI) while maintaining 99.99% uptime for clinical systems. We ensure full HIPAA compliance, secure medical device integration, and seamless telehealth infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clinical healthcare professional using high-precision digital tablet in modern medical environment",
    challenges: [
      { title: "HIPAA Compliance & Data Breaches", description: "Healthcare organizations are prime targets for ransomware, facing severe regulatory fines and reputational catastrophe for compromised patient records." },
      { title: "EHR & Medical Device Silos", description: "Interfacing legacy Electronic Health Record (EHR) systems with newer diagnostic medical devices, telemetry units, and mobile tablets without breaking workflows." },
      { title: "24/7 Zero-Downtime Demands", description: "In acute healthcare settings, system unavailability directly impacts clinical decisions, emergency patient care, and lives." },
      { title: "Telehealth & Remote Care Security", description: "Expanding virtual patient appointments and remote patient monitoring (RPM) over untrusted residential internet connections." },
    ],
    technosprintSolution: "Orbytes deploys specialized healthcare IT architectures that isolate medical devices, encrypt patient records at rest and in transit, and enforce zero-trust identity policies. Our 24/7 healthcare NOC/SOC guarantees uninterrupted clinical operations.",
    capabilities: [
      { title: "HIPAA-Compliant Cloud & Storage", description: "Encrypted, geo-redundant storage architectures meeting strict HIPAA, HITECH, and GDPR mandates." },
      { title: "Medical Device & IoT Telemetry Integration", description: "Secure network segmentation isolating diagnostic equipment and infusion pumps from standard office networks." },
      { title: "EHR / EMR System Optimization", description: "High-speed database tuning and high-availability clustering for leading EHR software platforms." },
      { title: "24/7 Clinical Emergency Support", description: "Priority SLA response for intensive care units, emergency rooms, surgical centers, and pharmacies." },
      { title: "Telehealth Infrastructure Engineering", description: "Low-latency, encrypted video communications and remote clinician access portals." },
    ],
    outcomes: [
      { metric: "100%", label: "HIPAA Compliance", description: "Zero audit infractions across all managed healthcare environments." },
      { metric: "99.99%", label: "Clinical Uptime", description: "Guaranteed system availability for Electronic Health Record portals." },
      { metric: "< 15 min", label: "Emergency SLA", description: "Rapid response times for hospital and clinic technical emergencies." },
    ],
    subSectors: ["Hospitals & Healthcare Systems", "Specialty Clinics", "Pharmacies & Dispensing", "Biotech & Clinical Laboratories", "Telehealth Providers"],
    faqs: [
      {
        question: "How does Orbytes ensure HIPAA compliance for healthcare IT?",
        answer: "We sign Business Associate Agreements (BAAs), implement end-to-end encryption for all Protected Health Information (PHI), enforce multi-factor authentication, perform annual risk assessments, and maintain continuous immutable audit logs.",
      },
      {
        question: "What support do you provide for connected medical devices?",
        answer: "We establish dedicated, micro-segmented VLANs with strict firewall rules preventing medical IoT devices from communicating outside authorized hospital servers, mitigating potential lateral intrusion.",
      },
      {
        question: "How do you handle emergency IT outages in hospitals and clinics?",
        answer: "Our healthcare clients receive dedicated 24/7/365 emergency escalation dispatch with immediate remote support and redundant cloud failover systems.",
      },
      {
        question: "Can you assist with migration from legacy servers to healthcare cloud?",
        answer: "Yes, we architect HIPAA-compliant landing zones on Microsoft Azure and AWS with automated backups, disaster recovery, and verified data integrity validation.",
      },
    ],
  },

  "financial-services": {
    slug: "financial-services",
    name: "Financial Services & Banking",
    badge: "High-Availability & Regulatory GRC",
    tagline: "Resilient infrastructure and airtight security for banks, asset managers, and fintechs.",
    heroHeadline: "Financial Services IT: High Availability, Security & Regulatory Resilience",
    heroSubheadline: "Safeguard transactions, customer capital, and corporate trust. Orbytes engineers low-latency, highly resilient IT infrastructure compliant with SOX, GLBA, and PCI-DSS standards.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fintech market analytics, algorithmic trading graphs, and banking data screens",
    challenges: [
      { title: "Relentless Cyber Threats & Fraud", description: "Financial institutions face constant credential stuffing, ransomware, wire fraud, and spear-phishing campaigns." },
      { title: "Complex Regulatory Audits", description: "Stringent regulatory oversight from central banks and oversight bodies requiring complete audit traceability." },
      { title: "Microsecond Latency & High Concurrency", description: "Trading platforms, payment gateways, and banking portals demand flawless concurrency during market peaks." },
      { title: "Legacy Core Banking Integration", description: "Modernizing customer-facing digital apps while safely integrating with decades-old core banking databases." },
    ],
    technosprintSolution: "We build military-grade cybersecurity perimeters and high-availability cloud architectures. Through continuous automated GRC monitoring, encryption, and 24/7 SOC surveillance, we keep financial institutions safe and compliant.",
    capabilities: [
      { title: "PCI-DSS & SOC 2 Compliance Frameworks", description: "Continuous policy validation, encrypted transaction pipelines, and vulnerability assessments." },
      { title: "Ultra-Low Latency Cloud Networks", description: "Direct cloud interconnects, SD-WAN, and optimized routing for algorithmic processing." },
      { title: "24/7 Financial SOC & Threat Hunting", description: "Real-time AI threat detection stopping unauthorized access attempts and account takeover vectors." },
      { title: "Automated Disaster Recovery & Data Vaults", description: "Immutable air-gapped backups ensuring financial transaction ledgers are impossible to tamper with." },
      { title: "Secure Financial Remote Workspaces", description: "Virtual Desktop Infrastructure (VDI) with zero data loss prevention (DLP) controls for remote analysts." },
    ],
    outcomes: [
      { metric: "Zero", label: "Breach Record", description: "Impenetrable perimeter defense across all managed financial institutions." },
      { metric: "100%", label: "Audit Readiness", description: "Automated compliance reports ready for internal and regulatory inspections." },
      { metric: "99.999%", label: "Platform Availability", description: "High-availability clustering for transaction and core banking operations." },
    ],
    subSectors: ["Commercial & Community Banking", "Wealth & Asset Management", "FinTech & Payment Processors", "Insurance & Underwriting", "Credit Unions"],
    faqs: [
      {
        question: "How does Orbytes handle PCI-DSS compliance requirements?",
        answer: "We design compliant cardholder data environments (CDE), isolate payment tokens, conduct quarterly vulnerability scans, and implement rigorous multi-factor authentication across all access points.",
      },
      {
        question: "What measures protect financial data from ransomware?",
        answer: "We deploy immutable, air-gapped cloud backups, next-gen endpoint protection (EDR) with real-time ransomware rollback, and strict zero-trust network segmentation.",
      },
      {
        question: "Can Orbytes help modernize legacy core banking systems?",
        answer: "Yes, we architect secure API middleware layers that allow legacy backends to securely communicate with modern web portals, mobile banking apps, and cloud analytics.",
      },
    ],
  },

  "manufacturing": {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    badge: "Industrial IoT & OT/IT Convergence",
    tagline: "Proactive maintenance, OT network security, and factory-floor IT uptime.",
    heroHeadline: "Manufacturing IT Solutions: Maximizing Factory Floor Uptime & Smart OT Security",
    heroSubheadline: "Bridge the gap between Operational Technology (OT) and Information Technology (IT). Prevent catastrophic production halts with proactive monitoring, industrial IoT connectivity, and robust supply chain security.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Industrial engineer supervising automated robotics and smart factory OT equipment",
    challenges: [
      { title: "Unplanned Factory Downtime", description: "Every hour a production line stands idle costs tens of thousands of dollars in lost yield and idle labor." },
      { title: "Vulnerable OT/SCADA Environments", description: "Industrial machines running legacy Windows or unpatched firmware connected to office networks expose the factory floor." },
      { title: "Supply Chain & Logistics Glitches", description: "Disjointed ERP, MES, and warehouse management systems causing shipping delays and inventory discrepancies." },
      { title: "Harsh Physical Factory Conditions", description: "Dust, vibration, and temperature fluctuations degrading traditional IT hardware on plant floors." },
    ],
    technosprintSolution: "Orbytes provides industrial-grade IT infrastructure: segmented OT/IT networks, predictive maintenance telemetry, and ruggedized edge computing that keeps assembly lines and automated warehouses running without interruption.",
    capabilities: [
      { title: "OT / SCADA Network Segmentation", description: "Purdue Model-aligned firewalls isolating industrial control systems from standard corporate internet." },
      { title: "Predictive IT Infrastructure Monitoring", description: "Detecting network bottlenecks and server degradation before assembly line scanners fail." },
      { title: "ERP & MES System Synchronization", description: "High-speed integrations between manufacturing execution systems (MES) and enterprise ERPs." },
      { title: "Ruggedized Factory Edge Hardware", description: "Deploying and managing dust-resistant, wide-temperature edge servers for harsh environments." },
      { title: "Warehouse & RFID Wireless Infrastructure", description: "High-density enterprise Wi-Fi designed to penetrate metal racks and support automated mobile robots (AMRs)." },
    ],
    outcomes: [
      { metric: "99.98%", label: "Plant Floor Uptime", description: "Drastic reduction in IT-related manufacturing line stoppages." },
      { metric: "40%", label: "Faster Ticket Resolution", description: "Direct dedicated industrial IT engineers dispatched immediately." },
      { metric: "Zero", label: "OT Malware Infiltrations", description: "Complete physical and logical isolation of critical SCADA controls." },
    ],
    subSectors: ["Automotive & Aerospace", "Heavy Machinery & Fabrication", "Electronics & High-Tech", "Food & Beverage Processing", "Chemical & Materials"],
    faqs: [
      {
        question: "How do you protect industrial SCADA and PLC systems from cyberattacks?",
        answer: "We implement defense-in-depth network architectures, establishing strict Demilitarized Zones (DMZ) between corporate IT and factory OT, enforcing unidirectional data diodes and strict access control.",
      },
      {
        question: "How does Orbytes handle plant-floor wireless connectivity in challenging environments?",
        answer: "We perform predictive RF wireless heat mapping, installing industrial-grade access points with directional antennas that overcome metal interference and physical warehouse barriers.",
      },
      {
        question: "Can you support round-the-clock 24/7 manufacturing shifts?",
        answer: "Yes, our NOC and helpdesk operate 24 hours a day, 365 days a year, matching the continuous shift schedules of modern factories.",
      },
    ],
  },

  "retail": {
    slug: "retail",
    name: "Retail & E-commerce",
    badge: "Omnichannel Resilience & High Concurrency",
    tagline: "Seamless POS reliability, peak traffic scalability, and customer data security.",
    heroHeadline: "Retail & E-commerce IT: Omnichannel Performance & Peak Scalability",
    heroSubheadline: "Deliver frictionless shopping experiences in-store and online. We engineer high-availability point-of-sale (POS) systems, resilient e-commerce architectures, and secure payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "High-tech automated retail distribution center and logistics fulfillment operations",
    challenges: [
      { title: "Peak Holiday Traffic Crashes", description: "Black Friday and promotional traffic spikes crashing digital storefronts and costing immense revenue." },
      { title: "In-Store POS Outages", description: "Slow or disconnected card readers and cash registers creating long checkout lines and frustrated shoppers." },
      { title: "Inventory & Catalog Discrepancies", description: "Lag between physical warehouse inventory and online storefronts causing overselling and stockouts." },
      { title: "PCI-DSS Data Protection", description: "Ensuring customer credit card information is never compromised across hundreds of branch stores." },
    ],
    technosprintSolution: "Orbytes ensures your retail enterprise operates without a hiccup. From cloud auto-scaling that handles 10x traffic surges to redundant cellular failover for store POS terminals, we power modern retail commerce.",
    capabilities: [
      { title: "POS Terminal Management & LTE Failover", description: "Automatic failover to cellular 5G whenever landline broadband fails, ensuring transactions never stop." },
      { title: "High-Concurrency Cloud E-Commerce", description: "Elastic auto-scaling web infrastructure capable of handling millions of simultaneous shoppers." },
      { title: "Omnichannel ERP & Inventory Sync", description: "Real-time stock synchronization between warehouse management systems and digital checkout carts." },
      { title: "Store Wi-Fi & Guest Analytics", description: "Secure, segmented guest Wi-Fi alongside isolated, PCI-compliant internal associate networks." },
      { title: "Continuous PCI-DSS Audit Management", description: "Automated scanning of POS networks and payment gateways to ensure strict merchant compliance." },
    ],
    outcomes: [
      { metric: "100%", label: "POS Transaction Uptime", description: "Automatic LTE failover keeps registers ringing during internet outages." },
      { metric: "10x", label: "Traffic Elasticity", description: "Automated cloud scaling effortlessly absorbs viral promotional spikes." },
      { metric: "Sub-Second", label: "Page Load Speeds", description: "Optimized CDNs and database caching for instant product browsing." },
    ],
    subSectors: ["Multi-Location Retail Chains", "Direct-to-Consumer (DTC) E-commerce", "Supermarkets & Grocery", "Luxury Brands & Boutiques", "Quick-Service Restaurants (QSR)"],
    faqs: [
      {
        question: "What happens if our retail store loses internet connectivity during business hours?",
        answer: "We deploy dual-WAN routers with automated cellular LTE/5G failover. The moment primary broadband drops, the router cuts over instantaneously with zero transaction dropouts.",
      },
      {
        question: "How do you optimize e-commerce web applications for peak sales events?",
        answer: "We implement cloud autoscaling policies, database read replicas, distributed Redis caching, and global Content Delivery Networks (CDNs) to withstand intense traffic surges.",
      },
      {
        question: "How is customer cardholder data safeguarded across multiple retail locations?",
        answer: "Point-to-point encryption (P2PE) ensures card details are encrypted before touching the local POS and routed directly to payment processors without storing raw data locally.",
      },
    ],
  },

  "education": {
    slug: "education",
    name: "Education & Research",
    badge: "Secure Campus Networks & High-Scale LMS",
    tagline: "Scalable cloud, student data privacy, and robust campus digital infrastructure.",
    heroHeadline: "Education & Research IT: Scalable, Secure Digital Learning Campuses",
    heroSubheadline: "Empower students, faculty, and academic researchers with secure, high-speed digital tools. Orbytes designs resilient campus networks, high-concurrency LMS architectures, and FERPA-compliant cloud storage.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "University students collaborating with modern digital cloud learning tools on smart campus",
    challenges: [
      { title: "High-Density Campus Wi-Fi Demands", description: "Thousands of students connecting smartphones, laptops, and tablets simultaneously across dorms and lecture halls." },
      { title: "Student Data Privacy (FERPA / GDPR)", description: "Protecting sensitive academic transcripts, financial aid records, and personal identities from leaks." },
      { title: "LMS Exam Outages", description: "Server bottlenecks when hundreds of students submit online exams or register for courses simultaneously." },
      { title: "High-Performance Computing for Research", description: "Meeting complex compute, storage, and cluster demands for academic science and engineering labs." },
    ],
    technosprintSolution: "Orbytes provides comprehensive education IT services: high-density enterprise campus Wi-Fi, elastic cloud-hosted learning management systems (LMS), and research computing support that fosters collaborative learning.",
    capabilities: [
      { title: "High-Density Campus Wi-Fi & Switching", description: "Robust wireless arrays with beamforming technology engineered for crowded classrooms and auditoriums." },
      { title: "Elastic LMS & Virtual Classrooms", description: "Cloud hosting and maintenance for Moodle, Canvas, and custom learning portals that never crash during exams." },
      { title: "Student Identity & Access Management (IAM)", description: "Automated student onboarding, course enrollments, and self-service password resets." },
      { title: "Academic Research Cloud Clusters", description: "Scalable GPU and CPU compute instances configured for data-intensive research projects." },
      { title: "Content Filtering & Cyber Safety", description: "CIPA-compliant content filtering and threat detection protecting students and campus devices." },
    ],
    outcomes: [
      { metric: "99.99%", label: "LMS Exam Availability", description: "Zero server crashes during peak midterms and finals submission periods." },
      { metric: "10,000+", label: "Concurrent Wi-Fi Devices", description: "Seamless, buffer-free connectivity across expansive university grounds." },
      { metric: "100%", label: "FERPA Adherence", description: "Rock-solid privacy controls protecting student records and institutional data." },
    ],
    subSectors: ["Universities & Colleges", "K-12 School Districts", "EdTech Providers", "Research Laboratories & Institutes", "Libraries & Digital Archives"],
    faqs: [
      {
        question: "How do you protect student information under FERPA regulations?",
        answer: "We implement strict role-based access control (RBAC), end-to-end encryption for student information systems (SIS), and automated audit tracking for any record retrieval.",
      },
      {
        question: "Can Orbytes help our institution deploy a hybrid learning environment?",
        answer: "Yes, we integrate video conferencing solutions, cloud storage, virtual desktops, and LMS platforms to provide students and faculty a seamless hybrid experience.",
      },
      {
        question: "How do you prevent campus networks from being bogged down by streaming services?",
        answer: "We configure Quality of Service (QoS) bandwidth management, prioritizing academic software and research traffic over commercial entertainment streaming.",
      },
    ],
  },

  "professional-services": {
    slug: "professional-services",
    name: "Professional Services & Logistics",
    badge: "Confidentiality, Speed & Fleet Resilience",
    tagline: "Secure collaboration for legal, accounting, logistics, and real estate enterprises.",
    heroHeadline: "Professional Services & Logistics IT: Confidentiality, Speed & Operational Flow",
    heroSubheadline: "Empower billable professionals and field logistics teams with agile, secure technology. Protect privileged client files, optimize fleet logistics, and maintain continuous communications across distributed offices.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern global corporate enterprise office with glass architecture and technology infrastructure",
    challenges: [
      { title: "Client Confidentiality & Privilege", description: "Law firms and accounting practices handle highly sensitive M&A data, tax records, and privileged communications." },
      { title: "Distributed Remote & Field Teams", description: "Coordinating remote partners, field inspectors, and truck drivers across varying devices and networks." },
      { title: "Document Management Bottlenecks", description: "Slow file transfers, conflicting document versions, and inefficient document retention compliance." },
      { title: "Fleet Telemetry & Dispatch Reliability", description: "Logistics systems failing during dispatch runs, resulting in delayed deliveries and SLA fines." },
    ],
    technosprintSolution: "Orbytes provides end-to-end IT support: encrypted legal document repositories, fleet dispatch integration, remote worker cybersecurity, and cloud migration tailored for high-billing firms.",
    capabilities: [
      { title: "Encrypted Document Repositories & DMS", description: "Secure, version-controlled cloud document management with granular access restrictions." },
      { title: "Zero-Trust Remote Work Security", description: "Ensuring attorneys, accountants, and consultants can securely access corporate servers from anywhere." },
      { title: "Fleet Telemetry & Logistics Integration", description: "Reliable cloud infrastructure supporting GPS tracking, automated dispatch, and warehouse logistics." },
      { title: "Time & Billing Application Support", description: "Optimizing database speeds for practice management and enterprise accounting software." },
      { title: "Automated Data Retention & Legal Hold", description: "Compliance-driven archiving ensuring records are preserved according to legal statutory periods." },
    ],
    outcomes: [
      { metric: "100%", label: "Client Confidentiality", description: "Bank-grade encryption protecting privileged legal and financial files." },
      { metric: "30%", label: "Efficiency Increase", description: "Elimination of file search delays through unified cloud document systems." },
      { metric: "24/7", label: "Global Dispatch Uptime", description: "Uninterrupted cloud availability for regional and global logistics fleets." },
    ],
    subSectors: ["Law Firms & Legal Practices", "CPA & Accounting Firms", "Freight & Logistics Fleets", "Commercial Real Estate & Property", "Management Consulting"],
    faqs: [
      {
        question: "How does Orbytes protect confidential client files for law firms?",
        answer: "We deploy multi-factor authentication, endpoint encryption, restricted access controls, and data loss prevention (DLP) tools that stop unauthorized downloading or forwarding of privileged documents.",
      },
      {
        question: "Can you assist logistics companies with fleet tracking and ERP integration?",
        answer: "Yes, we architect high-availability cloud backends that ingest real-time telematics from fleet vehicles and synchronize with warehouse and dispatch software.",
      },
      {
        question: "How do you support billable professionals working from home or client sites?",
        answer: "We set up secure Virtual Desktop Infrastructure (VDI) and encrypted VPNs, backed by 24/7 helpdesk support, so partners and associates never lose billable hours to technical issues.",
      },
    ],
  },
};
