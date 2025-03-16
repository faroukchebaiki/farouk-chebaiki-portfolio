interface Project {
  title: string;
  description: string;
  tech: string;
  image: string;
  repo: string;
  live: string;
}

export default function ProjectCard() {
  const projects: Project[] = [
    {
      title: "VisoNext",
      description: "Next.js site with responsive UI, SEO, and fast performance.",
      tech: "Nextjs ,React, Tailwind, Shadcn",
      image: "/visonext.png",
      repo: "https://github.com/faroukchebaiki/VisoNext",
      live: "https://visonext.farouk.uk/"
    },
    {
      title: "REnova",
      description: "Expert design and build services for residential projects.",
      tech: "Nextjs , Tailwind CSS,",
      image: "/renova.png",
      repo: "https://github.com/faroukchebaiki/Renova",
      live: "https://renova.farouk.uk/"
    },
    {
      title: "AI Resume Generator",
      description: "An AI-powered tool to generate professional resumes.",
      tech: "Next.js, OpenAI API, TailwindCSS",
      image: "/visonext.png",
      repo: "https://github.com/user/ai-resume-generator",
      live: "https://resume-generator.com"
    },
    {
      title: "Distributed Cloud Storage",
      description: "A secure, post-quantum encrypted cloud storage system.",
      tech: "Kyber, McEliece, Rclone, Tor",
      image: "/visonext.png",
      repo: "https://github.com/user/distributed-cloud-storage",
      live: "https://cloud-storage.com"
    },
    {
      title: "Web-Based Code Editor",
      description: "A sandboxed environment for running code in the browser.",
      tech: "React, Monaco Editor, WebAssembly",
      image: "/visonext.png",
      repo: "https://github.com/user/web-based-code-editor",
      live: "https://code-editor.com"
    },
    {
      title: "Grocery SaaS",
      description: "A management system for grocery stores with offline support.",
      tech: "Electron, React, IndexedDB",
      image: "/visonext.png",
      repo: "https://github.com/user/grocery-saas",
      live: "https://grocery-saas.com"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {projects.map((project, index) => (
        <div key={index} className="h-96 w-80 border border-[#5BD124] shadow-lg  overflow-hidden flex flex-col">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="relative h-1/2 w-full block">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#5BD124]/40 hover:bg-[#5BD124]/70 flex items-center justify-center">
              <h1 className="text-white text-xl font-bold text-center px-4">{project.title}</h1>
            </div>
          </a>
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <p className="text-white text-lg mb-2">
                <span className="text-[#5BD124] font-semibold">Description:</span> {project.description}
              </p>
              <p className="text-green-200 text-md font-medium mb-4">Tech: {project.tech}</p>
            </div>
            <div className="flex justify-between text-sm mt-auto">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[#5BD124] underline hover:text-white">
                <code>GitHub Repo</code>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#5BD124] underline hover:text-white">
                Live Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}