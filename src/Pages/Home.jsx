import aos from "aos/dist/aos";
import { useEffect } from "react";
import ContactWithMe from "../Components/Sections/ContactWithMe";
import ExperiencedTech from "../Components/Sections/ExperiencedTech";
import HeroSection from "../Components/Sections/HeroSection";
import ServicesIProvide from "../Components/Sections/ServicesIProvide";
import WorkingProcess from "../Components/Sections/WorkingProcess";

const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);

  return (
    <div className='bg-slate-800'>
      {/* Hero */}
      <HeroSection />

      {/* Technology I have Expeience  */}
      <ExperiencedTech />

      {/* Services I Provide  */}
      <ServicesIProvide />

      {/* Working Process*/}
      <WorkingProcess />

      {/* Completed Projects*/}
      

      {/* Contact With Me  */}
      <ContactWithMe />
    </div>
  );
};

export default Home;
