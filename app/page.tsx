
import Hero from "./components/home/Hero";
import FeaturedProjects from "./components/home/FeaturedProjects";
import LatestPosts from "./components/home/LatestPosts";
import TechStack from "./components/home/TechStack";
import ContactStrip from "./components/home/ContactStrip";


export const revalidate = 3600; 

export default function HomePage() {
  return (
    <main id="main" className="bg-background text-foreground">
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
      <TechStack />
      <ContactStrip />
    </main>
  );
}
