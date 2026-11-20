// Solutions & Technologies catalogue shown on /security-technologies/.
// Source: "Cybersecurity Solutions and Product List" (internal sheet, Nov 2026),
// rewritten for the website. Vendor/OEM names are intentionally not listed here:
// add them only once partnerships are confirmed for public use.

export type Technology = {
  code: string;
  name: string;
  what: string;
  example: string;
};

export type Domain = {
  id: string;
  title: string;
  /** Matches the capability title on /solutions/ so the two pages link up. */
  capability: string;
  summary: string;
  icon: "network" | "cloud" | "identity" | "endpoint" | "data" | "operations";
  items: Technology[];
};

export const domains: Domain[] = [
  {
    id: "network-security",
    title: "Network Security",
    capability: "Network Security",
    summary: "Control what enters, leaves and moves across the network — and which devices are allowed onto it.",
    icon: "network",
    items: [
      {
        code: "NGFW",
        name: "Next-Generation Firewall",
        what: "Inspects all traffic in and out of the network, identifying applications, users and malicious content, not just IP addresses and ports. The first line of defence at every site and cloud edge.",
        example: "A connection attempt from an unknown overseas host targeting the office network is blocked automatically.",
      },
      {
        code: "IDS",
        name: "Intrusion Detection System",
        what: "Monitors network traffic for attack patterns and suspicious behaviour and raises an alert for the security team. Today it is often a capability inside the firewall.",
        example: "Repeated password-guessing against a server triggers an immediate alert to the IT team.",
      },
      {
        code: "IPS",
        name: "Intrusion Prevention System",
        what: "Sits in the traffic path and blocks malicious traffic before it reaches systems, stopping exploit attempts rather than only reporting them.",
        example: "An attempt to exploit a known software vulnerability is dropped before it reaches the application.",
      },
      {
        code: "NAC",
        name: "Network Access Control",
        what: "Checks every device before it joins the network. Only known, compliant and healthy devices get access; unknown or infected devices are blocked or isolated.",
        example: "A visitor plugs an unmanaged laptop into an office port and is denied network access.",
      },
      {
        code: "SWG",
        name: "Secure Web Gateway",
        what: "Protects users as they browse, blocking malicious sites, unsafe downloads and policy-violating content wherever the user is working from.",
        example: "An employee clicks a phishing link and the gateway blocks the site before the page loads.",
      },
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud & Email Security",
    capability: "Cloud Security",
    summary: "Secure workloads, data and SaaS applications across AWS, Azure and Google Cloud — and the inbox, the most common way in.",
    icon: "cloud",
    items: [
      {
        code: "CNAPP",
        name: "Cloud Security Platform",
        what: "Protects cloud workloads, data and configurations with posture management, workload protection, entitlement control and continuous monitoring in one place.",
        example: "A storage bucket left open to the internet is detected and flagged for remediation within minutes.",
      },
      {
        code: "CASB",
        name: "Cloud Access Security Broker",
        what: "Gives visibility and control over SaaS applications such as Microsoft 365, Google Workspace and Salesforce, enforcing data and usage policies between users and the cloud.",
        example: "An upload of confidential files to an unapproved personal cloud drive is blocked.",
      },
      {
        code: "ESG",
        name: "Email Security",
        what: "Filters phishing, malicious attachments, dangerous links and impersonation attempts before they reach employees — a primary defence against ransomware.",
        example: "A spoofed 'bank' email is quarantined before it lands in the user's inbox.",
      },
    ],
  },
  {
    id: "identity-access",
    title: "Identity & Access",
    capability: "Identity & Access",
    summary: "Make identity the new perimeter: the right people, with the right access, for the right length of time.",
    icon: "identity",
    items: [
      {
        code: "IAM",
        name: "Identity & Access Management",
        what: "Centralises user identities, sign-in and role-based permissions so people reach only the applications and data their job requires.",
        example: "A finance user cannot open HR payroll records because their role does not allow it.",
      },
      {
        code: "MFA",
        name: "Multi-Factor Authentication",
        what: "Adds a second proof of identity — app approval, OTP, biometric or hardware key — so a stolen password alone is not enough to get in.",
        example: "A login with a correct password still requires approval on the user's registered phone.",
      },
      {
        code: "PAM",
        name: "Privileged Access Management",
        what: "Vaults administrator credentials, grants privileged access just-in-time and records every privileged session, reducing insider and credential-theft risk.",
        example: "An administrator checks out a server password for one hour; every command is recorded.",
      },
      {
        code: "IGA",
        name: "Identity Governance & Administration",
        what: "Automates joiner, mover and leaver access and runs periodic access reviews so permissions do not accumulate over time.",
        example: "When an employee moves from HR to Sales, their HR system access is removed automatically.",
      },
    ],
  },
  {
    id: "endpoint-security",
    title: "Endpoint & Workplace Security",
    capability: "Endpoint & Workplace Security",
    summary: "Protect every laptop, desktop and server — and see the full attack story when something gets through.",
    icon: "endpoint",
    items: [
      {
        code: "AV / EPP",
        name: "Antivirus & Endpoint Protection",
        what: "Scans files and processes to stop known malware, viruses and ransomware before they run. The baseline control for every device.",
        example: "An infected PDF attachment is detected and removed before it can open.",
      },
      {
        code: "EDR",
        name: "Endpoint Detection & Response",
        what: "Continuously records endpoint behaviour to detect attacks that signatures miss, isolates compromised devices in seconds and gives analysts the evidence to investigate.",
        example: "Ransomware starts encrypting files; the laptop is cut off from the network within seconds.",
      },
      {
        code: "XDR",
        name: "Extended Detection & Response",
        what: "Correlates signals from endpoints, identities, email, cloud and network into a single incident, so analysts see one attack story instead of many disconnected alerts.",
        example: "A phishing email, an infected laptop and an attempt on a server are linked into one high-priority incident.",
      },
      {
        code: "PATCH",
        name: "Patch Management",
        what: "Discovers missing updates and deploys security patches across operating systems and applications on a controlled schedule, closing known weaknesses fast.",
        example: "A critical operating-system update is rolled out to every company device within the patch window.",
      },
    ],
  },
  {
    id: "data-application-security",
    title: "Data & Application Security",
    capability: "Data & Application Security",
    summary: "Protect sensitive data and the applications and APIs that use it — and make sure you can always recover.",
    icon: "data",
    items: [
      {
        code: "DLP",
        name: "Data Loss Prevention",
        what: "Discovers sensitive data and stops it leaving the organisation through email, web uploads, cloud apps or removable media, whether by accident or intent.",
        example: "An email containing customer card data addressed to an external recipient is blocked.",
      },
      {
        code: "AppSec",
        name: "Application Security Testing",
        what: "Builds security into the software lifecycle with code, dependency and runtime testing (SAST, SCA and DAST), so flaws are fixed before release.",
        example: "An online banking application is tested and its security flaws fixed before customers use it.",
      },
      {
        code: "API",
        name: "API Security",
        what: "Discovers APIs, enforces authentication and detects abuse of the interfaces that connect applications, partners and mobile apps.",
        example: "A mobile app's calls to the bank's servers are protected from scraping and account-takeover abuse.",
      },
      {
        code: "WAF",
        name: "Web Application Firewall",
        what: "Filters malicious requests in front of websites and web applications, blocking attacks such as SQL injection and cross-site scripting.",
        example: "A malicious code-injection request against an online store is blocked before it reaches the site.",
      },
      {
        code: "BDR",
        name: "Backup & Disaster Recovery",
        what: "Keeps protected, recoverable copies of critical data and systems and restores operations quickly after an outage or ransomware attack — the last line of defence.",
        example: "After ransomware encrypts file servers, the business restores clean data from backup within hours.",
      },
    ],
  },
  {
    id: "security-operations",
    title: "Security Operations",
    capability: "Security Operations",
    summary: "See, prioritise and respond to threats across the whole environment, around the clock.",
    icon: "operations",
    items: [
      {
        code: "SIEM",
        name: "Security Information & Event Management",
        what: "Collects and correlates logs from firewalls, servers, applications, cloud and endpoints to detect suspicious patterns and support fast investigation.",
        example: "A user signing in from India and from another country five minutes later is flagged as impossible travel.",
      },
      {
        code: "SOAR",
        name: "Security Orchestration, Automation & Response",
        what: "Runs response playbooks automatically — enriching alerts, containing threats and opening tickets — cutting response time from hours to minutes.",
        example: "A detected phishing email is pulled from every inbox, the device isolated and a ticket raised automatically.",
      },
      {
        code: "VM",
        name: "Vulnerability Management",
        what: "Continuously scans systems for weaknesses, prioritises them by real-world risk and tracks remediation so the most dangerous gaps are closed first.",
        example: "A scan finds internet-facing servers missing a critical security update and escalates them for patching.",
      },
    ],
  },
];

export const technologyCount = domains.reduce((n, d) => n + d.items.length, 0);

/** Strategy and operating models — not single products. */
export const operatingModels = [
  {
    code: "ZERO TRUST",
    name: "Zero Trust Security",
    what: "An architecture, not a product: never trust, always verify. Every user and device continuously proves it is authorised, wherever it connects from, using identity, device, network and data controls working together.",
    example: "An employee in the office still passes MFA and a device-health check before opening a sensitive application.",
  },
  {
    code: "SOC",
    name: "Security Operations Center",
    what: "A team of security analysts monitoring, investigating and responding to threats 24×7, using SIEM, EDR/XDR and SOAR. Built in-house, outsourced, or delivered as a managed service.",
    example: "Unusual login attempts at midnight are investigated and contained before business hours.",
  },
];

/** Ten foundational controls for an enterprise cloud security portfolio. */
export const cloudFoundations = [
  { code: "CSPM", name: "Cloud Security Posture Management", note: "Finds misconfigurations, open ports and excessive permissions." },
  { code: "CNAPP", name: "Cloud-Native Application Protection", note: "Unifies posture, workload, identity and Kubernetes security." },
  { code: "CWPP", name: "Cloud Workload Protection", note: "Protects VMs, containers and Kubernetes at runtime." },
  { code: "CASB", name: "Cloud Access Security Broker", note: "Visibility and control for SaaS applications." },
  { code: "CIEM", name: "Cloud Infrastructure Entitlement Management", note: "Detects users and services with excessive cloud permissions." },
  { code: "IAM + MFA", name: "Cloud Identity & Strong Authentication", note: "Controls who can reach cloud resources, and proves it." },
  { code: "WAF + API", name: "Cloud WAF & API Security", note: "Protects internet-facing apps and APIs." },
  { code: "ZTNA · SASE · SSE", name: "Secure Access Edge", note: "Application access without traditional VPNs, delivered from the cloud." },
  { code: "SIEM · SOAR · XDR", name: "Cloud Detection & Response", note: "Detects, correlates and automates response to cloud threats." },
  { code: "BDR", name: "Cloud Backup & Disaster Recovery", note: "Restores cloud workloads and data after an incident." },
];

/** How the wider cloud security portfolio is organised. */
export const cloudCoverage = [
  { group: "Identity", items: ["IAM", "MFA", "PAM", "CIEM"] },
  { group: "Data", items: ["DLP", "DSPM", "Encryption", "KMS / HSM", "Secrets management"] },
  { group: "Workloads", items: ["CWPP", "Containers", "Kubernetes", "Serverless", "Runtime protection"] },
  { group: "Applications", items: ["WAF", "API security", "RASP", "DevSecOps", "Supply chain"] },
  { group: "Network", items: ["FWaaS", "ZTNA", "SASE", "SSE", "SWG", "DNS security"] },
  { group: "Posture & Compliance", items: ["CSPM", "Vulnerability management", "Compliance", "CNAPP"] },
  { group: "Detection & Response", items: ["SIEM", "SOAR", "XDR", "CDR", "Monitoring"] },
];

/** Application security testing — complementary techniques across the lifecycle. */
export const appSecTesting = [
  {
    code: "SAST",
    name: "Static Application Security Testing",
    when: "While code is written",
    what: "Analyses source code and binaries without running them, catching insecure coding practices early — like proofreading a book before it is printed.",
    example: "Passwords stored in plain text are flagged before the release is built.",
  },
  {
    code: "SCA",
    name: "Software Composition Analysis",
    when: "Whenever dependencies change",
    what: "Inventories every open-source library and third-party component and flags known-vulnerable or outdated versions.",
    example: "An outdated Log4j library with a critical vulnerability is detected and an upgrade recommended.",
  },
  {
    code: "DAST",
    name: "Dynamic Application Security Testing",
    when: "Once the application is running",
    what: "Tests the live application from the outside, the way an attacker would, to find issues such as SQL injection and cross-site scripting.",
    example: "A login form that accepts malicious SQL commands is identified on the test environment.",
  },
];

/** Endpoint detection coverage, organised by attack stage. */
export const detectionStages = [
  { stage: "Execution & script abuse", examples: ["Encoded PowerShell commands", "Office apps spawning shells", "Suspicious script hosts"] },
  { stage: "Malware & payloads", examples: ["Fileless and in-memory malware", "Process injection", "Executables launched from temp folders"] },
  { stage: "Process anomalies", examples: ["Unusual parent–child chains", "Process masquerading", "Unsigned processes in odd locations"] },
  { stage: "Credential theft", examples: ["Credential dumping", "Kerberos ticket abuse", "Browser credential theft"] },
  { stage: "Persistence", examples: ["Run keys and scheduled tasks", "New services and accounts", "DLL hijacking"] },
  { stage: "Privilege escalation", examples: ["UAC bypass", "Vulnerable driver abuse", "Token impersonation"] },
  { stage: "Defense evasion", examples: ["Security tool tampering", "Log clearing", "Obfuscated commands"] },
  { stage: "Discovery", examples: ["User and group enumeration", "Domain controller discovery", "Network share scanning"] },
  { stage: "Lateral movement", examples: ["Pass-the-hash / ticket", "Remote PowerShell and PsExec", "RDP from unusual endpoints"] },
  { stage: "Command & control", examples: ["Beaconing", "DNS tunnelling", "Newly registered domains"] },
  { stage: "Data collection", examples: ["Mass file access", "Archive creation", "Staging before exfiltration"] },
  { stage: "Exfiltration", examples: ["Large outbound transfers", "Uploads to file-sharing sites", "Copies to USB media"] },
  { stage: "Ransomware", examples: ["Rapid file encryption", "Shadow copy and backup deletion", "Ransom note creation"] },
  { stage: "Living-off-the-land", examples: ["Abuse of built-in admin tools", "Certutil and BITSAdmin downloads", "WMI and MSHTA abuse"] },
];

/** Example attack chain used to explain correlation. */
export const attackChain = ["Outlook", "PowerShell", "Encoded command", "Outbound connection", "Download", "Execute"];
