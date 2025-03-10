import Header from "@/Components/header";
import BlogCard from "@/Components/blogCard";
const blog = () => {
    return (
      <main>
        <Header pagename="Blog" />
        <section className="flex flex-wrap justify-center mr-auto ml-auto mt-7 max-w-[1280px]">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
          </section>
      </main>
    );
  }
  export default blog;