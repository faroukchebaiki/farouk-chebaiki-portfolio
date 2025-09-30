export type RawProject = {
  title: string;
  description: string;
  tech: string; // comma-separated list for easy editing
  image: string;
  repo?: string;
  live?: string;
  featured?: boolean;
  long?: string;
  highlights?: string[];
  pages?: string[];
};

export type SiteConfig = {
  siteUrl?: string; // canonical site URL
  brandName: string; // used as logo text
  logoImage?: string; // optional path if using an image logo
  email: string;
  social: {
    github?: string;
    twitter?: string; // X
    linkedin?: string;
  };
  repository?: string; // this portfolio repo
  devtoUsername?: string; // DEV.to username for blog integration
  githubUsername?: string; // GitHub username for contributions
  hero?: {
    heading: string;
    subheading: string;
    profileImage?: string;
  };
  contactCta?: {
    availability: string;
    title: string;
    description: string;
    primary: { href: string; label: string };
    secondary: { href: string; label: string };
  };
  about?: {
    heroGreeting: string;
    heroTagline: string;
    intro: string[];
    whatIDo: Array<{ title: string; body: string }>;
    stack: Array<{ name: string; img: string }>;
    background: Array<{
      title: string;
      period: string;
      description: string;
      bullets?: string[];
    }>;
  };
  projects: RawProject[];
};

