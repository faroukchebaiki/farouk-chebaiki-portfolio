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
  projects: RawProject[];
};

export const siteConfig: SiteConfig = {
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
  projects: [
    {
      title: "VisoNext",
      description: "Next.js site with responsive UI, SEO, and fast performance.",
      tech: "Next.js, React, Tailwind, shadcn/ui",
      image: "/images/projects/visonext.png",
      repo: "https://github.com/faroukchebaiki/VisoNext",
      live: "https://visonext.farouk.uk/",
      featured: true,
      long:
        "A multi-page Next.js website with a modern, responsive UI/UX, high performance, SEO, accessibility, and interactive components.",
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
      long:
        "A modern website for a home renovation and design company with gallery, contact, and SEO-optimized responsive pages.",
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
      live: "https://resume-generator.com",
    },
    {
      title: "Distributed Cloud Storage",
      description: "A secure, post-quantum encrypted cloud storage system.",
      tech: "Kyber, McEliece, Rclone, Tor",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/distributed-cloud-storage",
      live: "https://cloud-storage.com",
    },
    {
      title: "Web-Based Code Editor",
      description: "A sandboxed environment for running code in the browser.",
      tech: "React, Monaco Editor, WebAssembly",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/web-based-code-editor",
      live: "https://code-editor.com",
    },
    {
      title: "Grocery SaaS",
      description: "A management system for grocery stores with offline support.",
      tech: "Electron, React, IndexedDB",
      image: "/images/projects/image.png",
      repo: "https://github.com/user/grocery-saas",
      live: "https://grocery-saas.com",
    },
  ],
};

// Helper to map RawProject[] to the ProjectsGrid "Project" shape.
export function mapProjectsForGrid(raw: RawProject[]) {
  return raw.map((p, idx) => ({
    id: `${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${idx + 1}`,
    title: p.title,
    short: p.description,
    long: p.long ?? p.description,
    image: p.image?.trim() ? p.image : "/images/projects/image.png",
    stack: p.tech.split(",").map((s) => s.trim()).filter(Boolean),
    github: p.repo,
    live: p.live,
    featured: Boolean(p.featured),
    highlights: p.highlights,
    pages: p.pages,
  }));
}
