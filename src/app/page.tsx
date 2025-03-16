import Link from "next/link";
import Profile from "@/Components/profile";
import Navigation from "@/Components/nav";

import Githubicon  from "@/Components/Assets/github";

export default function Home() {
  return (
    <main className="h-screen  items-center flex flex-col space-between">
      <Link href="/about" className="mt-auto">
    <Profile />
    </Link>
    <Link href="/about">
      <h1 className="text-3xl font-semibold mt-4">
        <span className="text-[#5BD124] ">FAROUK </span> 
        Chebaiki</h1>
    </Link>
    <div>
    <h2 className="text-4xl font-bold mt-4">welcome ,</h2>
    <h2 className="text-4xl font-bold">traveler .</h2>

    <p className="text-base font-normal mt-4 indent-8">
      explore my portfolio and use anything <br />you need.  
      Reach out if you’d like to discuss <br />your ideas!</p>
      </div>
    <Navigation />

    {/* Footer */}
    <footer className="flex justify-center text-center mt-auto mb-4">
      <Link href="/about" className="text-lg underline transition-colors duration-200 hover:text-[#5BD124] mr-4">
        About me
      </Link>
      <a href="https://github.com/faroukchebaiki" className="mr-2" target="_blank" rel="noopener noreferrer">
        <Githubicon size={20} color="white"  />
      </a>
     
    </footer>
  </main>
  );
}
