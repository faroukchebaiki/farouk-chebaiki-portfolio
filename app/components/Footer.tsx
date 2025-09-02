import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 text-muted-foreground">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-xs sm:text-sm">
          © 2025{" "}
          <Link
            href="https://github.com/faroukchebaiki/farouk-chebaiki-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-emerald-400 transition-colors"
          >
            code
          </Link>{" "}
          by{" "}
          <Link
            href="https://github.com/faroukchebaiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-emerald-400 transition-colors"
          >
            farouk
          </Link>
          . All rights reserved ·{" "}
          <Link
            href="/privacy"
            className="text-foreground hover:text-emerald-400 transition-colors"
          >
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
