"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-[70vh] grid place-items-center bg-background text-foreground">
      <div className="text-center px-6">
        <p className="text-sm text-muted-foreground">Something went wrong</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
          We hit an error.
        </h1>
        <p className="mt-3 text-muted-foreground">
          {process.env.NODE_ENV === "development"
            ? error?.message
            : "Please try again. If the problem persists, reach out."}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
          >
            Try again
          </button>
          <a
            href="mailto:me@farouk.uk?subject=Site%20error"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
          >
            Report issue
          </a>
        </div>
      </div>
    </main>
  );
}
