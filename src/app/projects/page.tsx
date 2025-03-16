import Header from "@/Components/header";
import ProjectCard from "@/Components/project";
const projects = () => {
    return (
      <main>
        <Header pagename="Projects" />
        <section className="flex flex-wrap justify-center mr-auto ml-auto mt-7 max-w-[1060px]">
          <ProjectCard />
        </section>
      </main>
    );
  }
  export default projects;