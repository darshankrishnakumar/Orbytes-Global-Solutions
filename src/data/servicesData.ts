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
  relatedSolutions: { title: string; slug: string }[];
}

export const servicesData: Record<string, ServiceItem> = {
  "managed-security": {
    slug: "managed-security",
    title: "Managed Security Services (MSSP)",
    badge: "24/7 Cyber Defense & Compliance",
    shortDescription: "Continuous threat detection, 24/7 SOC monitoring, rapid incident response, and regulatory compliance.",
    heroHeadline: "Managed Security Services (MSSP) for Robust Enterprise Protection",
    heroSubheadline: "Eliminate security blindspots and maintain focus on your core enterprise. Proactive threat prevention, AI-driven anomaly detection, and continuous 24/7 SOC monitoring safeguard your operations around the clock.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "24/7 Cybersecurity Security Operations Center monitoring enterprise threat telemetry",
    problemStatement: "Cyber threats do not observe business hours. Sophisticated ransomware, phishing vectors, and zero-day vulnerabilities threaten data integrity, brand reputation, and regulatory compliance. Internal IT teams are often overwhelmed by alert fatigue and lack 24/7 specialized SOC resources.",
    solutionOverview: "Orbytes provides an enterprise-grade security operations center (SOC) that continuously monitors your networks, endpoints, cloud instances, and user identities. We combine real-time threat intelligence with automated containment and human expertise to eliminate risks before business disruption occurs.",
    iconName: "ShieldCheck",
    capabilities: [
      {
        title: "24/7 SOC & Continuous Monitoring",
        description: "Round-the-clock surveillance of your digital footprint with dedicated security analysts analyzing anomalous activity in real time.",
        features: ["24/7 Security Operations Center", "Real-time threat triage", "Log telemetry aggregation", "Continuous perimeter scanning"],
      },
      {
        title: "SIEM & AI Anomaly Detection",
        description: "Enterprise-grade Security Information and Event Management (SIEM) aggregating logs across servers, firewalls, and cloud platforms.",
        features: ["Behavioral anomaly detection", "Cross-system correlation", "Machine learning threat scoring", "Automated threat alerts"],
      },
      {
        title: "Endpoint Protection & EDR",
        description: "Next-generation endpoint detection and response safeguarding all workstations, mobile devices, and server endpoints.",
        features: ["Zero-day exploit blocking", "Device isolation capabilities", "Ransomware rollback", "Continuous telemetry"],
      },
      {
        title: "Vulnerability Management & Audits",
        description: "Scheduled scanning, penetration testing, and systematic vulnerability remediation across your technology stack.",
        features: ["Asset vulnerability mapping", "CVE risk prioritization", "Patch deployment support", "Executive risk scoring"],
      },
      {
        title: "Incident Response & Forensics",
        description: "Rapid containment, forensic root-cause investigation, and system recovery to minimize downtime following any incident.",
        features: ["SLA-backed emergency response", "Breach containment", "Digital forensics", "Post-incident hardening"],
      },
      {
        title: "Regulatory Compliance (GRC)",
        description: "Ensuring your environment strictly adheres to mandatory governance standards including GDPR, HIPAA, PCI-DSS, and ISO 27001.",
        features: ["Audit readiness preparation", "Policy documentation", "Continuous compliance auditing", "Data privacy controls"],
      },
    ],
    process: [
      { step: "01", title: "Monitor", description: "Telemetry ingestion from firewalls, servers, endpoints, and cloud infrastructure into our centralized SIEM." },
      { step: "02", title: "Detect", description: "AI behavioral algorithms and threat intelligence feeds identify suspicious activity and anomalies." },
      { step: "03", title: "Analyze", description: "SOC security engineers validate alerts, eliminating false positives and assessing threat blast radiuses." },
      { step: "04", title: "Respond", description: "Instant automated containment, malicious process killing, and isolation of affected endpoints." },
      { step: "05", title: "Harden", description: "Forensic debrief and infrastructure updates to prevent recurrent attack vectors." },
    ],
    benefits: [
      "24/7 peace of mind with continuous SOC vigilance and immediate incident escalation",
      "Substantial reduction in cybersecurity overhead compared to maintaining an in-house SOC",
      "Full adherence to GDPR, HIPAA, PCI-DSS, and ISO 27001 regulatory mandates",
      "Rapid threat containment that eliminates operational downtime and ransomware damage",
      "Unified visibility across multi-cloud, hybrid, and on-premises environments",
    ],
    faqs: [
      {
        question: "What security services does Orbytes's Managed Security Services include?",
        answer: "Our Managed Security Services include 24/7 SOC monitoring, real-time threat detection and response, SIEM telemetry analysis, next-gen endpoint protection (EDR), vulnerability assessments, compliance management (GDPR, HIPAA, PCI-DSS, ISO 27001), and rapid incident response.",
      },
      {
        question: "How does Orbytes protect my business from cyber threats?",
        answer: "We deploy layered security defenses including intrusion detection and prevention systems (IDS/IPS), AI-driven anomaly detection, behavioral analytics, threat intelligence feeds, and proactive vulnerability patching to stop attacks before execution.",
      },
      {
        question: "Does Orbytes provide incident response services?",
        answer: "Yes, our dedicated incident response team is available 24/7/365 with immediate SLAs to contain breaches, isolate compromised nodes, eliminate persistence, and conduct deep digital forensics.",
      },
      {
        question: "How does Orbytes ensure compliance with security regulations?",
        answer: "We map your security controls against frameworks like ISO 27001, HIPAA, GDPR, and PCI-DSS, conducting regular compliance audits, generating automated audit logs, and remediating compliance drift.",
      },
      {
        question: "Can Orbytes integrate with my existing security infrastructure?",
        answer: "Yes, our MSSP architecture is vendor-neutral and integrates seamlessly with your existing firewalls, cloud providers (Azure, AWS), identity providers, and endpoints.",
      },
    ],
    relatedSolutions: [
      { title: "Managed IT Services (MSP)", slug: "managed-it" },
      { title: "IT Service Management (ITSM)", slug: "itsm" },
      { title: "IT Strategy & Consulting", slug: "consulting" },
    ],
  },

  "managed-it": {
    slug: "managed-it",
    title: "Managed IT Services (MSP)",
    badge: "Reliable Operations & 24/7 Support",
    shortDescription: "Proactive infrastructure monitoring, SLA-backed helpdesk, backup recovery, and continuous performance tuning.",
    heroHeadline: "Managed IT Services for Reliable, High-Performance Business Operations",
    heroSubheadline: "Bid farewell to IT bottlenecks and unplanned downtime. Our completely managed IT operations guarantee maximum uptime, streamlined workflows, and seamless technology scaling.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise data center server infrastructure and high-availability network racks",
    problemStatement: "Unplanned server downtime, sluggish networks, and recurring IT tickets drain productivity and distract leadership from driving strategic growth. Managing disparate vendors, hardware lifecycles, and software patches without dedicated specialists leads to costly operational inefficiencies.",
    solutionOverview: "Orbytes becomes your comprehensive IT backbone or supplements your existing internal team. We take full stewardship of your infrastructure, offering 24/7 helpdesk support, proactive remote monitoring and management (RMM), automated data backups, and lifecycle planning.",
    iconName: "Server",
    capabilities: [
      {
        title: "Proactive Infrastructure Monitoring (RMM)",
        description: "Continuous telemetry tracking of servers, network switches, and cloud nodes to resolve issues before users notice.",
        features: ["24/7 health monitoring", "Automated self-healing scripts", "Hardware lifecycle tracking", "Bandwidth optimization"],
      },
      {
        title: "24/7 Helpdesk & Desktop Support",
        description: "Rapid, friendly technical assistance for your workforce via phone, email, and live ticketing.",
        features: ["First-call resolution focus", "Remote desktop troubleshooting", "User onboarding & offboarding", "Multi-tiered escalation"],
      },
      {
        title: "Data Backup & Business Continuity",
        description: "Automated local and cloud backup architectures guaranteeing rapid recovery times (RTO) and minimal data loss (RPO).",
        features: ["Immutable cloud backups", "Disaster recovery testing", "Ransomware-resilient vaults", "Fast granular restore"],
      },
      {
        title: "Network Administration & Wi-Fi",
        description: "Enterprise networking configuration, firewall administration, VPN tunnels, and SD-WAN management.",
        features: ["VLAN network segmentation", "Secure remote worker VPNs", "QoS traffic prioritization", "Zero-trust network access"],
      },
      {
        title: "Patch Management & Systems Hygiene",
        description: "Automated, scheduled patching of operating systems, hypervisors, and third-party enterprise applications.",
        features: ["Pre-patch staging tests", "OS security updates", "Zero-day hotfix deployment", "Automated compliance logging"],
      },
      {
        title: "Strategic IT Vendor Management",
        description: "Consolidating and coordinating with your telecom, ISP, hardware, and software vendors on your behalf.",
        features: ["Single point of accountability", "License renewal optimization", "SLA enforcement", "Hardware procurement"],
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive audit of your current hardware, network topologies, software licenses, and bottlenecks." },
      { step: "02", title: "Standardize", description: "Deploying standard monitoring agents, securing configurations, and stabilizing core infrastructure." },
      { step: "03", title: "Maintain", description: "Proactive 24/7 maintenance, automated updates, patch cycles, and automated backups." },
      { step: "04", title: "Support", description: "24/7 SLA-driven helpdesk support resolving user and infrastructure tickets with speed." },
      { step: "05", title: "Optimize", description: "Quarterly business reviews (QBR) delivering technology roadmaps and hardware budget forecasts." },
    ],
    benefits: [
      "99.99% operational uptime backed by proactive monitoring and rapid problem resolution",
      "Predictable monthly operating costs with zero unexpected repair or emergency IT expenditures",
      "Empowered employees with instantaneous access to knowledgeable 24/7 support engineers",
      "Scalable infrastructure that smoothly grows with new offices, acquisitions, and team members",
      "Secure data retention with automated cloud backups and verified disaster recovery plans",
    ],
    faqs: [
      {
        question: "What services are included in Orbytes's Managed IT Services?",
        answer: "Our Managed IT Services cover proactive 24/7 infrastructure monitoring, remote and on-site helpdesk support, network administration, patch management, cloud solutions, automated data backups, and disaster recovery.",
      },
      {
        question: "How does Orbytes ensure my IT systems stay operational?",
        answer: "We deploy proactive Remote Monitoring and Management (RMM) tools that detect and rectify system anomalies, storage constraints, and memory leaks before they lead to downtime.",
      },
      {
        question: "Can Orbytes support my internal IT team (Co-managed IT)?",
        answer: "Yes, we frequently operate in a co-managed model, handling 24/7 tier-1 helpdesk, repetitive patching, and after-hours alerts so your in-house IT team can focus entirely on high-impact strategic projects.",
      },
      {
        question: "What kind of IT support response times does Orbytes offer?",
        answer: "We offer strict SLA guarantees, with critical emergency incidents addressed within 15 minutes and 24/7 remote troubleshooting available immediately.",
      },
      {
        question: "How can Orbytes's Managed IT Services improve my business growth?",
        answer: "By removing technology friction, minimizing unplanned downtime, and aligning your IT infrastructure with your commercial goals, your teams can focus on customer delivery and revenue growth.",
      },
    ],
    relatedSolutions: [
      { title: "Managed Security Services (MSSP)", slug: "managed-security" },
      { title: "Cloud & Data Migration", slug: "cloud" },
      { title: "IT Service Management (ITSM)", slug: "itsm" },
    ],
  },

  "cloud": {
    slug: "cloud",
    title: "Cloud & Data Migration Services",
    badge: "Azure, AWS & Hybrid Cloud Architecture",
    shortDescription: "Zero-downtime migration, Azure cost governance, IaaS infrastructure, disaster recovery, and Microsoft cloud.",
    heroHeadline: "Cloud & Data Migration Services: Seamless Transition to the Cloud",
    heroSubheadline: "Modernize your digital foundation with expert cloud engineering. We ensure smooth, secure, and cost-optimized transitions of applications, databases, and enterprise infrastructure to Microsoft Azure and AWS.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Global enterprise cloud infrastructure and hybrid multi-region networking",
    problemStatement: "Legacy on-premises hardware carries staggering refresh costs, physical failure risks, and rigid scaling limitations. However, migrating to the cloud without rigorous planning risks data corruption, budget overruns, security vulnerabilities, and extended operational downtime.",
    solutionOverview: "Orbytes designs and executes structured cloud migrations adhering to the AWS and Microsoft Cloud Adoption Frameworks (CAF). From initial workload assessment to post-migration FinOps cost governance, we ensure your infrastructure achieves maximum elasticity, security, and performance.",
    iconName: "Cloud",
    capabilities: [
      {
        title: "Cloud & Data Migration",
        description: "Zero-downtime migration of databases, legacy ERPs, virtual machines, and enterprise applications to Azure or AWS.",
        features: ["Lift-and-shift & re-architecting", "Live database replication", "Pre-migration dependency mapping", "Cutover validation testing"],
      },
      {
        title: "Azure Cost Management & FinOps",
        description: "Granular cost auditing, right-sizing workloads, reserved instance strategy, and elimination of idle cloud spend.",
        features: ["Cloud expenditure audits", "Automated idle resource teardown", "Reserved instance recommendations", "Budget threshold alerting"],
      },
      {
        title: "Infrastructure as a Service (IaaS)",
        description: "Architecting high-availability virtual machines, software-defined networks, and elastic storage in the public cloud.",
        features: ["Elastic autoscaling groups", "Hybrid cloud interconnects (VPN/ExpressRoute)", "Enterprise SAN cloud storage", "High-availability clustering"],
      },
      {
        title: "Disaster Recovery as a Service (DRaaS)",
        description: "Automated cloud replication ensuring enterprise business continuity with ultra-low RTO and RPO metrics.",
        features: ["Cloud failover orchestration", "Continuous asynchronous replication", "Automated non-disruptive DR drills", "Cross-region geo-redundancy"],
      },
      {
        title: "Microsoft Cloud & Modern Work",
        description: "Enterprise deployment and governance of Microsoft 365, SharePoint, Teams, and Entra ID security architectures.",
        features: ["Tenant-to-tenant migration", "Intune endpoint management", "Conditional access policies", "OneDrive/SharePoint data hygiene"],
      },
      {
        title: "Cloud Security & Posture Management (CSPM)",
        description: "Continuous posture auditing, automated identity governance, and zero-trust configuration across cloud accounts.",
        features: ["Misconfiguration detection", "Identity & Access Management (IAM)", "Encrypted storage by default", "Cloud audit logging"],
      },
    ],
    process: [
      { step: "01", title: "Assess", description: "Detailed discovery of applications, database dependencies, compliance boundaries, and performance benchmarks." },
      { step: "02", title: "Architect", description: "Designing secure landing zones, network topologies, encryption keys, and failover pathways." },
      { step: "03", title: "Pilot", description: "Migrating non-production workloads to test latency, performance, and data replication integrity." },
      { step: "04", title: "Execute", description: "Orchestrated cutover with continuous live data sync to ensure zero disruption to production operations." },
      { step: "05", title: "Optimize", description: "FinOps governance, auto-scaling configuration, and ongoing performance tuning." },
    ],
    benefits: [
      "Eliminate expensive on-premises server refresh cycles and hardware maintenance contracts",
      "Achieve 20%–40% reduction in cloud operational waste through proactive FinOps governance",
      "Scale compute, memory, and storage instantly in response to seasonal or business spikes",
      "Rock-solid business continuity with automated cross-region disaster recovery replication",
      "Enterprise security controls with Microsoft Azure & AWS certified architectural standards",
    ],
    faqs: [
      {
        question: "What is Cloud & Data Migration?",
        answer: "Cloud & Data Migration is the structured transfer of on-premises servers, databases, files, and applications to a modern cloud environment such as Microsoft Azure or AWS.",
      },
      {
        question: "How do you minimize downtime during a cloud migration?",
        answer: "We utilize live replication tools that synchronize data in the background while your on-premises systems remain active. Final cutover is scheduled during off-peak windows and typically takes only minutes.",
      },
      {
        question: "How does Orbytes control and optimize Azure cloud costs?",
        answer: "Our certified cloud engineers implement FinOps practices: right-sizing over-provisioned virtual machines, applying Azure Reserved Instances and Savings Plans, and implementing automated shutdown schedules for non-production environments.",
      },
      {
        question: "Can Orbytes help migrate legacy databases and proprietary applications?",
        answer: "Yes, we specialize in refactoring and migrating legacy SQL databases, custom business software, and enterprise ERP systems with complete data integrity verification.",
      },
      {
        question: "How is data protected during the migration process?",
        answer: "Data is protected with end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), utilizing dedicated secure VPN tunnels or private cloud interconnects.",
      },
    ],
    relatedSolutions: [
      { title: "Managed Security Services (MSSP)", slug: "managed-security" },
      { title: "Managed IT Services (MSP)", slug: "managed-it" },
      { title: "Digital Solutions & Integrations", slug: "digital-solutions" },
    ],
  },

  "itsm": {
    slug: "itsm",
    title: "IT Service Management (ITSM)",
    badge: "ITIL-Compliant Operational Excellence",
    shortDescription: "Structured ticketing workflows, incident resolution, change governance, IT asset management, and ServiceNow/Jira integration.",
    heroHeadline: "IT Service Management (ITSM) for Seamless, Process-Driven Operations",
    heroSubheadline: "Transform reactive IT chaos into a well-oiled, predictable operational engine. Peak performance, ITIL-aligned workflows, and transparent service delivery customized for your enterprise requirements.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise IT Service Management operations and technical workflow coordination",
    problemStatement: "As businesses expand, informal IT support channels (chat messages, hallway requests, dropped emails) lead to lost requests, unmeasured resolution times, uncoordinated changes that cause outages, and total lack of visibility into IT assets.",
    solutionOverview: "Orbytes implements and operates ITIL-aligned IT Service Management frameworks. We deploy automated service catalogs, standard incident workflows, structured change advisory boards (CAB), and comprehensive asset lifecycles across leading platforms like ServiceNow, Jira Service Management, and BMC Helix.",
    iconName: "Settings",
    capabilities: [
      {
        title: "Incident & Request Management",
        description: "Standardized ticketing pipelines with automated priority scoring, SLA timers, and intelligent technician routing.",
        features: ["Omnichannel ticketing (Portal, Email, API)", "Automated categorization & routing", "SLA breach prediction alerts", "User satisfaction (CSAT) scoring"],
      },
      {
        title: "Change & Release Governance",
        description: "Structured Change Advisory Board (CAB) workflows to assess risk, prevent conflicts, and eliminate change-induced outages.",
        features: ["Standard & emergency change paths", "Automated risk impact analysis", "Rollback plan validation", "Maintenance window scheduling"],
      },
      {
        title: "IT Asset Management (ITAM & CMDB)",
        description: "Complete lifecycle tracking of all hardware, software licenses, warranties, and virtual configuration items (CIs).",
        features: ["Automated network asset discovery", "Configuration Management Database (CMDB)", "Software license compliance tracking", "Warranty and depreciation tracking"],
      },
      {
        title: "Problem & Root Cause Analysis (RCA)",
        description: "Identifying underlying trends across recurring incidents to eliminate structural bugs and infrastructure failure loops.",
        features: ["Known error database (KEDB)", "Post-incident RCA reviews", "Proactive problem identification", "Trend telemetry analytics"],
      },
      {
        title: "Self-Service Portal & Knowledge Base",
        description: "Empowering employees with an intuitive portal to request equipment, software access, and find immediate solutions.",
        features: ["Automated workflow approvals", "Searchable self-help articles", "Role-based catalog visibility", "Interactive request tracking"],
      },
      {
        title: "ITSM Tooling & Platform Integration",
        description: "Architecture, customization, and maintenance of ServiceNow, Jira Service Management, and BMC Helix ecosystems.",
        features: ["ServiceNow workflow design", "Jira Service Management setup", "Monitoring tool webhook alerts", "Custom analytics dashboards"],
      },
    ],
    process: [
      { step: "01", title: "Map", description: "Mapping existing business workflows, escalation trees, and service delivery bottlenecks." },
      { step: "02", title: "Design", description: "Configuring ITIL v4 processes, service catalogs, SLA matrices, and approval chains." },
      { step: "03", title: "Automate", description: "Integrating discovery tools, CMDB databases, and automated triage triggers." },
      { step: "04", title: "Train", description: "Onboarding business staff and technical teams on self-service portals and ticket etiquette." },
      { step: "05", title: "Refine", description: "Continuous service improvement (CSI) analyzing ticket volume metrics and resolving root causes." },
    ],
    benefits: [
      "Drastic reduction in incident resolution times through automated triage and skill-based routing",
      "Zero unrecorded changes, eliminating configuration drift and accidental production outages",
      "Full visibility into IT asset inventory, software license compliance, and hardware lifecycles",
      "Delighted business users with an intuitive, Amazon-style IT self-service request portal",
      "Actionable management reporting on SLAs, technician throughput, and recurring problem trends",
    ],
    faqs: [
      {
        question: "What does Orbytes's IT Service Management (ITSM) cover?",
        answer: "Orbytes's ITSM services focus on delivering structured, ITIL-compliant IT operations: incident management, service request fulfillment, change management, problem resolution, IT asset management (ITAM/CMDB), and continuous service improvement.",
      },
      {
        question: "How does ITSM improve operational efficiency?",
        answer: "By replacing unstructured emails and ad-hoc requests with standardized workflows, automated approval routings, and self-service portals, repetitive tasks are automated and resolution times drop significantly.",
      },
      {
        question: "Can Orbytes integrate with our existing ITSM platform?",
        answer: "Yes, our team has deep expertise working within ServiceNow, Jira Service Management, BMC Helix, and Zendesk, as well as building customized ticketing integrations into your core business systems.",
      },
      {
        question: "What is the difference between an incident and a problem in ITSM?",
        answer: "An incident is an immediate disruption to service (e.g., an email server is down), while a problem investigates the root cause behind one or more incidents (e.g., a recurring memory leak causing the server crash) to permanently resolve it.",
      },
      {
        question: "How does ITSM help with regulatory compliance?",
        answer: "ITSM maintains an immutable audit trail of every change approved, every access request granted, and every incident resolved, fulfilling compliance requirements for ISO 27001, SOC 2, and HIPAA.",
      },
    ],
    relatedSolutions: [
      { title: "Managed IT Services (MSP)", slug: "managed-it" },
      { title: "IT Strategy & Consulting", slug: "consulting" },
      { title: "Managed Security Services (MSSP)", slug: "managed-security" },
    ],
  },

  "consulting": {
    slug: "consulting",
    title: "IT Strategy & Consulting",
    badge: "Governance, GRC & Technology Roadmaps",
    shortDescription: "Strategic roadmapping, Governance Risk & Compliance (GRC), technical debt assessment, and technology modernization.",
    heroHeadline: "IT Strategy & Consulting: Technology Aligned with Measurable Business Value",
    heroSubheadline: "Tackle complex technological transformations with certainty. We align IT investments with your organizational vision, reduce enterprise risks, guarantee compliance, and build actionable roadmaps for growth.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise executive technology strategy, risk governance, and digital roadmap planning session",
    problemStatement: "Technology is evolving faster than ever. Organizations struggle with accumulated technical debt, misaligned software expenditures, vague technology roadmaps, and expanding regulatory frameworks that threaten heavy fines for non-compliance.",
    solutionOverview: "Orbytes acts as your strategic Virtual CIO (vCIO) and technology advisory partner. We conduct comprehensive architectural assessments, formulate long-term technology roadmaps, and design rock-solid Governance, Risk & Compliance (GRC) frameworks tailored to your industry.",
    iconName: "Compass",
    capabilities: [
      {
        title: "IT Strategy & vCIO Advisory",
        description: "Executive-level technology leadership guiding capital allocation, technology selection, and digital alignment.",
        features: ["3-to-5 year technology roadmaps", "IT budget planning & ROI modeling", "Executive steering committee advisory", "Vendor evaluation & RFPs"],
      },
      {
        title: "Governance, Risk & Compliance (GRC)",
        description: "Mitigating corporate liability, implementing security controls, and maintaining adherence to international regulations.",
        features: ["Comprehensive compliance audits", "Risk register formulation", "Information security policy creation", "Third-party vendor risk scoring"],
      },
      {
        title: "Comprehensive IT Architecture Assessments",
        description: "Deep-dive analysis of your current network, server, cloud, and application topology to unearth hidden risks.",
        features: ["Technical debt evaluation", "Single-point-of-failure analysis", "Infrastructure performance benchmarking", "Actionable remediation scoring"],
      },
      {
        title: "Digital Transformation & Cloud Strategy",
        description: "Guiding organizations through the shift from legacy physical silos to agile, cloud-native operational models.",
        features: ["Application modernization planning", "Legacy decommission roadmaps", "Process automation discovery", "Cloud-readiness scoring"],
      },
      {
        title: "Business Continuity & Disaster Planning",
        description: "Comprehensive enterprise business continuity plans (BCP) ensuring institutional resilience during crises.",
        features: ["Business impact analysis (BIA)", "Crisis communication protocols", "RTO & RPO metric establishment", "Tabletop crisis simulation exercises"],
      },
      {
        title: "Mergers & Acquisitions (M&A) IT Due Diligence",
        description: "Evaluating the technology health, cybersecurity posture, and integration costs of target acquisition entities.",
        features: ["Pre-deal technical debt audit", "Cybersecurity liability assessment", "Systems consolidation roadmaps", "Post-merger integration planning"],
      },
    ],
    process: [
      { step: "01", title: "Discover", description: "Interviewing executive stakeholders and auditing current infrastructure, contracts, and software tools." },
      { step: "02", title: "Assess", description: "Benchmarking current operations against industry standards, regulatory mandates, and cybersecurity maturity." },
      { step: "03", title: "Strategize", description: "Formulating a prioritized technology transformation roadmap with quantified milestones and budgets." },
      { step: "04", title: "Govern", description: "Implementing compliance policies, risk registers, and operational KPIs." },
      { step: "05", title: "Review", description: "Periodic executive reviews to adapt the technology strategy as market opportunities evolve." },
    ],
    benefits: [
      "Ensure every dollar of IT expenditure directly advances business revenue, resilience, and efficiency",
      "Eliminate regulatory non-compliance penalties with verified GRC frameworks",
      "Uncover and systematically eliminate latent single points of failure across your technology stack",
      "Gain senior vCIO executive counsel without the multi-six-figure salary overhead of a full-time CIO",
      "Accelerate corporate agility with modern, scalable, cloud-first technology roadmaps",
    ],
    faqs: [
      {
        question: "What is included in Orbytes's IT Strategy & Consulting services?",
        answer: "Our consulting services include vCIO strategic guidance, technology roadmap design, comprehensive IT infrastructure assessments, Governance, Risk & Compliance (GRC) audits, and M&A technical due diligence.",
      },
      {
        question: "How does Orbytes help with regulatory compliance audits?",
        answer: "We conduct gap analyses against standards like ISO 27001, HIPAA, GDPR, and PCI-DSS, draft missing policy documentation, implement technical controls, and prepare your teams for successful third-party audits.",
      },
      {
        question: "What deliverables do we receive from an IT Assessment?",
        answer: "You receive an executive summary, an architectural vulnerability matrix, prioritized remediation recommendations categorized by business impact, and an estimated multi-year capital budget roadmap.",
      },
      {
        question: "Do we need to sign a multi-year contract for consulting?",
        answer: "No, we offer flexible engagements ranging from fixed-scope assessments and compliance sprints to ongoing monthly vCIO advisory retainers.",
      },
      {
        question: "How does a vCIO benefit mid-sized enterprises?",
        answer: "A vCIO provides the high-level strategic vision, vendor negotiation skills, and board-level reporting of a veteran enterprise CIO at a fraction of the cost of a full-time hire.",
      },
    ],
    relatedSolutions: [
      { title: "Managed Security Services (MSSP)", slug: "managed-security" },
      { title: "IT Service Management (ITSM)", slug: "itsm" },
      { title: "Cloud & Data Migration", slug: "cloud" },
    ],
  },

  "digital-solutions": {
    slug: "digital-solutions",
    title: "Digital Solutions & Integrations",
    badge: "Modern Web, Cloud Apps & Enterprise APIs",
    shortDescription: "Custom web development, cloud-integrated applications, secure API middleware, and transactional e-commerce platforms.",
    heroHeadline: "Custom Web Solutions & Enterprise Digital Applications",
    heroSubheadline: "Accelerate your business with secure, high-performance digital platforms. From modern web experiences to mission-critical cloud applications and robust API integrations, we engineer software that scales.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Software engineers architecting enterprise APIs and cloud microservices",
    problemStatement: "Off-the-shelf software often forces businesses into rigid, inefficient compromises. Disconnected legacy systems create data silos, slow manual re-entry, and poor user experiences that cause customers and employees to disengage.",
    solutionOverview: "Orbytes engineers bespoke digital products tailored precisely to your operational workflows. We build responsive, enterprise-grade web applications, secure cloud-native microservices, custom middleware APIs, and high-concurrency e-commerce architectures.",
    iconName: "Code2",
    capabilities: [
      {
        title: "Custom Web Applications",
        description: "Bespoke, lightning-fast web applications built on modern frameworks (React, Next.js, TypeScript) with enterprise security.",
        features: ["Responsive design across all devices", "Role-based authorization & SSO", "Micro-frontend architectures", "High Core Web Vitals performance"],
      },
      {
        title: "Cloud-Integrated Enterprise Apps",
        description: "Native cloud applications leveraging serverless compute, microservices, and managed databases on Azure or AWS.",
        features: ["Serverless event-driven backends", "Elastic auto-scaling", "Containerized Docker/K8s deployments", "Multi-region redundancy"],
      },
      {
        title: "API Development & System Middleware",
        description: "Connecting disparate ERPs, CRMs, billing systems, and third-party SaaS tools via secure, high-throughput APIs.",
        features: ["REST & GraphQL API design", "Webhook & event streaming pipelines", "Secure OAuth2 / JWT authentication", "Rate limiting & telemetry monitoring"],
      },
      {
        title: "E-commerce & Transactional Platforms",
        description: "High-conversion, secure digital storefronts and B2B ordering portals with payment gateway integrations.",
        features: ["PCI-compliant checkout flows", "Inventory ERP synchronization", "Dynamic pricing engines", "High-concurrency flash sale resilience"],
      },
      {
        title: "Legacy Application Modernization",
        description: "Refactoring aging desktop or legacy monolithic web applications into secure, modern cloud architectures.",
        features: ["Database schema modernization", "Monolith-to-microservice migration", "UI/UX overhaul", "Zero data loss cutover"],
      },
      {
        title: "Continuous Maintenance & DevOps CI/CD",
        description: "Automated test pipelines, blue-green deployments, and ongoing 24/7 application performance monitoring.",
        features: ["Automated testing & linting", "Zero-downtime deployment pipelines", "Real-time error tracking (Sentry)", "Performance SLA upkeep"],
      },
    ],
    process: [
      { step: "01", title: "Plan", description: "Requirements gathering, user journey mapping, and technical architecture specification." },
      { step: "02", title: "Design", description: "Interactive wireframes, design token systems, and responsive prototype validation." },
      { step: "03", title: "Build", description: "Clean, modular, typed code developed in rapid agile sprints with continuous feedback." },
      { step: "04", title: "Test", description: "Automated regression testing, load simulations, accessibility audits, and penetration testing." },
      { step: "05", title: "Launch", description: "Zero-downtime deployment, telemetry monitoring, and ongoing feature enhancements." },
    ],
    benefits: [
      "Custom software built around your exact commercial differentiators, not generic template constraints",
      "Seamless real-time data synchronization between your internal databases, ERPs, and customer portals",
      "Enterprise security baked into the software development lifecycle (DevSecOps) from day one",
      "Superb speed and responsiveness that delights users and drives higher conversion rates",
      "Clean, modular codebase that easily extends as your product roadmap evolves",
    ],
    faqs: [
      {
        question: "What digital development services does Orbytes provide?",
        answer: "We provide custom web application development, cloud-integrated applications, API development and system integration, transactional e-commerce platforms, and legacy application modernization.",
      },
      {
        question: "Which technology stack do you recommend?",
        answer: "We build modern, secure applications using Next.js, React, TypeScript, Node.js, Python, PostgreSQL, and cloud infrastructure on Microsoft Azure and AWS.",
      },
      {
        question: "How do you ensure application security and data privacy?",
        answer: "We follow OWASP Top 10 security standards, enforce TLS 1.3 encryption, implement role-based access control (RBAC), and conduct automated vulnerability scanning throughout the CI/CD pipeline.",
      },
      {
        question: "Can you connect our custom portal to our existing ERP or CRM?",
        answer: "Yes, API and middleware integration is one of our primary specialties. We regularly build bi-directional synchronizations between custom apps and Salesforce, SAP, Zoho, Microsoft Dynamics, and custom SQL databases.",
      },
      {
        question: "Do you provide post-launch support and maintenance?",
        answer: "Yes, we provide ongoing SLA-backed maintenance, security patch updates, server health monitoring, and iterative feature development retainers.",
      },
    ],
    relatedSolutions: [
      { title: "Cloud & Data Migration", slug: "cloud" },
      { title: "Managed Security Services (MSSP)", slug: "managed-security" },
      { title: "IT Strategy & Consulting", slug: "consulting" },
    ],
  },
};
