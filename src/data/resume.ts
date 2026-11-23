type ResumeLink = {
  label: string;
  href: string;
};

type ResumeExperience = {
  role: string;
  company: string;
  context?: string;
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

type ResumeSkillGroup = {
  label: string;
  items: string[];
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
  skills: ResumeSkillGroup[];
  languages: string[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
};

// Source of truth: ~/career/resume (resume/out/agustin-vignolo-resume.pdf).
// Keep titles, dates and numbers in sync with that file.
export const resume: Resume = {
  name: "Agustín Vignolo",
  role: "Backend & Data Engineer",
  location: "Montevideo, Uruguay (UTC-3)",
  pdfAvailable: true,
  pdfUrl: "/resume/agustin-vignolo-resume.pdf",
  summary:
    "Software engineer building backend and data-intensive systems for financial and multi-tenant platforms. 4+ years across Ruby on Rails, TypeScript and the JVM (Spring Boot, Spring Batch, Spark), focused on data correctness, batch pipelines and AWS deployment.",
  focusAreas: [
    "Data correctness in financial pipelines: reconciliation, invariants and data-quality checks",
    "Batch processing on the JVM with Spring Batch and Spark",
    "Multi-tenant SaaS backends on Rails, Node.js and PostgreSQL",
    "AWS deployment, CI/CD and automated test suites that catch failures early",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Saikus08",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/agustinvignolo/",
    },
    {
      label: "OpenCode Workbench on npm",
      href: "https://www.npmjs.com/package/@saikus08/opencode-workbench",
    },
    {
      label: "Docker Dev Containers article (Seta Workshop blog)",
      href: "https://setaworkshop.com/blog/docker-for-rails-mongodb",
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["Ruby", "TypeScript", "JavaScript", "Python", "Java", "Groovy", "SQL"],
    },
    {
      label: "Backend and data",
      items: [
        "Ruby on Rails",
        "Node.js/Express",
        "Spring Boot",
        "Spring Batch",
        "Apache Spark",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "Sidekiq",
        "BullMQ",
        "RabbitMQ",
      ],
    },
    {
      label: "Cloud and DevOps",
      items: ["AWS", "Jenkins", "GitHub Actions", "Docker"],
    },
    {
      label: "AI",
      items: ["LangGraph", "RAG", "Tool calling", "Guardrails", "Evals"],
    },
    {
      label: "Testing",
      items: ["RSpec", "Jest", "Playwright", "TestContainers", "TestRail"],
    },
  ],
  languages: ["Spanish (native)", "English (C1)"],
  experience: [
    {
      role: "Software Engineer, Automation & Development",
      company: "Advisor Engine",
      context:
        "Remote wealth-management platform (teams in the US, Ukraine and Romania) serving large US custodians, broker-dealers and asset managers",
      period: "Dec 2024 — Dec 2026",
      highlights: [
        "Built a Jenkins orchestration pipeline (Groovy) that runs, after each custodian daily load, a validation job (position reconciliation, impossible and unmapped transactions, negative cash margin) and a diagnostic job, across all custodian jobs.",
        "Created the CI pipeline for the auto data cleanup batch (91 tests previously without CI), catching ~17 failures early in the delivery cycle.",
        "Fixed a billing staging defect by replacing a duplicated Scala linker with a shared manager in a Spring Batch step (integration-tested with DB fixtures); wrote a spark-submit runner to run the job on staging by date, firm and flags.",
        "Designed a read-only data-quality monitor (SQL, Python) enforcing 18 invariants across custodian, sleeve, transaction, position and cash/cash-equivalent layers; results exported to CSV for AI-assisted analysis, which surfaced 10 defects filed under one epic.",
        "Built a TypeScript CLI harness for the shift-left initiative that turns sprint tickets into impact analysis, coverage-gap reports and TestRail cases linked to automation, cutting preparation per ticket from ~90 to ~30 minutes.",
        "Wrote and maintained automated suites (Java, Groovy, Spring, PostgreSQL) covering batch, billing and performance flows.",
      ],
    },
    {
      role: "Technical Lead",
      company: "URadar",
      context: "AI-driven cybersecurity training product",
      period: "Aug 2025 — Sep 2026",
      highlights: [
        "Led architecture of a multi-tenant TypeScript/Express platform (RBAC, Cognito) with a team of developers.",
        "Built 7 LangGraph agents with a Postgres checkpointer and a RAG pipeline (pgvector, PDF/DOCX ingestion, S3).",
        "Designed the AWS deployment (EC2, RDS, ALB, S3, SES) and GitHub Actions CI/CD with OIDC.",
      ],
    },
    {
      role: "Software Engineer, Ruby on Rails",
      company: "Seta Workshop",
      context:
        "Multi-tenant workforce-management platform for construction companies",
      location: "Montevideo, Uruguay",
      period: "Sep 2022 — Dec 2024",
      highlights: [
        "Owned backend and frontend of a platform with 120+ models and 50+ API controllers, with schema-per-tenant isolation (Apartment).",
        "Upgraded the application from Rails 5 / Ruby 2.5 to Rails 7.1 / Ruby 3.3, refactoring legacy code.",
        "Built scheduled Sidekiq jobs that generate xlsx reports of employee-hours performance and email them to administrators.",
        "Wrote the report query in raw SQL instead of ActiveRecord for performance: pre-aggregated JSON subqueries avoid row fan-out, polymorphic joins resolve hour concepts and activities, and spreadsheet columns are generated dynamically.",
        "Applied Ruby metaprogramming (ActiveSupport::Concern, define_method, constantize) in a content API to build a reusable CRUD controller concern deriving model, serializer and nested strong parameters from the controller name.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Ventia",
      location: "Montevideo, Uruguay",
      period: "Feb 2022 — Sep 2022",
      highlights: [
        "Supported feature work and testing on Node.js and MongoDB applications.",
      ],
    },
  ],
  education: [
    {
      title: "BSc Computer Systems Engineering",
      institution: "ORT University, Montevideo",
      period: "Dec 2026",
      details: [
        "Coursework across databases, algorithms, software engineering, networking, infrastructure, statistics and big data.",
        "Degree project: Kustomizer, a visual page editor for headless Shopify storefronts.",
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
      name: "Sistaller",
      description:
        "Multi-tenant SaaS for automotive workshops (Rails 8.1 API, React, PostgreSQL). In production for 3 months at a workshop that moved from handwritten records to exact margins per customer, vehicle and order.",
      href: "/projects/sistaller/",
    },
    {
      name: "MercaNova",
      description:
        "AI shopping assistant (Python, pgvector, Ollama). Led a 2-person team: hybrid semantic/SQL search, agent loop with 11 guardrails, 20-case evaluation harness, 409+ tests.",
      href: "/projects/mercanova/",
    },
    {
      name: "Kustomizer",
      description:
        "Degree project: visual page editor for headless Shopify storefronts with a component registry and optimistic-locking publish flow (Angular SSR, Remix, Supabase).",
      href: "/projects/kustomizer/",
    },
    {
      name: "OpenCode Workbench",
      description:
        "Published TypeScript CLI that standardizes agents, specs, context and validation harnesses for AI-assisted development in OpenCode repositories.",
      href: "/projects/opencode-workbench/",
    },
  ],
};
