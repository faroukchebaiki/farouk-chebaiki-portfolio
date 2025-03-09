import Link from "next/link";
import Profile from "@/Components/profile";
import Navigation from "@/Components/nav";
export default function Home() {
  return (
    <main className="h-screen justify-center items-center flex flex-col">
    <Profile />
    <h1 className="text-xl font-semibold">
      <span className="text-[#5BD124]">Farouk </span> 
      Chebaiki</h1>
    <h2 className="text-2xl font-bold">welcome,</h2>
    <h2 className="text-2xl font-bold">traveler.</h2>

    <p className="text-base font-normal">
      explore my portfolio and use anything you need. <br /> 
      Reach out if you’d like to discuss your ideas!</p>

    <Navigation />

    {/* Footer */}
    <footer className="justify-center text-center z-10">
      <Link href="/about" className="text-lg underline">
        About me
      </Link>
    </footer>
  </main>
  );
}
