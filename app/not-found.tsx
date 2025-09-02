import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center bg-background text-foreground">
      <div className="text-center px-6">
        <p className="text-sm text-muted-foreground">404 — Not Found</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
          This page went missing.
        </h1>
        <p className="mt-3 text-muted-foreground">
          The link may be broken or the page might have been removed.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}