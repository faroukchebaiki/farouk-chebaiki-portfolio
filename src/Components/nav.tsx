import Link from "next/link";

export default function Navigation(): JSX.Element {
  return (
    <nav
      className="flex justify-between items-center p-4"
    >
    <Link href="/projects" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
    Projects
    </Link>

    <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
    Articles
    </Link>

    </nav>
  );
}