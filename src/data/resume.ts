type ResumeLink = {
  label: string;
  href: string;
};

type ResumeExperience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
};

type ResumeEducation = {
  title: string;
  institution: string;
  period: string;
  details: string[];
};

type ResumeProject = {
  name: string;
  description: string;
  href?: string;
};

type Resume = {
  name: string;
  role: string;
  location: string;
  pdfAvailable: boolean;
  pdfUrl: string;
  summary: string;
  focusAreas: string[];
  links: ResumeLink[];
  skills: string[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
};

export const resume: Resume = {
  name: "Agustin Vignolo Sotelo",
  role: "Backend & Full-Stack Software Engineer",
  location: "Montevideo, Uruguay",
  pdfAvailable: true,
  pdfUrl: "/resume/agustin-vignolo-resume.pdf",
  summary:
    "Backend and full-stack engineer with QA instincts and product ownership. I build Rails, Node.js, TypeScript, and PostgreSQL systems where authorization, data integrity, integrations, and delivery confidence matter: multi-tenant SaaS, agentic security workflows, e-commerce tooling, and automation platforms.",
  focusAreas: [
    "Backend and full-stack product engineering for SaaS and internal platforms",
    "Multi-tenant authorization, data integrity, and secure-by-default workflows",
    "Rails, Node.js, TypeScript, PostgreSQL, React, Angular, and Shopify integrations",
    "Test strategy, CI/CD, developer tooling, and AI-assisted engineering workflows",
  ],
  links: [
    {
      label: "Docker Dev Containers article",
      href: "https://setaworkshop.com/blog/docker-for-rails-mongodb",
    },
    {
      label: "OpenCode Workbench on npm",
      href: "https://www.npmjs.com/package/@saikus08/opencode-workbench",
    },
  ],
  skills: [
    "Ruby",
    "Ruby on Rails",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Angular",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Supabase",
    "Redis",
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "Playwright",
    "RSpec",
    "Vitest",
    "Kamal",
    "AWS",
    "Shopify",
  ],
  experience: [
    {
      role: "Technical Lead",
      company: "URadar",
      period: "2025 — Current",
      highlights: [
        "Leading technical direction for a multi-tenant, agentic workspace-security platform built around real collaboration behavior.",
        "Working across tenant isolation, RBAC, RAG over tenant-specific knowledge, collaboration-channel/email integrations, and AWS-based delivery concerns.",
        "Driving architecture decisions, delivery practices, and operational hardening while the product evolves from implementation work into a real business.",
      ],
    },
    {
      role: "QA Engineer",
      company: "Advisor Engine",
      period: "Jan 2025 — Current",
      highlights: [
        "Work across automated and manual testing in agile Scrum environments for complex financial and data-heavy systems.",
        "Coordinate with developers, analysts, and DevOps to validate backend workflows, database behavior, and release readiness.",
        "Design regression coverage, validate Spark/PostgreSQL data workflows, and monitor Jenkins pipelines to protect delivery confidence.",
      ],
    },
    {
      role: "Ruby on Rails Developer",
      company: "Seta Workshop",
      location: "Montevideo, Uruguay",
      period: "Sep 2022 — Dec 2024",
      highlights: [
        "Worked directly with clients to translate ambiguous business needs into maintainable Rails product work.",
        "Shipped Rails API/admin work across compliance, reporting, document/export workflows, and content-platform backends.",
        "Modernized legacy Rails systems, shipped new features, and improved backend maintainability, performance, and scalability.",
        "Led a major upgrade from Rails 5 / Ruby 2.5 to Rails 7.1 / Ruby 3.3, reducing technical debt and improving security posture.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Ventia",
      location: "Montevideo, Uruguay",
      period: "Feb 2022 — Sep 2022",
      highlights: [
        "Improved existing software systems with new features and performance-focused changes across backend and frontend surfaces.",
        "Worked across backend and frontend development with Node.js and MongoDB.",
        "Supported manual, regression, and UAT testing across browsers and devices, documenting issues in Jira and collaborating closely with developers.",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor’s Degree in Computer Systems Engineering",
      institution: "ORT University, Montevideo",
      period: "Expected 2026",
      details: [
        "Coursework across databases, algorithms, software engineering, networking, infrastructure, statistics, big data, communication, and entrepreneurship.",
        "Current academic path includes database systems, software engineering foundations and agile practices, infrastructure, programming networks, and data-focused tooling.",
      ],
    },
    {
      title: "IT Technician",
      institution: "ESI Buceo IT High School, Montevideo",
      period: "2020",
      details: [
        "Technical secondary education focused on software and IT fundamentals.",
      ],
    },
  ],
  projects: [
    {
      name: "Kustomizer",
      description:
        "Bachelor’s degree project: an Angular visual editor plus Shopify embedded-app backend for non-technical teams working on headless e-commerce storefronts.",
      href: "/projects/kustomizer/",
    },
    {
      name: "URadar",
      description:
        "An agentic social intelligence platform for workspace security, built around collaboration-channel behavior, contextual intervention, and multi-tenant operations.",
      href: "/projects/uradar/",
    },
    {
      name: "OpenCode Workbench",
      description:
        "A published TypeScript CLI and workflow kit for OpenCode repositories, standardizing agents, specs, context, repo audits, validation harnesses, and safer AI-assisted development.",
      href: "/projects/opencode-workbench/",
    },
    {
      name: "Sistema Taller / Sistema Taller v2",
      description:
        "Workshop-management product rebuilt from a Next.js/Supabase/RLS foundation into a Rails API + React architecture with tenant-aware services, policies, tests, and CI gates.",
    },
    {
      name: "Vimeo Transcriber",
      description:
        "A Python automation pipeline using Playwright, ffmpeg, and Whisper to detect class videos, download audio, transcribe in chunks, checkpoint progress, and avoid reprocessing.",
    },
  ],
};
