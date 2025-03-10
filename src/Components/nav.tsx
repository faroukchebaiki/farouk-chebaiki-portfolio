import React from "react";
import Link from "next/link";

export default function Navigation(): JSX.Element {
  return (
    <nav
      className="flex flex-wrap justify-between items-center justify-center  p-4 max-[360px]:pl-0 max-[360px]:pr-0"
    >
    <Link href="/projects" className="flex items-center justify-center  w-32 h-[4rem] m-4  text-[#5BD124] font-bold border-2 border-[#5BD124] hover:bg-green-900 transition">
    Projects
    </Link>

    <Link href="/blog" className="flex items-center justify-center w-32 h-[4rem] m-4  text-[#5BD124] font-bold border-2 border-[#5BD124] hover:bg-green-900 transition">
    Articles
    </Link>

    </nav>
  );
}