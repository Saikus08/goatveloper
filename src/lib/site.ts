export const site = {
  name: "Goatveloper",
  author: "Agustín Vignolo",
  role: "Backend & Data Engineer",
  url: import.meta.env.SITE_URL ?? "https://goatveloper.dev",
  description:
    "Agustín Vignolo, backend and data engineer in Montevideo. Building data-intensive systems where correctness matters, and writing about what I learn along the way.",
  contact: {
    email: "agustinvignolosotelo@gmail.com",
    linkedin: "https://www.linkedin.com/in/agustinvignolo/",
    github: "https://github.com/Saikus08",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/articles/", label: "Writing" },
    { href: "/projects/", label: "Projects" },
    { href: "/about/", label: "About" },
    { href: "/resume/", label: "Resume" },
  ],
} as const;
