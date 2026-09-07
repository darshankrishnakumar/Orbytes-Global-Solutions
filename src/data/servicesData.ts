export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  badge: string;
  category: "integrated" | "cloud" | "consulting" | "development";
  categoryTitle: string;
  href: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemStatement: string;
  solutionOverview: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
  capabilities: ServiceCapability[];
  process: ServiceProcessStep[];
  benefits: string[];
  faqs: ServiceFAQ[];
  relatedSolutions: { title: string; slug: string; href: string }[];
}

export const servicesData: Record<string, ServiceItem> = {
  // ==========================================
  // 1. INTEGRATED IT SERVICES
  // ==========================================
  "managed-it": {
    slug: "managed-it",
    title: "Managed IT Services (MSP)",
    badge: "24/7 Proactive Monitoring & Support",
    category: "integrated",
    categoryTitle: "Integrated IT Services",
    href: "/services/managed-it",
    shortDescription: "Proactive infrastructure monitoring, 24/7 technical helpdesk, preventative maintenance, and scalable IT operations.",
    heroHeadline: "Managed IT Services (MSP) for Uninterrupted Enterprise Operations",
    heroSubheadline: "Eliminate IT complexities and stay focused on your business. Our all-inclusive IT service management ensures operational efficiency, enhanced security, and uninterrupted performance.",
    problemStatement: "Unexpected downtime, unpatched workstations, server crashes, and overburdened internal IT resources cost businesses thousands in lost productivity every hour.",
    solutionOverview: "Let us take care of your IT infrastructure while you focus on growing your business. From routine maintenance to long-term strategy, our expert management ensures security, efficiency, and seamless operations. Whether supporting your in-house team or serving as your full-service IT partner, we provide proactive solutions and continuous support to keep your business running without disruption.",
    iconName: "Server",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise network engineers managing server infrastructure in modern data center",
    capabilities: [
      {
        title: "Continuous IT Monitoring and Preventive Maintenance",
        description: "Stay ahead of potential IT issues with round-the-clock monitoring and proactive maintenance.",
        features: ["24/7 server and workstation telemetry", "Automated patch management", "Proactive disk and memory optimization", "Early failure detection"],
      },
      {
        title: "24/7 IT Support and Rapid Response",
        description: "Get instant access to dedicated IT professionals anytime you need assistance.",
        features: ["Sub-15 minute critical response SLA", "Remote diagnostics and resolution", "Dedicated support dispatch", "Multi-channel ticketing"],
      },
      {
        title: "Robust Cybersecurity and Threat Protection",
        description: "Protect your business with advanced cybersecurity measures, risk assessments, and compliance management.",
        features: ["Endpoint threat protection (EDR)", "Firewall and perimeter security", "Zero-trust access policies", "Immutable backup verification"],
      },
      {
        title: "Expert IT Strategy and Advisory Services",
        description: "Align your technology with business goals through expert guidance and scalable planning.",
        features: ["vCIO strategic roadmapping", "Quarterly business reviews (QBRs)", "Technology lifecycle planning", "Budget and licensing optimization"],
      },
      {
        title: "Scalable Cloud Solutions and Management",
        description: "Leverage the power of the cloud with flexible, secure, and cost-effective management.",
        features: ["Hybrid cloud architecture", "Microsoft 365 / Azure administration", "Secure remote desktop (VDI)", "Seamless data mobility"],
      },
    ],
    process: [
      { step: "01", title: "Consultation", description: "Understand your unique business needs, existing hardware, and operational pain points." },
      { step: "02", title: "Custom Plan", description: "Develop a tailored IT and cybersecurity roadmap aligned with your business objectives." },
      { step: "03", title: "Implementation", description: "Seamlessly deploy monitoring agents, endpoint defenses, and backup pipelines with zero interruption." },
      { step: "04", title: "Ongoing Support", description: "Provide continuous 24/7 monitoring, preventative maintenance, and prompt expert technical assistance." },
    ],
    benefits: [
      "Increased efficiency with proactive IT monitoring and preventive maintenance.",
      "Strategic technology planning aligned directly with your business objectives.",
      "Robust cybersecurity defenses to safeguard critical company and client data.",
      "24/7 expert IT support for seamless business continuity and zero downtime.",
      "Secure and scalable cloud solutions tailored for your growing team.",
    ],
    faqs: [
      {
        question: "What does Technosprint's Managed IT Service include?",
        answer: "Technosprint provides end-to-end IT management, including proactive monitoring, cybersecurity protection, cloud solutions, IT consulting, and round-the-clock support to ensure seamless business operations.",
      },
      {
        question: "How does managed IT support our existing internal IT staff?",
        answer: "We offer co-managed IT services. We handle repetitive tier-1/tier-2 ticketing, routine patching, and 24/7 overnight monitoring so your internal staff can focus on core strategic business projects.",
      },
      {
        question: "What is your typical response time for support requests?",
        answer: "Our enterprise SLA guarantees response times under 15 minutes for critical severity-1 incidents, with 24/7 coverage 365 days a year.",
      },
      {
        question: "How do you ensure data security across all managed devices?",
        answer: "We enforce multi-factor authentication, enterprise EDR anti-malware, automatic OS patching, full-disk encryption, and immutable cloud backups across all enrolled workstations and servers.",
      },
    ],
    relatedSolutions: [
      { title: "Managed Security Services (MSSP)", slug: "managed-security", href: "/services/managed-security" },
      { title: "IT Service Management (ITSM)", slug: "itsm", href: "/services/itsm" },
      { title: "Azure Cost Management", slug: "azure-cost-management", href: "/services/cloud/azure-cost-management" },
    ],
  },

  "managed-security": {
    slug: "managed-security",
    title: "Managed Security Services (MSSP)",
    badge: "24/7 Cyber Defense & SOC Monitoring",
    category: "integrated",
    categoryTitle: "Integrated IT Services",
    href: "/services/managed-security",
    shortDescription: "Continuous threat detection, 24/7 SOC monitoring, rapid incident containment, and regulatory compliance.",
    heroHeadline: "Managed Security Services (MSSP) for Complete Enterprise Protection",
    heroSubheadline: "Eliminate security blindspots and maintain focus on your core enterprise. Proactive threat prevention, AI-driven anomaly detection, and continuous 24/7 SOC monitoring safeguard your operations around the clock.",
    problemStatement: "Cyber threats do not observe business hours. Sophisticated ransomware, phishing vectors, and zero-day vulnerabilities threaten data integrity, brand reputation, and regulatory compliance.",
    solutionOverview: "Orbytes provides an enterprise-grade security operations center (SOC) that continuously monitors your networks, endpoints, cloud instances, and user identities. We combine real-time threat intelligence with automated containment and human expertise to eliminate risks before business disruption occurs.",
    iconName: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "24/7 Cybersecurity Security Operations Center monitoring enterprise threat telemetry",
    capabilities: [
      {
        title: "24/7 SOC & Continuous Threat Hunting",
        description: "Round-the-clock surveillance of your digital footprint with dedicated security analysts analyzing anomalous activity in real time.",
        features: ["24/7 Security Operations Center", "Real-time threat triage", "Log telemetry aggregation", "Continuous perimeter scanning"],
      },
      {
        title: "SIEM & AI Anomaly Detection",
        description: "Enterprise-grade Security Information and Event Management (SIEM) aggregating logs across servers, firewalls, and cloud platforms.",
        features: ["Behavioral anomaly detection", "Cross-system correlation", "Machine learning threat scoring", "Automated threat alerts"],
      },
      {
        title: "Endpoint Detection & Response (EDR / XDR)",
        description: "Real-time endpoint agent protection that isolates compromised workstations and neutralizes ransomware in seconds.",
        features: ["Automated host isolation", "Memory exploit blocking", "Ransomware canary files", "Root cause forensics"],
      },
      {
        title: "Vulnerability Management & Pen Testing",
        description: "Continuous automated scanning and ethical penetration tests identifying CVE gaps before attackers exploit them.",
        features: ["External & internal vulnerability scans", "Prioritized CVE remediation", "Zero-day patch tracking", "Executive risk scoring"],
      },
      {
        title: "Incident Response & Forensics",
        description: "Dedicated breach response teams ready to contain, eradicate, and restore systems under strict SLAs.",
        features: ["15-minute containment SLA", "Digital forensics & chain of custody", "Regulatory reporting support", "Post-incident hardening"],
      },
    ],
    process: [
      { step: "01", title: "Assessment", description: "Audit external attack surface, internal network controls, active directory, and compliance requirements." },
      { step: "02", title: "Telemetry Setup", description: "Deploy lightweight EDR agents, configure SIEM collectors, and establish 24/7 SOC communication channels." },
      { step: "03", title: "Active Defense", description: "Continuously ingest logs, correlate events, and trigger automated quarantine protocols on anomalous behavior." },
      { step: "04", title: "Refinement", description: "Regular security reviews, vulnerability scans, and simulated phishing tests to boost organizational resilience." },
    ],
    benefits: [
      "24/7/365 peace of mind knowing elite analysts are continuously guarding your systems",
      "Sub-15 minute threat containment that neutralizes ransomware before lateral spread",
      "Full compliance readiness for ISO 27001, SOC 2, HIPAA, PCI-DSS, and Cyber Insurance mandates",
      "Significantly lower cost than building and staffing an internal 24/7 Security Operations Center",
      "Transparent monthly reporting and real-time dashboards with actionable risk scores",
    ],
    faqs: [
      {
        question: "What is the difference between an MSP and an MSSP?",
        answer: "While an MSP focuses on keeping systems operational, up to date, and available, an MSSP focuses specifically on defense, threat detection, SIEM log monitoring, incident containment, and compliance auditing.",
      },
      {
        question: "How quickly does your SOC respond to a detected ransomware incident?",
        answer: "Our automated EDR platform isolates compromised machines in seconds, and our SOC analysts initiate active containment within 15 minutes guaranteed by SLA.",
      },
      {
        question: "Can you help us qualify for Cyber Liability Insurance?",
        answer: "Yes. Insurers require MFA, immutable backups, endpoint EDR, and 24/7 monitoring. Our MSSP service directly fulfills all common underwriter checklists.",
      },
      {
        question: "Do you monitor cloud environments like Azure and AWS?",
        answer: "Yes, our SIEM integrates with Microsoft Azure, AWS CloudTrail, Google Cloud, Microsoft 365, Google Workspace, and on-premises firewalls.",
      },
    ],
    relatedSolutions: [
      { title: "Managed IT Services (MSP)", slug: "managed-it", href: "/services/managed-it" },
      { title: "Governance, Risk & Compliance (GRC)", slug: "grc", href: "/services/consulting/grc" },
      { title: "Disaster Recovery Services", slug: "disaster-recovery", href: "/services/cloud/disaster-recovery" },
    ],
  },

  "itsm": {
    slug: "itsm",
    title: "IT Service Management (ITSM)",
    badge: "ITIL v4 Automated Service Operations",
    category: "integrated",
    categoryTitle: "Integrated IT Services",
    href: "/services/itsm",
    shortDescription: "ITIL v4-compliant service desk, ticket lifecycle automation, change management, and asset tracking.",
    heroHeadline: "IT Service Management (ITSM) Services for Seamless Operations",
    heroSubheadline: "Eliminate IT complexities and stay focused on your business. Our all-inclusive IT service management ensures operational efficiency, enhanced security, and uninterrupted performance.",
    problemStatement: "When IT requests arrive chaotically via chat, email, and hallway conversations, tickets get dropped, SLAs fail, and emergency changes inadvertently trigger secondary system outages.",
    solutionOverview: "Our ITSM framework introduces structured, ITIL v4-aligned service delivery. We unify incident, problem, change, and asset management into an automated, transparent pipeline with measurable SLAs.",
    iconName: "Settings",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise IT operations team managing ITIL service management workflows",
    capabilities: [
      {
        title: "ITIL v4 Service Desk & Incident Management",
        description: "Multi-tier ticket routing with automated severity classification, escalation rules, and end-user self-service.",
        features: ["Self-service user portal", "Automated priority triage", "SLA milestone timers", "Multi-channel omnichannel ticketing"],
      },
      {
        title: "Change Advisory & Release Governance",
        description: "Structured change request validation preventing conflicts, downtime, and unauthorized production alterations.",
        features: ["Change advisory board (CAB) workflows", "Rollback plan enforcement", "Maintenance window scheduling", "Automated change logs"],
      },
      {
        title: "IT Asset & Configuration Management (CMDB)",
        description: "Comprehensive tracking of hardware, software licenses, warranties, and dependency mapping across your organization.",
        features: ["Automated asset discovery", "License compliance tracking", "Hardware lifecycle monitoring", "CMDB dependency visualization"],
      },
      {
        title: "Problem Management & Root Cause Analysis",
        description: "Identifying recurring incident patterns and eliminating root causes to permanently reduce ticket volumes.",
        features: ["Root cause analysis (RCA)", "Known error databases (KEDB)", "Incident trend analytics", "Preventative remediation tickets"],
      },
      {
        title: "Continuous SLA & KPI Telemetry",
        description: "Real-time visibility into First Contact Resolution (FCR), Mean Time to Resolve (MTTR), and customer satisfaction (CSAT).",
        features: ["Executive SLA reporting", "Live operational dashboards", "CSAT automated surveys", "Technician performance metrics"],
      },
    ],
    process: [
      { step: "01", title: "Workflow Audit", description: "Analyze existing ticket flows, support channels, recurring incidents, and SLA expectations." },
      { step: "02", title: "Portal & Catalog Setup", description: "Configure self-service portals, standard service request catalogs, and approval hierarchies." },
      { step: "03", title: "ITIL Integration", description: "Deploy change management gates, asset discovery probes, and automated escalation pipelines." },
      { step: "04", title: "Service Review", description: "Monthly SLA reporting, Root Cause Analysis reviews, and ticket prevention engineering." },
    ],
    benefits: [
      "40%+ reduction in mean time to resolve (MTTR) through automated routing and triage",
      "Zero unmanaged production outages due to strict Change Advisory Board verification",
      "Full transparency for executive leadership with live SLA and CSAT dashboards",
      "Complete compliance audit readiness with immutable change and access tracking",
      "Empowered end users with an intuitive self-service portal for hardware and software requests",
    ],
    faqs: [
      {
        question: "What is ITIL v4 and why does it matter?",
        answer: "ITIL v4 is the global gold standard for IT Service Management. It ensures that IT operations are predictable, standardized, customer-centric, and aligned with measurable business outcomes.",
      },
      {
        question: "Can you integrate your ITSM platform with our existing tools like Jira or Slack?",
        answer: "Yes, our ITSM solution integrates seamlessly with Jira, Slack, Microsoft Teams, Azure DevOps, and custom ERP systems.",
      },
      {
        question: "How do you handle emergency change requests?",
        answer: "We support Emergency Change Advisory Board (eCAB) workflows with accelerated approvals, mandatory automated rollbacks, and post-implementation reviews.",
      },
      {
        question: "What reporting do we receive on IT team performance?",
        answer: "You receive real-time dashboard access and monthly reports detailing ticket volume, First Contact Resolution, MTTR, SLA compliance percentage, and asset lifecycle forecasts.",
      },
    ],
    relatedSolutions: [
      { title: "Managed IT Services (MSP)", slug: "managed-it", href: "/services/managed-it" },
      { title: "IT Assessment Services", slug: "it-assessment", href: "/services/consulting/it-assessment" },
      { title: "IT Strategy & Consulting", slug: "it-strategy", href: "/services/consulting/it-strategy" },
    ],
  },

  // ==========================================
  // 2. CLOUD SERVICES
  // ==========================================
  "azure-cost-management": {
    slug: "azure-cost-management",
    title: "Azure Cost Management",
    badge: "Cloud FinOps & Cost Optimization",
    category: "cloud",
    categoryTitle: "Cloud Services",
    href: "/services/cloud/azure-cost-management",
    shortDescription: "Expense tracking, smart budgeting, resource right-sizing, cost allocation, and automated waste reduction.",
    heroHeadline: "Azure Cost Management: Optimize Spending & Maximize Value",
    heroSubheadline: "Gain full control over your Azure expenses with expert cost management. Eliminate unnecessary costs, improve efficiency, and drive business growth with smart cloud spending strategies.",
    problemStatement: "Cloud cost management shouldn't be uncertain. Without continuous governance, unattached disks, over-provisioned VMs, and idle environments quickly inflate cloud expenditures by 30% or more every month.",
    solutionOverview: "Our Azure Cost Management service gives you total control, ensuring every dollar supports your business objectives. By optimizing resource utilization and eliminating waste, we enable cost-effective cloud operations without sacrificing performance. Keep your Azure environment streamlined, efficient, and strategically aligned for growth—free from unexpected surprises.",
    iconName: "LineChart",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cloud FinOps financial telemetry dashboard displaying Azure expenditure analytics and cost optimization",
    capabilities: [
      {
        title: "Expense Tracking & Insights",
        description: "Gain detailed visibility into your cloud spending with in-depth cost analysis and reporting.",
        features: ["Granular resource billing telemetry", "Cost anomaly detection", "Trend forecasting", "Executive spend dashboards"],
      },
      {
        title: "Smart Budgeting & Predictions",
        description: "Set accurate budgets and leverage predictive tools to anticipate future cloud expenditures.",
        features: ["Departmental budget ceilings", "Automated threshold alerts", "Machine learning cost forecasting", "Quarterly plan modeling"],
      },
      {
        title: "Optimized Resource Utilization & Right-Sizing",
        description: "Maximize efficiency by identifying underused resources and right-sizing your Azure instances.",
        features: ["Compute CPU/RAM right-sizing", "Orphaned storage identification", "Reserved Instance (RI) optimization", "Azure Savings Plan management"],
      },
      {
        title: "Cost Allocation & Categorization",
        description: "Implement structured tagging strategies to track spending across projects, teams, or clients.",
        features: ["Enterprise tagging governance", "Cost center showback & chargeback", "Business unit expenditure mapping", "Multi-tenant cost breakdowns"],
      },
      {
        title: "Automated Cost Control Solutions",
        description: "Utilize intelligent automation to monitor, manage, and optimize cloud expenses in real time.",
        features: ["Automated shutdown of non-prod VMs", "Storage tier auto-archival", "Unused resource deallocation", "Zero-waste governance policies"],
      },
    ],
    process: [
      { step: "01", title: "Cost Audit", description: "Analyze your historical Azure billing, resource telemetry, and tag coverage to uncover immediate waste." },
      { step: "02", title: "Quick Wins", description: "Deallocate orphaned disks, downgrade over-provisioned instances, and delete idle test environments." },
      { step: "03", title: "Commitment Strategy", description: "Structure 1-year and 3-year Reserved Instances (RIs) and Azure Savings Plans for stable base workloads." },
      { step: "04", title: "Continuous FinOps", description: "Enforce automated budget guardrails, tagging policies, and monthly optimization reviews." },
    ],
    benefits: [
      "Detect and eliminate excess spending to lower your Azure expenses by 20% to 35%.",
      "Improve resource utilization for streamlined and cost-effective operations.",
      "Use advanced budgeting and forecasting tools to manage cloud costs with zero surprises.",
      "Access detailed reports for complete visibility into your Azure expenditures.",
      "Turn your Azure investment into a high-ROI asset that accelerates business growth.",
    ],
    faqs: [
      {
        question: "What is Azure Cost Management?",
        answer: "Azure Cost Management includes tools and strategic FinOps practices to track, allocate, and optimize your cloud spending, ensuring maximum financial and operational efficiency.",
      },
      {
        question: "How quickly will our organization see savings on Azure?",
        answer: "Immediate savings of 15% to 25% are typically achieved in the first 14 days by terminating orphaned resources, right-sizing oversized VMs, and configuring automated off-hours schedules.",
      },
      {
        question: "Will cost optimization degrade application performance or uptime?",
        answer: "No. Our right-sizing recommendations analyze 90-day CPU, memory, IOPS, and network percentiles to ensure your workloads retain ample performance headroom and 99.99% availability.",
      },
      {
        question: "Can you help us implement internal department chargebacks?",
        answer: "Yes, we implement strict Azure Policy tagging frameworks that automatically categorize every dollar by department, project, or client for accurate internal accounting.",
      },
    ],
    relatedSolutions: [
      { title: "Cloud & Data Migration", slug: "cloud-data-migration", href: "/services/cloud/cloud-data-migration" },
      { title: "Infrastructure as a Service (IaaS)", slug: "iaas", href: "/services/cloud/iaas" },
      { title: "Disaster Recovery Services", slug: "disaster-recovery", href: "/services/cloud/disaster-recovery" },
    ],
  },

  "cloud-data-migration": {
    slug: "cloud-data-migration",
    title: "Cloud & Data Migration",
    badge: "Zero-Downtime Workload Migration",
    category: "cloud",
    categoryTitle: "Cloud Services",
    href: "/services/cloud/cloud-data-migration",
    shortDescription: "Zero-downtime database and application migration to Microsoft Azure and AWS with minimal operational impact.",
    heroHeadline: "Seamless Cloud & Data Migration for Modern Enterprises",
    heroSubheadline: "Modernize your data infrastructure with zero operational disruption. We migrate mission-critical databases, legacy servers, and file repositories to Microsoft Azure and AWS with rigorous cutover validation.",
    problemStatement: "Migrating legacy servers and terabytes of active enterprise data risks unexpected downtime, data loss, application dependency breakage, and spiraling transition costs.",
    solutionOverview: "Our certified cloud migration architects use automated synchronization tools, pre-migration staging sandboxes, and phased cutovers to transition your workloads with near-zero downtime and absolute data integrity.",
    iconName: "Cloud",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Global cloud data migration network transferring enterprise databases securely",
    capabilities: [
      {
        title: "Workload & Dependency Mapping",
        description: "Thorough discovery of all server dependencies, network ports, and data pipelines prior to migration.",
        features: ["Automated agentless discovery", "Application dependency mapping", "Bandwidth consumption profiling", "Readiness scoring"],
      },
      {
        title: "Database Migration & Refactoring",
        description: "Migrate SQL Server, Oracle, and PostgreSQL databases to managed Azure SQL, RDS, or cloud virtual machines.",
        features: ["Continuous delta replication", "Schema compatibility checks", "Sub-second cutover windows", "Zero data loss verification"],
      },
      {
        title: "Virtual Machine & Server Lift-and-Shift",
        description: "Fast, reliable migration of on-premises Hyper-V and VMware virtual machines directly to Azure or AWS.",
        features: ["Azure Migrate tooling", "Block-level replication", "Test failover drills", "OS driver updates"],
      },
      {
        title: "Post-Migration Optimization",
        description: "Fine-tune compute sizing, network latency, and backup policies immediately following cutover.",
        features: ["Compute rightsizing", "Database indexing optimization", "Network latency tuning", "Post-cutover 24/7 monitoring"],
      },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Audit on-premises infrastructure, data volume, and network links." },
      { step: "02", title: "Landing Zone", description: "Establish secure Azure/AWS virtual networks, subnets, and identity integration." },
      { step: "03", title: "Replication", description: "Continuously synchronize data blocks in the background while production stays live." },
      { step: "04", title: "Cutover", description: "Execute seamless DNS redirection during a planned, low-impact window." },
    ],
    benefits: [
      "Zero business interruption with continuous background data synchronization",
      "Elimination of aging on-premises hardware refresh costs and data center leases",
      "Substantially enhanced scalability, security, and geo-redundancy",
      "Full post-migration SLA support and cloud performance validation",
    ],
    faqs: [
      {
        question: "How do you prevent downtime during a data migration?",
        answer: "We replicate data continuously in the background using block-level sync. The final cutover only requires a brief sub-minute transition of DNS pointers.",
      },
      {
        question: "Which cloud providers do you migrate workloads to?",
        answer: "We specialize primarily in Microsoft Azure and Amazon Web Services (AWS), tailoring the landing zone to your compliance and business requirements.",
      },
    ],
    relatedSolutions: [
      { title: "Azure Cost Management", slug: "azure-cost-management", href: "/services/cloud/azure-cost-management" },
      { title: "Disaster Recovery Services", slug: "disaster-recovery", href: "/services/cloud/disaster-recovery" },
      { title: "Infrastructure as a Service (IaaS)", slug: "iaas", href: "/services/cloud/iaas" },
    ],
  },

  "disaster-recovery": {
    slug: "disaster-recovery",
    title: "Disaster Recovery Services",
    badge: "Business Continuity & Rapid Recovery",
    category: "cloud",
    categoryTitle: "Cloud Services",
    href: "/services/cloud/disaster-recovery",
    shortDescription: "Disaster Recovery as a Service (DRaaS) with aggressive RTO/RPO SLAs, automated cloud failover, and immutable backups.",
    heroHeadline: "Disaster Recovery Services: Guarantee Business Continuity",
    heroSubheadline: "Protect your organization from ransomware, hardware failures, and environmental disasters. Our automated Disaster Recovery as a Service (DRaaS) restores systems in minutes with near-zero data loss.",
    problemStatement: "Without a tested disaster recovery plan, a single ransomware strike or storage controller failure can halt operations for weeks, resulting in catastrophic revenue loss and customer defection.",
    solutionOverview: "We provide automated, geo-redundant cloud disaster recovery. Your critical servers and databases are replicated in real time to secure cloud vaults, ready to spin up at the press of a button during an emergency.",
    iconName: "ShieldAlert",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Secure cloud server backup and automated disaster recovery operations",
    capabilities: [
      {
        title: "Sub-15 Minute RTO & RPO SLAs",
        description: "Near-instantaneous Recovery Time Objectives (RTO) and minimal Recovery Point Objectives (RPO).",
        features: ["Continuous data replication", "Automated spin-up orchestration", "Failover IP remapping", "Point-in-time recovery rollbacks"],
      },
      {
        title: "Immutable Air-Gapped Cloud Backups",
        description: "Ransomware-proof storage vaults that prevent attackers from deleting or encrypting backup snapshots.",
        features: ["WORM storage (Write Once, Read Many)", "Multi-factor deletion locks", "Air-gapped secondary vaults", "Continuous hash verification"],
      },
      {
        title: "Automated Non-Disruptive DR Drills",
        description: "Simulate full disaster failovers in isolated sandboxes without interrupting production environments.",
        features: ["Sandbox network isolation", "Automated recovery health tests", "Compliance audit certifications", "Quarterly drill reports"],
      },
      {
        title: "Hybrid & Multi-Cloud Redundancy",
        description: "Replicate on-premises workloads to Azure, or failover across distinct Azure or AWS geographic regions.",
        features: ["Cross-region geo-replication", "Hybrid on-prem to cloud failover", "Direct-to-cloud workstation imaging", "High-bandwidth failback"],
      },
    ],
    process: [
      { step: "01", title: "BIA Audit", description: "Conduct a Business Impact Analysis to define critical application tiers and recovery priorities." },
      { step: "02", title: "Replication", description: "Deploy continuous replication agents targeting encrypted, immutable cloud storage." },
      { step: "03", title: "Automate Playbooks", description: "Program one-click failover scripts that handle DNS, network routing, and server startup order." },
      { step: "04", title: "Simulate & Certify", description: "Execute recurring automated sandbox drills to verify recovery objectives and meet compliance mandates." },
    ],
    benefits: [
      "Total protection against ransomware extortion with immutable backup snapshots",
      "Guaranteed business continuity with sub-15 minute failover capabilities",
      "Zero impact on daily operations during scheduled disaster recovery simulations",
      "Full compliance certification for cyber insurance underwriters and regulatory auditors",
    ],
    faqs: [
      {
        question: "What is the difference between backup and disaster recovery?",
        answer: "Backups protect your files and data. Disaster recovery protects your business operations by spinning up live replica servers and networking so your team can keep working during an outage.",
      },
      {
        question: "How often do you test disaster recovery failover?",
        answer: "We conduct non-disruptive automated tests weekly, and execute full comprehensive failover simulations quarterly with complete audit documentation.",
      },
    ],
    relatedSolutions: [
      { title: "Azure Cost Management", slug: "azure-cost-management", href: "/services/cloud/azure-cost-management" },
      { title: "Cloud & Data Migration", slug: "cloud-data-migration", href: "/services/cloud/cloud-data-migration" },
      { title: "Managed Security Services (MSSP)", slug: "managed-security", href: "/services/managed-security" },
    ],
  },

  "iaas": {
    slug: "iaas",
    title: "Infrastructure as a Service (IaaS)",
    badge: "Enterprise Compute & Storage",
    category: "cloud",
    categoryTitle: "Cloud Services",
    href: "/services/cloud/iaas",
    shortDescription: "Elastic cloud compute, software-defined networking, NVMe SAN storage, and managed cloud infrastructure.",
    heroHeadline: "Infrastructure as a Service (IaaS) for Scalable Enterprises",
    heroSubheadline: "Replace expensive on-premises server hardware with high-performance, elastic cloud infrastructure. Scale compute, memory, and storage instantly without capital expenditures.",
    problemStatement: "Purchasing, configuring, and replacing on-premises physical servers every 3-5 years ties up capital, requires specialized facilities, and limits agility when demand surges.",
    solutionOverview: "Our IaaS platform provides dedicated, highly secure virtual machines, ultra-fast NVMe storage, and software-defined networks hosted in tier-3/4 data centers on Microsoft Azure and AWS. Fully monitored, maintained, and backed by 99.99% uptime SLAs.",
    iconName: "Database",
    imageUrl: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise cloud server infrastructure and data storage arrays",
    capabilities: [
      {
        title: "Elastic Virtual Compute Clusters",
        description: "Deploy high-core, memory-optimized virtual instances that dynamically scale with workload intensity.",
        features: ["Automated vertical/horizontal scaling", "Custom CPU/RAM configurations", "Dedicated host isolation options", "Sub-minute provisioning"],
      },
      {
        title: "Software-Defined Networking & VPCs",
        description: "Isolated virtual private clouds (VPCs) with private subnets, software firewalls, and direct ExpressRoute / VPN connectivity.",
        features: ["Micro-segmented subnets", "Dedicated site-to-site VPN tunnels", "Azure ExpressRoute / AWS Direct Connect", "DDoS mitigation"],
      },
      {
        title: "High-Performance NVMe Storage",
        description: "Ultra-low latency block, object, and file storage with geo-redundancy and automated tiering.",
        features: ["Sub-millisecond latency NVMe disks", "Automated hot-to-cold tiering", "Encrypted-at-rest volumes", "Instant point-in-time snapshots"],
      },
      {
        title: "Full Infrastructure Management",
        description: "We handle hypervisor updates, OS security patches, network load balancing, and hardware maintenance 24/7.",
        features: ["Automated OS patch cycles", "24/7 infrastructure health telemetry", "Load balancer configuration", "High availability clustering"],
      },
    ],
    process: [
      { step: "01", title: "Architecture Design", description: "Size compute, storage, and networking requirements to match application SLAs and budget constraints." },
      { step: "02", title: "Provisioning", description: "Deploy automated Terraform/Bicep landing zones with secure subnets, firewalls, and access policies." },
      { step: "03", title: "Deployment", description: "Configure virtual machines, attach high-speed storage volumes, and establish secure network tunnels." },
      { step: "04", title: "24/7 Operations", description: "Provide continuous monitoring, patch management, capacity forecasting, and round-the-clock support." },
    ],
    benefits: [
      "Convert heavy capital expenditures (CapEx) into predictable, tax-efficient operating costs (OpEx)",
      "Scale up or down in minutes to handle seasonal traffic spikes or new corporate branch launches",
      "Achieve 99.99% guaranteed infrastructure availability backed by enterprise SLAs",
      "Eliminate local data center power, cooling, and hardware maintenance headaches",
    ],
    faqs: [
      {
        question: "How does IaaS differ from buying physical on-premises servers?",
        answer: "With IaaS, you pay only for the compute and storage resources you use, with zero hardware depreciation, zero maintenance fees, and instant scalability on demand.",
      },
      {
        question: "Can we connect our corporate office directly to our IaaS network?",
        answer: "Yes, we configure redundant IPSec site-to-site VPN tunnels or dedicated fiber connections like Azure ExpressRoute for seamless LAN-like performance.",
      },
    ],
    relatedSolutions: [
      { title: "Azure Cost Management", slug: "azure-cost-management", href: "/services/cloud/azure-cost-management" },
      { title: "Cloud & Data Migration", slug: "cloud-data-migration", href: "/services/cloud/cloud-data-migration" },
      { title: "Microsoft Cloud Services", slug: "microsoft-cloud", href: "/services/cloud/microsoft-cloud" },
    ],
  },

  "microsoft-cloud": {
    slug: "microsoft-cloud",
    title: "Microsoft Cloud Services",
    badge: "M365, Azure & Modern Work",
    category: "cloud",
    categoryTitle: "Cloud Services",
    href: "/services/cloud/microsoft-cloud",
    shortDescription: "Microsoft 365 enterprise administration, Entra ID zero-trust, Intune endpoint management, and SharePoint governance.",
    heroHeadline: "Microsoft Cloud Services: Modernize Collaboration & Security",
    heroSubheadline: "Empower your workforce with modern, secure productivity. We architect, deploy, and govern Microsoft 365, Microsoft Entra ID (Azure AD), Intune, and Teams for seamless hybrid work.",
    problemStatement: "Misconfigured Microsoft 365 tenants, unmanaged personal devices, sprawl in Teams channels, and poor access policies expose sensitive corporate files to external data leaks.",
    solutionOverview: "Our certified Microsoft Cloud Architects secure and streamline your Microsoft ecosystem. We implement zero-trust conditional access, centralize device management via Microsoft Intune, and establish governance across SharePoint and Teams.",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise team collaborating seamlessly using modern Microsoft 365 cloud solutions",
    capabilities: [
      {
        title: "Microsoft 365 Tenant Administration & Hardening",
        description: "Comprehensive security baseline implementation following CIS benchmarks and Microsoft Secure Score optimization.",
        features: ["MFA and passwordless authentication", "Anti-phishing and Safe Links protection", "Tenant-wide security posture tuning", "Spam & spoofing defense (DMARC/DKIM)"],
      },
      {
        title: "Microsoft Entra ID (Azure AD) & Zero-Trust",
        description: "Identity-driven access security ensuring only verified users and compliant devices access corporate data.",
        features: ["Conditional Access policies", "Privileged Identity Management (PIM)", "Single Sign-On (SSO) integration", "Self-service password reset"],
      },
      {
        title: "Microsoft Intune Unified Endpoint Management",
        description: "Enroll, manage, and remotely wipe Windows, Mac, iOS, and Android devices from a single centralized console.",
        features: ["Zero-touch device provisioning (Autopilot)", "Application deployment & patch policies", "Compliance enforcement", "Remote enterprise data wipe"],
      },
      {
        title: "SharePoint, OneDrive & Teams Governance",
        description: "Organize document repositories, enforce permission inheritance, and prevent accidental external sharing.",
        features: ["Data Loss Prevention (DLP) rules", "External sharing restrictions", "Teams lifecycle management", "Automated file classification"],
      },
    ],
    process: [
      { step: "01", title: "Tenant Audit", description: "Evaluate your Microsoft Secure Score, license utilization, and security misconfigurations." },
      { step: "02", title: "Security Baseline", description: "Deploy Conditional Access policies, multi-factor authentication, and email threat protection." },
      { step: "03", title: "Intune Enrollment", description: "Onboard workstations and mobile devices into automated management with compliance baselines." },
      { step: "04", title: "Governance & Review", description: "Conduct quarterly licensing reviews and security score optimizations to maximize M365 ROI." },
    ],
    benefits: [
      "Substantially higher Microsoft Secure Score, reducing risk of phishing and credential theft",
      "Seamless single sign-on experience across all corporate applications and cloud services",
      "Effortless device deployment with Windows Autopilot shipping pre-configured to remote employees",
      "Significant licensing cost reduction by eliminating redundant third-party security subscriptions",
    ],
    faqs: [
      {
        question: "Can we consolidate third-party tools by moving to Microsoft 365 E5 / Business Premium?",
        answer: "Yes, Microsoft 365 bundles endpoint protection (Defender), identity governance (Entra), and MDM (Intune), allowing you to replace separate costly point solutions.",
      },
      {
        question: "How do you protect corporate data on employee personal smartphones (BYOD)?",
        answer: "Using Microsoft Intune App Protection policies, we encrypt and sandbox corporate email and documents inside Microsoft apps without monitoring or touching personal photos or messages.",
      },
    ],
    relatedSolutions: [
      { title: "Azure Cost Management", slug: "azure-cost-management", href: "/services/cloud/azure-cost-management" },
      { title: "Managed Security Services (MSSP)", slug: "managed-security", href: "/services/managed-security" },
      { title: "Managed IT Services (MSP)", slug: "managed-it", href: "/services/managed-it" },
    ],
  },

  // ==========================================
  // 3. IT CONSULTING SERVICES
  // ==========================================
  "grc": {
    slug: "grc",
    title: "Governance, Risk & Compliance (GRC)",
    badge: "Regulatory Readiness & Audit Defense",
    category: "consulting",
    categoryTitle: "IT Consulting",
    href: "/services/consulting/grc",
    shortDescription: "SOC 2, ISO 27001, HIPAA, and PCI-DSS compliance frameworks, continuous risk auditing, and security policy automation.",
    heroHeadline: "Governance, Risk & Compliance (GRC) Consulting",
    heroSubheadline: "Turn compliance from an operational burden into a competitive advantage. We architect, implement, and automate regulatory compliance frameworks for modern enterprises.",
    problemStatement: "Failing compliance audits causes lost enterprise contracts, hefty regulatory fines, and legal liability. Managing evidence manually across spreadsheets is slow, error-prone, and unsustainable.",
    solutionOverview: "Our GRC advisors build structured compliance programs tailored to your industry. We automate continuous evidence collection, draft customized security policies, and prepare your organization for flawless third-party audits.",
    iconName: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "IT governance and compliance auditor reviewing enterprise security controls",
    capabilities: [
      {
        title: "SOC 2 & ISO 27001 Certification Readiness",
        description: "Full gap assessment, policy authoring, and control implementation to prepare your organization for formal attestation.",
        features: ["Gap analysis against Trust Services Criteria", "Information Security Management System (ISMS) design", "Control implementation blueprints", "Mock audit simulations"],
      },
      {
        title: "Industry Regulatory Compliance (HIPAA, PCI-DSS, GDPR)",
        description: "Targeted technical architectures meeting strict regulatory privacy and data security mandates.",
        features: ["HIPAA security and privacy rule validation", "PCI-DSS scope reduction architectures", "GDPR data mapping and consent management", "Business Associate Agreements (BAAs)"],
      },
      {
        title: "Continuous Automated Compliance Monitoring",
        description: "Integrate continuous compliance platforms (Vanta, Drata) to automatically collect audit evidence in real time.",
        features: ["Automated evidence collection", "Identity & access audit tracking", "Vendor risk management (TPRM)", "Automated employee compliance training"],
      },
      {
        title: "Enterprise Risk Assessment & Management",
        description: "Systematic identification, scoring, and mitigation of operational, cybersecurity, and vendor risks.",
        features: ["Risk register development", "Threat impact scoring", "Executive risk presentation", "Remediation milestone tracking"],
      },
    ],
    process: [
      { step: "01", title: "Scoping & Gap Audit", description: "Audit current policies, systems, and controls against your target framework standards." },
      { step: "02", title: "Remediation Roadmap", description: "Implement necessary technical controls (MFA, encryption, log centralization) and draft policies." },
      { step: "03", title: "Evidence Automation", description: "Connect continuous evidence collection tools to your cloud infrastructure, GitHub, and identity providers." },
      { step: "04", title: "Audit Escort", description: "Work directly with your external CPA auditor to provide evidence and guarantee successful certification." },
    ],
    benefits: [
      "Accelerate enterprise sales cycles by providing verified SOC 2 and ISO 27001 reports to prospects",
      "Eliminate manual spreadsheet evidence collection with 24/7 automated compliance telemetry",
      "Protect your leadership team from regulatory fines and personal liability",
      "Create a mature, resilient security culture across all departments",
    ],
    faqs: [
      {
        question: "How long does it take to become SOC 2 Type 1 and Type 2 ready?",
        answer: "With our automated framework, SOC 2 Type 1 readiness is typically achieved in 4 to 8 weeks. Type 2 requires a subsequent 3 to 6 month observation period.",
      },
      {
        question: "Do you act as the auditor or the implementation partner?",
        answer: "We act as your advisory and implementation partner. We build the controls, automate evidence, and escort you through the audit with an accredited third-party CPA firm.",
      },
    ],
    relatedSolutions: [
      { title: "IT Assessment Services", slug: "it-assessment", href: "/services/consulting/it-assessment" },
      { title: "Managed Security Services (MSSP)", slug: "managed-security", href: "/services/managed-security" },
      { title: "IT Strategy & Consulting", slug: "it-strategy", href: "/services/consulting/it-strategy" },
    ],
  },

  "it-assessment": {
    slug: "it-assessment",
    title: "IT Assessment Services",
    badge: "Architecture & Security Auditing",
    category: "consulting",
    categoryTitle: "IT Consulting",
    href: "/services/consulting/it-assessment",
    shortDescription: "Comprehensive infrastructure scans, cybersecurity posture reviews, licensing optimization, and technical debt scoring.",
    heroHeadline: "Comprehensive IT Assessment & Vulnerability Discovery",
    heroSubheadline: "Gain total clarity on your IT infrastructure health, security vulnerabilities, and operational bottlenecks. We provide actionable, prioritized roadmaps to optimize performance and reduce risk.",
    problemStatement: "Organizations frequently operate with blindspots: aging hardware nearing failure, dormant user accounts with admin access, unpatched software, and runaway cloud licensing costs.",
    solutionOverview: "Our thorough IT Assessment examines every layer of your technology ecosystem—networks, servers, endpoints, cloud instances, security policies, and vendor contracts. We deliver an objective executive scorecard with prioritized remediation steps.",
    iconName: "ClipboardCheck",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "IT infrastructure analyst examining systems health and network telemetry",
    capabilities: [
      {
        title: "Infrastructure & Network Topology Audit",
        description: "Full discovery of switches, firewalls, Wi-Fi networks, servers, and bandwidth utilization bottlenecks.",
        features: ["Network diagram generation", "Hardware warranty and lifecycle auditing", "Switch & VLAN configuration review", "Bandwidth bottleneck analysis"],
      },
      {
        title: "Cybersecurity Posture & Vulnerability Scan",
        description: "Non-intrusive internal and external vulnerability assessments pinpointing critical security gaps.",
        features: ["External perimeter attack surface scan", "Internal credential vulnerability audit", "Active Directory / Entra ID health check", "Phishing susceptibility review"],
      },
      {
        title: "Cloud & Software Licensing Optimization",
        description: "Audit Microsoft 365, AWS, Azure, and SaaS subscriptions to eliminate unused licenses and redundant tools.",
        features: ["Dormant license identification", "Tier downgrading recommendations", "SaaS sprawl discovery", "Annual licensing cost reduction"],
      },
      {
        title: "Technical Debt & TCO Scorecard",
        description: "Quantify the risk and hidden costs of legacy software and hardware, providing clear executive ROI metrics.",
        features: ["Risk-weighted executive scorecard", "3-phase prioritized remediation roadmap", "Budget capital cost forecasts", "Vendor SLA benchmarking"],
      },
    ],
    process: [
      { step: "01", title: "Non-Intrusive Scan", description: "Deploy lightweight discovery probes to inventory all connected hardware, software, and cloud assets." },
      { step: "02", title: "Security & Config Review", description: "Inspect active firewall rules, access rights, backup integrity, and disaster recovery readiness." },
      { step: "03", title: "Analysis & Scoring", description: "Synthesize raw telemetry against industry benchmarks (CIS, NIST, ISO) to score business risk." },
      { step: "04", title: "Executive Briefing", description: "Deliver an executive presentation and technical report with clear, cost-effective remediation priorities." },
    ],
    benefits: [
      "Discover critical security vulnerabilities before malicious threat actors exploit them",
      "Cut 15% to 30% of unnecessary cloud and software licensing spend immediately",
      "Receive objective, vendor-agnostic recommendations to guide executive decision-making",
      "Gain full architectural documentation and accurate network topology diagrams",
    ],
    faqs: [
      {
        question: "Will the IT assessment disrupt our daily business operations?",
        answer: "Not at all. Our scanning tools operate entirely in the background using non-intrusive, read-only telemetry that creates zero latency or user interruption.",
      },
      {
        question: "How long does a complete IT assessment take?",
        answer: "A standard comprehensive assessment takes between 5 to 10 business days from initial scan kickoff to final executive briefing delivery.",
      },
    ],
    relatedSolutions: [
      { title: "IT Strategy & Consulting", slug: "it-strategy", href: "/services/consulting/it-strategy" },
      { title: "Governance, Risk & Compliance (GRC)", slug: "grc", href: "/services/consulting/grc" },
      { title: "Managed IT Services (MSP)", slug: "managed-it", href: "/services/managed-it" },
    ],
  },

  "it-strategy": {
    slug: "it-strategy",
    title: "IT Strategy & Consulting",
    badge: "vCIO Leadership & Digital Roadmap",
    category: "consulting",
    categoryTitle: "IT Consulting",
    href: "/services/consulting/it-strategy",
    shortDescription: "Virtual CIO (vCIO) executive advisory, multi-year digital transformation blueprints, IT budgeting, and vendor consolidation.",
    heroHeadline: "Strategic IT Consulting & Virtual CIO (vCIO) Advisory",
    heroSubheadline: "Align technology investments directly with business growth goals. Our experienced vCIOs provide visionary technical leadership, budgeting governance, and digital execution roadmaps.",
    problemStatement: "Without high-level technical leadership, businesses make reactive IT purchases, suffer from technology sprawl, and fail to anticipate scalability bottlenecks until systems break.",
    solutionOverview: "We provide executive Virtual CIO (vCIO) advisory services. Working alongside your executive team, we design 3-year digital roadmaps, optimize technology capital allocation, and ensure every IT initiative produces tangible ROI.",
    iconName: "Compass",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Executive business board reviewing strategic IT consulting and technology transformation roadmap",
    capabilities: [
      {
        title: "Virtual CIO (vCIO) Strategic Leadership",
        description: "Executive-level technology counsel without the cost of hiring a full-time, six-figure Chief Information Officer.",
        features: ["Board and executive meeting representation", "Strategic technology alignment", "Quarterly Business Reviews (QBRs)", "Digital initiative governance"],
      },
      {
        title: "Multi-Year Technology Roadmapping",
        description: "Clear, prioritized 1-year, 2-year, and 3-year execution plans designed around your growth milestones.",
        features: ["Milestone phase planning", "Infrastructure lifecycle forecasting", "Scalability readiness roadmaps", "Risk-mitigated transition paths"],
      },
      {
        title: "IT Budgeting & Financial Governance",
        description: "Transform unpredictable emergency IT expenses into stable, predictable operating budgets.",
        features: ["Annual IT budget creation", "CapEx-to-OpEx optimization", "Cloud ROI financial modeling", "Total Cost of Ownership (TCO) benchmarks"],
      },
      {
        title: "Vendor Selection & Contract Negotiation",
        description: "Leverage our market expertise to evaluate, select, and negotiate favorable enterprise vendor contracts.",
        features: ["Vendor RFP formulation & evaluation", "Master Service Agreement (MSA) review", "SLA enforcement", "Vendor consolidation"],
      },
    ],
    process: [
      { step: "01", title: "Business Alignment", description: "Interview stakeholders to understand revenue targets, operational bottlenecks, and expansion plans." },
      { step: "02", title: "Technology Strategy", description: "Map high-impact technology initiatives that directly accelerate those commercial objectives." },
      { step: "03", title: "Budget & Roadmap", description: "Deliver a phased, fully costed 3-year digital transformation blueprint." },
      { step: "04", title: "vCIO Execution", description: "Meet quarterly to evaluate KPI metrics, steer project delivery, and adjust to emerging opportunities." },
    ],
    benefits: [
      "Access veteran CIO leadership at a fraction of the cost of a full-time executive salary",
      "Eliminate surprise emergency capital expenditures through structured multi-year budgeting",
      "Prevent costly bad technology investments and vendor lock-in",
      "Ensure IT actively drives revenue and competitive advantage rather than acting as a cost center",
    ],
    faqs: [
      {
        question: "What does a Virtual CIO (vCIO) actually do for our company?",
        answer: "A vCIO acts as your senior technology executive. They participate in executive strategy meetings, construct IT budgets, manage vendor contracts, ensure cybersecurity compliance, and align technology projects with business growth.",
      },
      {
        question: "How frequently does the vCIO interact with our leadership team?",
        answer: "Typically monthly for tactical project reviews, quarterly for formal Board/QBR presentations, and continuously available on an on-demand advisory retainer.",
      },
    ],
    relatedSolutions: [
      { title: "Technology Strategy", slug: "technology-strategy", href: "/services/consulting/technology-strategy" },
      { title: "IT Assessment Services", slug: "it-assessment", href: "/services/consulting/it-assessment" },
      { title: "Governance, Risk & Compliance (GRC)", slug: "grc", href: "/services/consulting/grc" },
    ],
  },

  "technology-strategy": {
    slug: "technology-strategy",
    title: "Technology Strategy Services",
    badge: "Cloud-Native & Modern Architecture",
    category: "consulting",
    categoryTitle: "IT Consulting",
    href: "/services/consulting/technology-strategy",
    shortDescription: "Modern stack evaluation, cloud-native adoption, microservices refactoring roadmaps, and high-concurrency systems design.",
    heroHeadline: "Technology Strategy: Future-Proof Your Architecture",
    heroSubheadline: "Build modern, agile, scalable software systems. We advise enterprise CTOs and product leaders on cloud-native patterns, microservices migration, modern stack adoption, and DevOps pipelines.",
    problemStatement: "Aging monolithic codebases, obsolete frameworks, and brittle architectures make launching new digital features painfully slow and error-prone.",
    solutionOverview: "Our Technology Strategy practice helps organizations evolve beyond legacy technical debt. We design modular, cloud-native enterprise architectures that enable rapid feature deployment, elastic scalability, and superior developer velocity.",
    iconName: "Code2",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise software architect whiteboard designing cloud-native microservices architecture",
    capabilities: [
      {
        title: "Cloud-Native Architecture Design",
        description: "Transition from brittle on-prem VMs to elastic serverless and containerized microservices architectures.",
        features: ["Kubernetes / Container strategy", "Event-driven system design", "Serverless compute frameworks", "Multi-region resilience"],
      },
      {
        title: "Monolith Decoupling & API Architecture",
        description: "Strangler-fig patterns and domain-driven design to systematically decompose legacy systems into modular services.",
        features: ["Domain-driven design (DDD)", "REST & GraphQL API standards", "Distributed data management", "Zero-downtime service extraction"],
      },
      {
        title: "DevOps & CI/CD Pipeline Automation",
        description: "Accelerate deployment cycles with automated test suites, GitOps workflows, and automated rollbacks.",
        features: ["Infrastructure as Code (Terraform)", "Automated regression testing", "Blue/green & canary deployments", "Observability & tracing (OpenTelemetry)"],
      },
      {
        title: "Technology Stack Evaluation & Modernization",
        description: "Objective evaluation of modern frameworks (Next.js, Node.js, Python, Rust, Go) to maximize developer productivity.",
        features: ["Stack benchmarking & POCs", "Technical debt cost modeling", "Security & dependency vetting", "Team skill transition plans"],
      },
    ],
    process: [
      { step: "01", title: "Code & Architecture Review", description: "Audit current code repositories, dependency trees, deployment pipelines, and database schemas." },
      { step: "02", title: "Target Architecture", description: "Design a modular, cloud-native target state with well-defined service boundaries and APIs." },
      { step: "03", title: "Pilot Migration", description: "Implement a low-risk proof of concept to validate the modern architecture and establish CI/CD patterns." },
      { step: "04", title: "Scaled Rollout", description: "Systematically refactor modules while training internal development teams on modern engineering best practices." },
    ],
    benefits: [
      "Ship new features 3x to 5x faster by eliminating monolithic deployment bottlenecks",
      "Lower cloud infrastructure costs through elastic, containerized resource allocation",
      "Dramatically improve system reliability and uptime with automated rollbacks and telemetry",
      "Attract and retain top engineering talent with a modern, productive development stack",
    ],
    faqs: [
      {
        question: "How do you refactor a monolith without halting new feature development?",
        answer: "We employ the proven 'Strangler Fig' pattern, carving out discrete microservices and routing traffic gradually via API gateways so your core product roadmap continues uninterrupted.",
      },
      {
        question: "Do you assist our engineers with implementation, or just provide slide decks?",
        answer: "We pair-program and architect alongside your internal engineering team, writing foundational Infrastructure-as-Code, API contracts, and CI/CD pipelines to guarantee real-world success.",
      },
    ],
    relatedSolutions: [
      { title: "IT Strategy & Consulting", slug: "it-strategy", href: "/services/consulting/it-strategy" },
      { title: "API Development & Integration", slug: "api-development", href: "/services/development/api-development" },
      { title: "Cloud Integration Applications", slug: "cloud-integration", href: "/services/development/cloud-integration" },
    ],
  },

  // ==========================================
  // 4. IT DEVELOPMENT SERVICES
  // ==========================================
  "api-development": {
    slug: "api-development",
    title: "API Development & Integration",
    badge: "Enterprise APIs & Middleware",
    category: "development",
    categoryTitle: "IT Development",
    href: "/services/development/api-development",
    shortDescription: "High-throughput REST and GraphQL APIs, middleware connectors, ERP/CRM bi-directional sync, and secure OAuth2 gateways.",
    heroHeadline: "Enterprise API Development & System Integration",
    heroSubheadline: "Connect disconnected systems into a unified digital ecosystem. We engineer secure, ultra-fast APIs and enterprise middleware that bridge ERPs, CRMs, payment gateways, and custom applications.",
    problemStatement: "Disconnected software tools create data silos, requiring tedious manual data re-entry, increasing error rates, and blocking automated customer workflows.",
    solutionOverview: "Our integration engineers design robust, typed API platforms. Whether connecting Salesforce to SAP, synchronizing custom portals with SQL databases, or exposing developer APIs to partners, we build high-concurrency, secure gateways.",
    iconName: "Network",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Software engineers architecting enterprise APIs and cloud microservices",
    capabilities: [
      {
        title: "REST & GraphQL API Architecture",
        description: "Design and implement high-performance, well-documented API endpoints built for enterprise concurrency.",
        features: ["OpenAPI 3.0 / Swagger documentation", "GraphQL schema federation", "Sub-50ms response latency", "Automated regression test suites"],
      },
      {
        title: "Enterprise Middleware & System Bridges",
        description: "Bi-directional synchronization pipelines connecting legacy ERPs, Salesforce, HubSpot, NetSuite, and custom databases.",
        features: ["Real-time data synchronization", "Conflict resolution logic", "Dead-letter message queues", "High-volume batch ETL pipelines"],
      },
      {
        title: "Zero-Trust API Security & Rate Limiting",
        description: "Harden external API endpoints against brute force, unauthorized access, and volumetric abuse.",
        features: ["OAuth2 / OIDC & JWT token authorization", "Mutual TLS (mTLS) authentication", "API gateway rate limiting & throttling", "OWASP API Top 10 defenses"],
      },
      {
        title: "Webhooks & Event-Driven Streaming",
        description: "Implement reliable asynchronous event publishing via Kafka, RabbitMQ, or AWS SQS / Azure Event Grid.",
        features: ["Guaranteed once-and-only-once delivery", "Automated webhook retry backoffs", "Event payload signing (HMAC)", "Real-time streaming telemetry"],
      },
    ],
    process: [
      { step: "01", title: "API Contract", description: "Define OpenAPI / GraphQL schemas, payloads, error standards, and authentication protocols." },
      { step: "02", title: "Middleware Engineering", description: "Build data transformation logic, validation gates, and secure system connectors." },
      { step: "03", title: "Load & Security Testing", description: "Execute synthetic concurrency simulations and OWASP vulnerability pen tests." },
      { step: "04", title: "Deployment & Telemetry", description: "Deploy behind high-availability API gateways with distributed tracing and automated alerts." },
    ],
    benefits: [
      "Eliminate manual data re-entry across sales, finance, and operations systems",
      "Achieve real-time data visibility across all customer-facing applications and back-office ERPs",
      "Secure external partner integrations with enterprise-grade token encryption and rate limiting",
      "Gain full visibility into system health with comprehensive API telemetry and tracing",
    ],
    faqs: [
      {
        question: "Can you connect our custom portal with legacy on-premises SQL databases or ERPs?",
        answer: "Yes, we regularly build secure hybrid connectors using site-to-site VPNs or Azure Relay to bridge modern web apps with on-premises ERPs like SAP, Dynamics, or custom databases.",
      },
      {
        question: "How do you guarantee data consistency during network interruptions?",
        answer: "We utilize transactional message queues with persistent dead-letter storage and automated exponential backoff retries to guarantee no message is ever lost.",
      },
    ],
    relatedSolutions: [
      { title: "Cloud Integration Applications", slug: "cloud-integration", href: "/services/development/cloud-integration" },
      { title: "Website Development", slug: "web-development", href: "/services/development/web-development" },
      { title: "E-commerce Solutions", slug: "ecommerce", href: "/services/development/ecommerce" },
    ],
  },

  "cloud-integration": {
    slug: "cloud-integration",
    title: "Cloud Integration Applications",
    badge: "Cloud-Native App Engineering",
    category: "development",
    categoryTitle: "IT Development",
    href: "/services/development/cloud-integration",
    shortDescription: "Serverless event-driven backends, microservices, containerized Docker/Kubernetes deployments, and SaaS integrations.",
    heroHeadline: "Cloud Integration Applications: Scalable Cloud Software",
    heroSubheadline: "Build cloud-native applications that scale effortlessly. We engineer event-driven serverless backends, containerized microservices, and automated workflows on Microsoft Azure and AWS.",
    problemStatement: "Traditional monolithic web apps struggle under sudden traffic surges, become bottlenecked by shared databases, and are difficult to update without risky full-system restarts.",
    solutionOverview: "We build scalable, decoupled cloud applications leveraging modern serverless compute (Azure Functions, AWS Lambda), managed container clusters (AKS/EKS), and resilient message brokers.",
    iconName: "CloudLightning",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cloud integration software architecture displaying containerized microservices and automated event pipelines",
    capabilities: [
      {
        title: "Serverless Event-Driven Backends",
        description: "Run application logic without provisioning or managing servers, automatically scaling from zero to millions of requests.",
        features: ["Azure Functions / AWS Lambda", "Sub-second execution scaling", "Pay-per-millisecond cost efficiency", "Event-triggered automation"],
      },
      {
        title: "Containerized Microservices (Docker & K8s)",
        description: "Package application services into portable, isolated containers orchestrated with Kubernetes for high availability.",
        features: ["Kubernetes cluster deployment (AKS/EKS)", "Zero-downtime rolling updates", "Automated pod health self-healing", "Service mesh communication (Istio)"],
      },
      {
        title: "Asynchronous Message Queuing",
        description: "Decouple heavy computational jobs using managed queues like Azure Service Bus or AWS SQS.",
        features: ["FIFO guaranteed ordering", "Dead-letter retry queues", "High-throughput pub/sub topics", "Background job orchestration"],
      },
      {
        title: "Managed Cloud Database Architectures",
        description: "Design high-speed, geo-replicated data tiers using Azure Cosmos DB, DynamoDB, or managed PostgreSQL.",
        features: ["Global data replication", "Automated point-in-time backups", "Elastic throughput scaling", "ACID compliance"],
      },
    ],
    process: [
      { step: "01", title: "Domain Modeling", description: "Decompose application boundaries into independent, loosely coupled microservices." },
      { step: "02", title: "Infrastructure-as-Code", description: "Write reusable Terraform/Bicep templates for all cloud compute, networking, and queues." },
      { step: "03", title: "Cloud Development", description: "Write typed, modular application code integrated with cloud SDKs and automated test suites." },
      { step: "04", title: "CI/CD & Observability", description: "Deploy via automated pipelines with real-time error tracking, distributed logs, and alerts." },
    ],
    benefits: [
      "Automatically scale to handle viral traffic spikes without manual server provisioning",
      "Dramatically reduce cloud spend by leveraging pay-per-use serverless execution tiers",
      "Isolate software failures so an issue in one service never brings down the entire platform",
      "Deploy code updates continuously with zero downtime and instant rollback capabilities",
    ],
    faqs: [
      {
        question: "When should we use serverless versus containerized microservices?",
        answer: "Serverless is ideal for sporadic or event-driven tasks that need to scale rapidly from zero. Containerized microservices (Kubernetes) are suited for long-running, compute-heavy, or predictable continuous services.",
      },
      {
        question: "How do you monitor distributed cloud applications?",
        answer: "We implement OpenTelemetry distributed tracing, centralized cloud logging (Azure Monitor / CloudWatch), and real-time application performance monitoring (Datadog / New Relic).",
      },
    ],
    relatedSolutions: [
      { title: "API Development & Integration", slug: "api-development", href: "/services/development/api-development" },
      { title: "Website Development", slug: "web-development", href: "/services/development/web-development" },
      { title: "Infrastructure as a Service (IaaS)", slug: "iaas", href: "/services/cloud/iaas" },
    ],
  },

  "ecommerce": {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    badge: "Transactional Storefronts & POS",
    category: "development",
    categoryTitle: "IT Development",
    href: "/services/development/ecommerce",
    shortDescription: "High-conversion transactional digital storefronts, PCI-DSS Level 1 compliant checkout, and real-time inventory ERP sync.",
    heroHeadline: "High-Performance E-commerce Engineering",
    heroSubheadline: "Accelerate online revenue with lightning-fast digital storefronts. We build secure, high-concurrency e-commerce platforms with automated inventory synchronization and frictionless checkout.",
    problemStatement: "Slow loading pages, clunky mobile checkout steps, and out-of-sync inventory cause abandoned shopping carts, lost revenue, and customer frustration.",
    solutionOverview: "Our e-commerce engineering practice builds bespoke, high-converting digital storefronts. Using headless commerce architectures, edge-cached product catalogs, and PCI-compliant payment integrations, we deliver sub-second shopping experiences.",
    iconName: "ShoppingBag",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern e-commerce platform analytics and secure mobile checkout interface",
    capabilities: [
      {
        title: "Headless E-commerce & Sub-Second Storefronts",
        description: "Decouple your frontend storefront from backend commerce logic for blazing fast loading times and custom branding.",
        features: ["Next.js / React commerce frontend", "Edge caching on global CDNs", "Sub-second product catalog search", "High Core Web Vitals scores"],
      },
      {
        title: "Frictionless PCI-Compliant Checkout",
        description: "Optimized multi-step and one-click checkout flows supporting all major payment providers and digital wallets.",
        features: ["Stripe, Adyen, PayPal integration", "Apple Pay & Google Pay support", "PCI-DSS Level 1 tokenization", "3D Secure 2 fraud protection"],
      },
      {
        title: "Real-Time ERP & Inventory Synchronization",
        description: "Prevent overselling by synchronizing stock levels in real time across warehouse ERPs and physical retail POS terminals.",
        features: ["Bi-directional inventory sync", "Multi-warehouse order routing", "Automated low-stock threshold triggers", "Drop-ship automation"],
      },
      {
        title: "B2B Wholesale & Custom Pricing Portals",
        description: "Enterprise B2B ordering portals with customer-specific pricing tiers, credit terms, and bulk quote requests.",
        features: ["Tiered account pricing", "Purchase Order (PO) invoicing", "Credit terms & net-30 terms", "Bulk CSV order uploads"],
      },
    ],
    process: [
      { step: "01", title: "UX Journey Mapping", description: "Design optimized user journeys, frictionless cart flows, and rapid checkout funnels." },
      { step: "02", title: "Platform Architecture", description: "Build scalable headless backends integrated with your product catalogs and payment gateways." },
      { step: "03", title: "ERP & POS Sync", description: "Integrate bi-directional data feeds with warehouse inventory, billing, and shipping carriers." },
      { step: "04", title: "Flash Sale Load Testing", description: "Simulate massive traffic spikes to guarantee 100% availability during peak holiday promotions." },
    ],
    benefits: [
      "25%+ increase in mobile conversion rates driven by sub-second loading and one-click wallet payments",
      "Elimination of stock discrepancies and overselling through real-time ERP inventory sync",
      "Complete immunity to holiday traffic crashes via auto-scaling serverless cloud hosting",
      "Full PCI-DSS compliance ensuring customer payment data is never exposed to risk",
    ],
    faqs: [
      {
        question: "Can your e-commerce solutions handle extreme flash sale traffic?",
        answer: "Yes, our headless architecture utilizes globally edge-cached static pages and auto-scaling serverless checkouts that effortlessly absorb tens of thousands of concurrent shoppers.",
      },
      {
        question: "Which platforms and payment processors do you work with?",
        answer: "We build custom Next.js storefronts, Shopify Plus headless setups, and integrate with Stripe, Adyen, PayPal, Authorize.net, and major global acquiring banks.",
      },
    ],
    relatedSolutions: [
      { title: "Website Development", slug: "web-development", href: "/services/development/web-development" },
      { title: "API Development & Integration", slug: "api-development", href: "/services/development/api-development" },
      { title: "Cloud Integration Applications", slug: "cloud-integration", href: "/services/development/cloud-integration" },
    ],
  },

  "web-development": {
    slug: "web-development",
    title: "Website Development",
    badge: "Next.js & Modern Web Engineering",
    category: "development",
    categoryTitle: "IT Development",
    href: "/services/development/web-development",
    shortDescription: "Modern Next.js/React web platforms, responsive design, headless CMS architectures, and ultra-fast Core Web Vitals.",
    heroHeadline: "Modern Website & Web Application Development",
    heroSubheadline: "Elevate your brand with lightning-fast, beautifully engineered web experiences. We build responsive, enterprise-grade web applications and digital platforms that captivate users and convert visitors.",
    problemStatement: "Outdated, clunky websites built on legacy CMS platforms suffer from slow load times, poor mobile UX, security vulnerabilities, and low search engine rankings.",
    solutionOverview: "Orbytes engineers modern web applications using Next.js, React, TypeScript, and Tailwind CSS. We deliver sub-second page loads, intuitive user interfaces, enterprise security, and seamless headless content management.",
    iconName: "Layout",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern enterprise website development showing responsive layout on multiple devices",
    capabilities: [
      {
        title: "Next.js & Modern Frontend Architecture",
        description: "Lightning-fast static site generation (SSG) and server-side rendering (SSR) for optimal speed and search visibility.",
        features: ["Sub-second page transitions", "Lighthouse 95+ Core Web Vitals scores", "Clean, typed TypeScript codebase", "Tailwind CSS styling"],
      },
      {
        title: "Responsive Cross-Device Design",
        description: "Flawless user experiences engineered to look and perform brilliantly on smartphones, tablets, laptops, and ultra-wide monitors.",
        features: ["Mobile-first fluid layouts", "Touch-optimized gestures & menus", "Dynamic retina-ready image optimization", "Cross-browser regression testing"],
      },
      {
        title: "Headless CMS Integration",
        description: "Empower your marketing and content teams with an intuitive editing interface without compromising site security or speed.",
        features: ["Sanity, Strapi, or Contentful setup", "Visual live content previews", "Role-based editorial permissions", "Instant automated deployments on publish"],
      },
      {
        title: "Enterprise Web Security & Accessibility (a11y)",
        description: "Hardened frontend security policies and full compliance with WCAG 2.1 AA accessibility guidelines.",
        features: ["Strict Content Security Policy (CSP)", "OWASP security best practices", "WCAG 2.1 AA screen reader accessibility", "Automated vulnerability patching"],
      },
    ],
    process: [
      { step: "01", title: "Information Architecture", description: "Structure user journeys, wireframes, and technical specifications for optimal UX." },
      { step: "02", title: "Design & Prototyping", description: "Craft interactive design mockups, typography systems, and responsive design tokens." },
      { step: "03", title: "Modern Code Development", description: "Build modular, typed Next.js components with smooth motion animations and backend APIs." },
      { step: "04", title: "Audit & Launch", description: "Perform rigorous accessibility audits, load testing, SEO optimization, and zero-downtime deployment." },
    ],
    benefits: [
      "Significantly higher Google search rankings driven by 95+ Core Web Vitals performance",
      "Delight users with instantaneous page transitions and fluid micro-interactions",
      "Empower your marketing team to publish content independently via an intuitive Headless CMS",
      "Zero server maintenance overhead by leveraging global edge CDN hosting",
    ],
    faqs: [
      {
        question: "Why do you use Next.js and React for enterprise websites?",
        answer: "Next.js offers the ideal blend of server-side rendering for SEO, static site generation for lightning-fast speeds, and React component modularity for seamless ongoing maintenance.",
      },
      {
        question: "Can our internal team easily update blog posts, case studies, and text?",
        answer: "Yes, we integrate headless CMS platforms like Sanity or Contentful that give your non-technical team members a clean, easy-to-use editor with live previews.",
      },
    ],
    relatedSolutions: [
      { title: "API Development & Integration", slug: "api-development", href: "/services/development/api-development" },
      { title: "E-commerce Solutions", slug: "ecommerce", href: "/services/development/ecommerce" },
      { title: "Cloud Integration Applications", slug: "cloud-integration", href: "/services/development/cloud-integration" },
    ],
  },
};

// Aliases for backward compatibility with previous routes
servicesData["cloud"] = servicesData["cloud-data-migration"];
servicesData["consulting"] = servicesData["it-strategy"];
servicesData["digital-solutions"] = servicesData["web-development"];