export const siteConfig: SiteConfig = {
  siteUrl: "https://www.farouk.uk",
  brandName: "Farouk Chebaiki",
  logoImage: undefined,
  email: "me@farouk.uk",
  social: {
    github: "https://github.com/faroukchebaiki",
    twitter: "https://x.com/faroukchebaiki",
    linkedin: "https://www.linkedin.com/in/faroukchebaiki/",
  },
  repository: "https://github.com/faroukchebaiki/farouk-chebaiki-portfolio",
  devtoUsername: "karadza",
  githubUsername: "faroukchebaiki",
  hero: {
    heading:
      "Farouk Chebaiki — Full-Stack Dev focused on building user-friendly web applications.",
    subheading: "hi there ,i'm",
    profileImage: "/profile.png",
  },
  contactCta: {
    availability: "Available for freelance or roles",
    title: "Let’s build something.",
    description:
      "I’m available for select freelance projects or a full‑time position. If you’re hiring or need help shipping a product, I’d love to chat.",
    primary: { href: "/contact", label: "Contact me" },
    secondary: { href: "/projects", label: "See Projects" },
  },
  about: {
    heroGreeting: "👋 Hi, I’m Farouk Chebaiki",
    heroTagline: "🚀 Full Stack Developer · Security & DevOps Enthusiast",
    intro: [
      "I’m a Full Stack Developer passionate about building scalable, secure, and high‑performance web applications. I blend intuitive frontend experiences with robust backend systems — always guided by efficiency, security, and maintainability.",
      "With a focus on clean architecture and modern tech, I bring ideas to life with Next.js, React, Tailwind CSS, Node.js, and tRPC — while ensuring reliability with Express, PostgreSQL, MongoDB, Redis, and Firebase.",
    ],
    whatIDo: [
      {
        title: "Frontend Development →",
        body: "Seamless UIs with Next.js, React, Tailwind CSS, and MUI — accessible, fast, and polished.",
      },
      {
        title: "Backend Engineering →",
        body: "Secure APIs and scalable systems with Node.js, Express, and tRPC — optimized for reliability and speed.",
      },
      {
        title: "DevOps & Security →",
        body: "Hardened infrastructures using Docker, Podman, Ubuntu Server, and Nginx — with automation at the core.",
      },
      {
        title: "Scalable Deployments →",
        body: "Performance‑driven pipelines with Cloudflare, Payload CMS, and containerization strategies.",
      },
    ],
    stack: [
      { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript" },
      { name: "React", img: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "shadcn/ui", img: "https://cdn.simpleicons.org/shadcnui" },
      { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", img: "https://cdn.simpleicons.org/express" },
      { name: "tRPC", img: "https://cdn.simpleicons.org/trpc" },
      { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql" },
      { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb" },
      { name: "Redis", img: "https://cdn.simpleicons.org/redis" },
      { name: "Firebase", img: "https://cdn.simpleicons.org/firebase" },
      { name: "Docker", img: "https://cdn.simpleicons.org/docker" },
      { name: "Podman", img: "https://cdn.simpleicons.org/podman" },
      { name: "Linux", img: "https://cdn.simpleicons.org/linux" },
      { name: "Nginx", img: "https://cdn.simpleicons.org/nginx" },
      { name: "Git", img: "https://cdn.simpleicons.org/git" },
    ],
    background: [
      {
        title: "Web Development Journey",
        period: "2022 – Present",
        description:
          "Transitioned into software development through online bootcamps and self‑learning. Zero To Mastery Academy (ZTM) courses with System Design, Security, and DevOps focus.",
        bullets: [
          "Full Stack Web Development (Next.js, React, Node.js, Express)",
          "System Design, Security, and DevOps fundamentals",
          "Projects‑driven learning with real‑world practices",
          "Selected projects: E‑Commerce (Next.js + MongoDB), Crypto Payment API (Express + PostgreSQL), Task Manager (React + Redis), Portfolio (Next.js + Tailwind)",
        ],
      },
      {
        title: "Military Service",
        period: "2023",
        description:
          "Algerian National Service — resilience, teamwork, adaptability, and discipline.",
      },
      {
        title: "Master’s in Process Engineering of Materials",
        period: "2020 – 2022",
        description:
          "University of Saida — efficiency, optimization, and scalability applied to software architecture.",
      },
      {
        title: "Bachelor’s in Process Engineering",
        period: "2017 – 2020",
        description:
          "University of Saida — strong analytical and problem‑solving skills.",
      },
      {
        title: "High School Graduation (Science stream)",
        period: "2018",
        description:
          "Saida, Algeria — foundation in math, physics, and problem‑solving.",
      },
    ],
  },
  projects: [
    {
      title: "VisoNext",
      description:
        "Next.js site with responsive UI, SEO, and fast performance.",
      tech: "Next.js, React, Tailwind, shadcn/ui",
      image: "/images/projects/visonext.png",
      repo: "https://github.com/faroukchebaiki/VisoNext",
      live: "https://visonext.farouk.uk/",
      featured: true,
      long: "A multi-page Next.js website with a modern, responsive UI/UX, high performance, SEO, accessibility, and interactive components.",
      highlights: [
        "Fully responsive across desktop, tablet and mobile",
        "Modern UI/UX with clean design system",
        "High performance with optimized assets",
        "SEO-optimized metadata and structure",
        "Accessibility-friendly semantics and ARIA",
        "Interactive components: tabs, forms, smooth interactions",
      ],
      pages: [
        "Home: hero, features, services preview, testimonials, stats",
        "About: mission/values, team, timeline, call-to-action",
        "Services: tabbed categories, details, pricing, FAQs, inquiry form",
        "Contact: validated form, contact details, map, business hours",
      ],
    },
    {
      title: "REnova",
      description: "Expert design and build services for residential projects.",
      tech: "Next.js, Tailwind CSS",
      image: "/images/projects/renova.png",
      repo: "https://github.com/faroukchebaiki/Renova",
      live: "https://renova.farouk.uk/",
      long: "A modern website for a home renovation and design company with gallery, contact, and SEO-optimized responsive pages.",
      highlights: [
        "Modern UI tailored for renovation services",
        "Project gallery to showcase past work",
        "Contact form for inquiries",
        "SEO-optimized pages",
        "Fully responsive and mobile-friendly",
      ],
    },
    {
      title: "AI Resume Generator",
      description: "An AI-powered tool to generate professional resumes.",
      tech: "Next.js, OpenAI API, TailwindCSS",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/ai-resume-generator",
      // live omitted to avoid broken link in production
    },
    {
      title: "Distributed Cloud Storage",
      description: "A secure, post-quantum encrypted cloud storage system.",
      tech: "Kyber, McEliece, Rclone, Tor",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/distributed-cloud-storage",
      // live omitted to avoid broken link in production
    },
    {
      title: "Web-Based Code Editor",
      description: "A sandboxed environment for running code in the browser.",
      tech: "React, Monaco Editor, WebAssembly",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/web-based-code-editor",
      // live omitted to avoid broken link in production
    },
    {
      title: "Grocery SaaS",
      description:
        "A management system for grocery stores with offline support.",
      tech: "Electron, React, IndexedDB",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/grocery-saas",
      // live omitted to avoid broken link in production
    },
  ],
};

// Helper to map RawProject[] to the ProjectsGrid "Project" shape.
export function mapProjectsForGrid(raw: RawProject[]) {
  return raw.map((p, idx) => ({
    id: `${p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${idx + 1}`,
    title: p.title,
    short: p.description,
    long: p.long ?? p.description,
    image: p.image?.trim() ? p.image : "/images/projects/image.png",
    stack: p.tech
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    github: p.repo,
    live: p.live,
    featured: Boolean(p.featured),
    highlights: p.highlights,
    pages: p.pages,
  }));
}
