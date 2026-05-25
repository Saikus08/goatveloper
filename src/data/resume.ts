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
  href: string;
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
  role: "Software Engineer",
  location: "Montevideo, Uruguay",
  pdfAvailable: true,
  pdfUrl: "/resume/agustin-vignolo-resume.pdf",
  summary:
    "Holistic software engineer working across product development, quality engineering, backend systems, and technical delivery. I care about building reliable software, improving workflows, and learning in public through real work.",
  focusAreas: [
    "Holistic software engineering across product, quality, and delivery",
    "Backend systems, integrations, and platform architecture",
    "Testing, release confidence, and developer workflows",
    "Technical writing grounded in real implementation work",
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
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "Kamal",
    "AWS",
  ],
  experience: [
    {
      role: "Technical Lead",
      company: "URadar",
      period: "2025 — Current",
      highlights: [
        "Leading technical direction for an agentic social intelligence platform for workspace security.",
        "Working across multi-tenant architecture, collaboration-channel integrations, tenant-specific knowledge grounding, and AWS-based delivery.",
        "Driving architecture decisions, delivery practices, and operational hardening while the product evolves toward a real business.",
      ],
    },
    {
      role: "QA Engineer",
      company: "Advisor Engine",
      period: "Jan 2025 — Current",
      highlights: [
        "Work across automated and manual testing inside agile Scrum environments.",
        "Coordinate with developers, analysts, and DevOps to validate complex financial and data-heavy systems.",
        "Design regression coverage, validate backend data workflows such as Spark and PostgreSQL, and monitor Jenkins pipelines.",
      ],
    },
    {
      role: "Ruby on Rails Developer",
      company: "Seta Workshop",
      location: "Montevideo, Uruguay",
      period: "Sep 2022 — Dec 2024",
      highlights: [
        "Worked directly with clients, translating core needs into tailored product solutions.",
        "Modernized legacy Rails systems, shipped new features, and improved maintainability and scalability.",
        "Led a large upgrade from Rails 5 / Ruby 2.5 to Rails 7.1 / Ruby 3.3, improving performance and security posture.",
        "Introduced stronger Agile workflows and helped shorten delivery cycles across the team.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Ventia",
      location: "Montevideo, Uruguay",
      period: "Feb 2022 — Sep 2022",
      highlights: [
        "Improved existing software systems with new features and performance-focused changes.",
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
        "Bachelor’s degree project: a visual editing platform for non-technical teams working on headless e-commerce storefronts.",
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
        "An installable workflow kit for OpenCode repositories that standardizes agents, specs, context, and safety-first team workflows.",
      href: "/projects/opencode-workbench/",
    },
  ],
};
