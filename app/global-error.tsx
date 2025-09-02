"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen grid place-items-center bg-background text-foreground">
        <div className="text-center px-6">
          <p className="text-sm text-muted-foreground">Critical error</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
            Something broke early.
          </h1>
          <p className="mt-3 text-muted-foreground">
            {process.env.NODE_ENV === "development"
              ? error?.message
              : "Please refresh the page or try again later."}
          </p>
          <div className="mt-6">
            <button
              onClick={() => reset()}
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground transition"
            >
              Refresh
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
