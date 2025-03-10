import Header from "@/Components/header";
const about = () => {
  return (
    <main>
      <Header pagename="About" />
      <article className="mr-auto ml-auto mt-7 max-w-[1000px] p-2">
        <p className="text-3xl font-normal indent-9">
        I'm Farouk Mohamed Chebaiki, a Full Stack Developer focused on building 
        efficient and scalable web applications. I specialize in Next.js, React,
         Node.js, and TailwindCSS, ensuring seamless user experiences and robust
          backend systems.
        </p>
        <p className="text-3xl font-normal indent-9 mt-3">
          With a strong interest in AI and system security, 
          I approach projects with a problem-solving mindset,
           prioritizing clean architecture and performance. 
           Always open to new challenges and collaborations.
        </p>
        <h2 className="text-3xl font-semibold text-[#5BD124]" >Contact Info :</h2>
        <p className="text-3xl font-normal indent-9 mt-3">
          Email : 
          <a href="mailto:me@farouk.uk"> me@farouk.uk</a>
        </p>
      </article>
    </main>
  );
}
export default about;