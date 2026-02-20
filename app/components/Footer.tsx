import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 text-muted-foreground">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()}{" "}
          <Link
            href={siteConfig.repository ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-emerald-400 transition-colors"
          >
            code
          </Link>{" "}
          by{" "}
          <Link
            href={siteConfig.social.github ?? "#"}
            target="_blank"
            rel="me noopener noreferrer"
            className="text-foreground hover:text-emerald-400 transition-colors"
          >
            {siteConfig.brandName}
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
