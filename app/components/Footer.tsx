import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 text-muted-foreground">
      <div className="container justify-center-safe mx-auto px-4 py-3">
        <p className="text-xs sm:text-sm">
          © {year}  Coded by me.
          Open source on{" "}
          <Link
            href="https://github.com/faroukchebaiki/farouk-chebaiki-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-foreground hover:opacity-80"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
