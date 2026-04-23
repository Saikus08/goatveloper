type ResumeLink = {
  label: string;
  href: string;
};

type ResumeExperience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

type ResumeEducation = {
  title: string;
  institution: string;
  period: string;
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
  pdfAvailable: false,
  pdfUrl: "/resume/agustin-vignolo-sotelo-resume.pdf",
  summary:
    "Software engineer building a public record of practical learning through articles, projects, and technical decisions.",
  focusAreas: [
    "Web applications",
    "Backend fundamentals",
    "Readable technical writing",
    "Career growth through real projects",
  ],
  links: [],
  skills: [
    "TypeScript",
    "Astro",
    "Markdown",
    "Content modeling",
    "Static sites",
  ],
  experience: [],
  education: [],
  projects: [
    {
      name: "Goatveloper",
      description:
        "Personal engineering site for publishing articles, project case studies, and resume material.",
      href: "/projects/goatveloper/",
    },
  ],
};
