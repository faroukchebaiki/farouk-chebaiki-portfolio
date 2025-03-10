import Header from "@/Components/header";

const about = () => {
  return (
    <main>
      <Header pagename="About" />
      <article className="mr-auto ml-auto mt-7 max-w-[1000px] p-2">
        <p className="prose prose-lg prose-gray max-w-none leading-relaxed text-3xl font-normal indent-9">
        Im Farouk Mohamed Chebaiki, a Full Stack Developer focused on building 
        efficient and scalable web applications. I specialize in Next.js, React,
         Node.js, and TailwindCSS, ensuring seamless user experiences and robust
          backend systems.
        </p>
        <p className="prose prose-lg prose-gray max-w-none leading-relaxed text-3xl font-normal indent-9 mt-3">
          With a strong interest in AI and system security, 
          I approach projects with a problem-solving mindset,
           prioritizing clean architecture and performance. 
           Always open to new challenges and collaborations.
        </p>
        <h2 className="text-3xl font-semibold text-[#5BD124] mt-4" >Contact Info :</h2>
        <p className="text-3xl font-normal indent-9 mt-3">
          Email : 
          <a className="hover:underline hover:text-[#5BD124]" href="mailto:me@farouk.uk"> me@farouk.uk</a>
        </p>
        <p className="text-3xl font-normal indent-9 mt-3">
          X : 
          <a className="hover:underline hover:text-[#5BD124]" href="https://x.com/faroukchebaiki" target="_blank" rel="noopener noreferrer"> @faroukchebaiki</a>
        </p>
        <p className="text-3xl font-normal indent-9 mt-3">
          Github : 
          <a className="hover:underline hover:text-[#5BD124]" href="https://github.com/faroukchebaiki" target="_blank" rel="noopener noreferrer"> # faroukchebaiki</a>
        </p>
      </article>
    </main>
  );
}
export default about;