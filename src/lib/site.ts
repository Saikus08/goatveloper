export const site = {
  name: "Goatveloper",
  author: "Agustin Vignolo",
  role: "Software Engineer",
  url: import.meta.env.SITE_URL ?? "https://goatveloper.dev",
  description:
    "Articles, projects, and career notes from a software engineer learning in public.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/articles/", label: "Articles" },
    { href: "/projects/", label: "Projects" },
    { href: "/about/", label: "About" },
    { href: "/resume/", label: "Resume" },
  ],
} as const;
