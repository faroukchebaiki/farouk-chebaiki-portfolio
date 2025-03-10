import Link from "next/link";
import Profile from "@/Components/profile";
import Navigation from "@/Components/nav";
export default function Home() {
  return (
    <main className="h-screen  items-center flex flex-col space-between">
      <Link href="/about" className="mt-auto">
    <Profile />
    </Link>
    <h1 className="text-3xl font-semibold mt-4">
      <span className="text-[#5BD124]">Farouk </span> 
      Chebaiki</h1>
    <div>
    <h2 className="text-4xl font-bold mt-4">welcome ,</h2>
    <h2 className="text-4xl font-bold">traveler .</h2>

    <p className="text-base font-normal mt-4 indent-8">
      explore my portfolio and use anything <br />you need.  
      Reach out if you’d like to discuss <br />your ideas!</p>
      </div>
    <Navigation />

    {/* Footer */}
    <footer className="justify-center text-center mt-auto mb-4">
      <Link href="/about" className="text-lg underline hover:text-[#5BD124]">
        About me
      </Link>
    </footer>
  </main>
  );
}
