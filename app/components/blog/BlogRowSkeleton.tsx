"use client";

export default function BlogRowSkeleton() {
  return (
    <div
      className="
        relative w-full overflow-hidden rounded-2xl
        border border-border bg-card
      "
      aria-hidden
    >
      <div
        className="
          grid gap-0 sm:gap-5
          sm:grid-cols-[260px_1fr]
          min-h-[12rem] sm:min-h-[14rem]
        "
      >
        {/* Thumb placeholder: fills full height on desktop */}
        <div className="relative overflow-hidden sm:h-full">
          <div className="relative w-full aspect-[16/9] sm:h-full sm:aspect-auto">
            <div className="absolute inset-0 bg-muted animate-pulse" />
          </div>
        </div>

        {/* Content placeholders */}
        <div className="p-4 sm:p-6 flex flex-col">
          {/* Meta row */}
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <div className="h-3 w-24 rounded bg-muted animate-pulse" />
            <span className="h-1 w-1 rounded-full bg-muted" />
            <div className="h-3 w-20 rounded bg-muted animate-pulse" />
          </div>

          {/* Title */}
          <div className="mt-2 h-6 w-3/4 rounded bg-muted animate-pulse" />

          {/* Description lines */}
          <div className="mt-3 space-y-2">
            <div className="h-4 w-full rounded bg-muted animate-pulse" />
            <div className="h-4 w-11/12 rounded bg-muted animate-pulse" />
            <div className="h-4 w-10/12 rounded bg-muted animate-pulse" />
            <div className="hidden lg:block h-4 w-9/12 rounded bg-muted animate-pulse" />
            <div className="hidden lg:block h-4 w-8/12 rounded bg-muted animate-pulse" />
            <div className="hidden lg:block h-4 w-7/12 rounded bg-muted animate-pulse" />
          </div>

          {/* Tags row */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["a", "b", "c", "d", "e"].map((k) => (
              <div
                key={k}
                className="h-5 w-16 rounded-full bg-muted animate-pulse"
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 flex items-center gap-4">
            <div className="h-4 w-10 rounded bg-muted animate-pulse" />
            <div className="h-4 w-10 rounded bg-muted animate-pulse" />
            <div className="ml-auto h-6 w-16 rounded-md bg-muted animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
