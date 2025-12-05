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
      title: "Voidwrite",
      description:
        "A full-stack editorial platform with a reader-first blog and collaborative studio.",
      tech: "Next.js 15, React 19, Tailwind CSS, Drizzle ORM, Auth.js",
      image: "/images/projects/voidwrite.png",
      repo: "https://github.com/faroukchebaiki/voidwrite",
      live: "https://voidwrite.farouk.uk/",
      featured: true,
      long: "Voidwrite blends a polished public publication with a role-aware editorial studio. It ships with passkey-ready authentication, analytics, collaborative authoring, and brand controls consolidated in a single config so small teams can launch quickly.",
      highlights: [
        "Reader-first blog experience with refined typography and responsive cards",
        "Role-aware studio for editors and authors with dashboards, queues, and analytics",
        "Passkey-ready Auth.js setup backed by Drizzle ORM and Postgres",
        "Newsletter and digest pipeline powered by Resend with automated weekly summaries",
        "Media handling via Vercel Blob, supporting cover uploads and responsive WebP variants",
        "Opinionated branding system managed from a single `site.ts` source of truth",
      ],
      pages: [
        "Reader homepage curating posts, authors, tags, and weekly leaderboard",
        "Post view with sticky share bar, author spotlight, and email capture CTA",
        "Studio dashboard with views chart, submission queues, and role-based moderation",
        "Newsletter digest endpoint that assembles personalised weekly roundups",
        "Auth flows covering email/password, passkey enrolment, and suspension handling",
      ],
    },
    {
      title: "VisoNext",
      description:
        "Nuxt 3 marketing site with polished gradients, motion, and production-ready SEO.",
      tech: "Nuxt 3, Vue 3, Tailwind CSS, @nuxt/image, VueUse Motion, @nuxtjs/seo",
      image: "/images/projects/visonext.png",
      repo: "https://github.com/faroukchebaiki/VisoNext",
      live: "https://visonext.farouk.uk/",
      long: "VisoNext 2.0 is a rebuilt Nuxt 3 + Vue 3 experience with a refreshed gradient design system, animations via VueUse Motion, responsive media powered by @nuxt/image, and production-ready SEO defaults from @nuxtjs/seo.",
      highlights: [
        "Rebuilt frontend on Nuxt 3 with reusable layout + UI primitives",
        "Gradient/glass design system with Tailwind helpers and motion presets",
        "Responsive media and lazy loading via @nuxt/image",
        "Automated SEO + structured data through @nuxtjs/seo",
        "Validated contact form and UX-friendly loading states",
      ],
      pages: [
        "Home: hero, stats, services preview, testimonials, CTA",
        "About: mission, values grid, and team spotlights",
        "Services: detailed cards with benefits and process timeline",
        "Contact: glass-style form, info cards, and business hours",
      ],
    },
    {
      title: "REnova",
      description:
        "Vite + React 19 marketing site for a renovation studio with MUI, Framer Motion, and responsive sections.",
      tech: "React 19, Vite, TypeScript, MUI, Framer Motion, React Router",
      image: "/images/projects/renova.png",
      repo: "https://github.com/faroukchebaiki/Renova",
      live: "https://renova.farouk.uk/",
      long: "Renova is a modern web experience for a home renovation and design company, built with Vite and React 19. It ships a custom MUI theme, smooth Framer Motion animations, and interactive sections highlighting services, projects, testimonials, and contact.",
      highlights: [
        "Custom MUI design system tuned for the brand",
        "Framer Motion for polished transitions and section reveals",
        "Responsive layouts across desktop, tablet, and mobile",
        "Interactive services, projects gallery, testimonials, and contact form",
        "TypeScript-first stack with Vite, React Router, and Biome linting",
      ],
      pages: [
        "Home: hero, services overview, featured projects, testimonials, CTA",
        "About: company story, values, and team highlight",
        "Services: detailed renovation services with benefits and process",
        "Projects: gallery-style highlights of completed work",
        "Contact: inquiry form with validation and business details",
      ],
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
