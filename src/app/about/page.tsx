import Header from "@/Components/header";

const About = () => {
  return (
    <main className="min-h-screen" >
      <Header pagename="About" />
      <article className="mx-auto mt-7 max-w-[1000px] md:text-2xl p-2">
        <div className="bg-[#5BD124]/40 border-2 border-[#5BD124] p-2 md:p-6">
          <p className="prose prose-lg prose-gray max-w-none leading-relaxed  font-normal indent-9">
            I&apos;m <span className="text-green-400">Farouk Mohamed Chebaiki</span>, a Full Stack Developer passionate 
            about building efficient and scalable web applications. I specialize
             in <span className="text-green-400">Next.js</span>, <span className="text-green-400">React</span>, and <span className="text-green-400">Tailwind CSS</span> for crafting intuitive user
              experiences, combined with <span className="text-green-400">Node.js</span>, <span className="text-green-400">Express</span>, and <span className="text-green-400">tRPC</span> to ensure
               powerful and reliable backend systems.
          </p>
          <p className="prose prose-lg prose-gray max-w-none leading-relaxed  font-normal mt-3">
            Beyond web development, I have a strong focus on system security,
            <span className="text-green-400">DevOps</span>, and performance optimization. I work with containerization
            <span className="text-green-400">(Podman and Docker)</span>, system administration <span className="text-green-400">(Ubuntu Server)</span>, and backend solutions
               like <span className="text-green-400">Firebase</span> and <span className="text-green-400">Payload CMS</span>, allowing me to build scalable and 
               secure infrastructures.
          </p>
          <p className="prose prose-lg prose-gray max-w-none leading-relaxed  font-normal mt-3">
                I believe that great software is more than just code—it&apos;s about 
                efficiency, security, and maintainability. Whether working on 
                frontend interfaces, backend architectures, or deployment pipelines
                , I prioritize clean architecture, scalability, and a seamless user
                 experience.
          </p>
          <p className="prose prose-lg prose-gray max-w-none leading-relaxed  font-normal mt-3">
                If you&apos;re interested in building something or discuss
                your ideas, let&apos;s connect.
          </p>
          <h2 className=" font-semibold text-[#5BD124] mt-4">
            Contact Info :
          </h2>
          <p className=" font-normal indent-9 mt-3">
            Email :
            <a
              className="hover:underline hover:text-[#5BD124]"
              href="mailto:me@farouk.uk"
            >
              {" "}
              me@farouk.uk
            </a>
          </p>
          <p className=" font-normal indent-9 mt-3">
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
          <p className=" font-normal indent-9 mt-3">
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
          <p className=" font-normal indent-9 mt-3">  
            <a
              className="hover:underline hover:text-[#5BD124]"
              href="https://t.me/faroukchebaiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              Telegram
            </a>
            /
            <a
              className="hover:underline hover:text-[#5BD124]"
              href="https://wa.me/213657613894"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              WhatsApp
            </a>
            {" "}: +213657613894
          </p>
        </div>
      </article>
    </main>
  );
};

export default About;
