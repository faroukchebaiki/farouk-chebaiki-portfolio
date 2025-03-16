import Header from "@/Components/header";

const About = () => {
  return (
    <main className="min-h-screen" >
      <Header pagename="About" />
      <article className="mx-auto mt-7 max-w-[800px] p-4">
        <div className="bg-[#5BD124]/40 border-2 border-[#5BD124] p-6  sm:p-4">
          <p className="prose prose-lg prose-gray max-w-none leading-relaxed text-3xl sm:text-base font-normal indent-9">
            I&apos;m Farouk Mohamed Chebaiki, a Full Stack Developer focused on building
            efficient and scalable web applications. I specialize in Next.js, React,
            Node.js, and TailwindCSS, ensuring seamless user experiences and robust
            backend systems.
          </p>
          <p className="prose prose-lg prose-gray max-w-none leading-relaxed text-3xl sm:text-base font-normal indent-9 mt-3">
            With a strong interest in AI and system security, I approach projects
            with a problem-solving mindset, prioritizing clean architecture and
            performance. Always open to new challenges and collaborations.
          </p>
          <h2 className="text-3xl sm:text-lg font-semibold text-[#5BD124] mt-4">
            Contact Info :
          </h2>
          <p className="text-3xl sm:text-base font-normal indent-9 mt-3">
            Email :
            <a
              className="hover:underline hover:text-[#5BD124]"
              href="mailto:me@farouk.uk"
            >
              {" "}
              me@farouk.uk
            </a>
          </p>
          <p className="text-3xl sm:text-base font-normal indent-9 mt-3">
            X :
            <a
              className="hover:underline hover:text-[#5BD124]"
              href="https://x.com/faroukchebaiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              @faroukchebaiki
            </a>
          </p>
          <p className="text-3xl sm:text-base font-normal indent-9 mt-3">
            Github :
            <a
              className="hover:underline hover:text-[#5BD124]"
              href="https://github.com/faroukchebaiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              # faroukchebaiki
            </a>
          </p>
        </div>
      </article>
    </main>
  );
};

export default About;
