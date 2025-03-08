export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
    <div className="relative flex flex-col items-center justify-center z-10 flex-1">
      <h1 className="text-4xl md:text-8xl font-bold text-center animate-fade-in-zoom animate-pulse-glow">
        Coming Soon
      </h1>
    </div>

    {/* Gradient background */}
    <div className="absolute inset-0 -z-10 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />

    {/* Footer */}
    <footer className="w-full text-center z-10">
      <a href="mailto:me@farouk.uk" className="text-lg hover:underline">
        Contact me
      </a>
    </footer>
  </main>
  );
}
