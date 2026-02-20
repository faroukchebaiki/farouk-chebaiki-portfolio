"use client";

import { Github, Menu as MenuIcon, Twitter, X } from "lucide-react";
// Logo font (local to this component)
import { UnifrakturMaguntia } from "next/font/google";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { siteConfig } from "@/lib/site";
const logoFont = UnifrakturMaguntia({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Top bar: themed background, text, and bottom border */}
      <nav className="sticky top-0 z-40 w-full bg-background/95 text-foreground border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Left: Logo (inherits theme text color) */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-wide hover:opacity-90 transition"
          >
            <span className={logoFont.className}>{siteConfig.brandName}</span>
          </Link>

          {/* Center: Desktop links (tokens only) */}
          <div className="hidden lg:flex gap-2">
            <NavButton href="/about">About</NavButton>
            <NavButton href="/projects">Projects</NavButton>
            <NavButton href="/blog">Blog</NavButton>
            <NavButton href="/contact">Contact</NavButton>
          </div>

          {/* Right: Desktop contact + icons (tokens only) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm hover:underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.github ?? "#"}
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.twitter ?? "#"}
              target="_blank"
              rel="me noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="X"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile/Tablet: Menu button uses theme tokens (secondary surface) */}
          <div className="lg:hidden">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="secondary" className="rounded-2xl px-3 sm:px-4">
                  <MenuIcon className="h-4 w-4 mr-2" />
                  Menu
                </Button>
              </PopoverTrigger>

              {/* Popover inherits themed surface + border + foreground */}
              <PopoverContent
                side="top"
                align="end"
                sideOffset={12}
                className="z-[60] w-72 rounded-3xl bg-popover text-popover-foreground border border-border shadow-xl"
              >
                {/* Close (tokens for border/text) */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Links use foreground; hover uses accent */}
                <nav className="mt-2 space-y-4">
                  <MenuLink href="/" onSelect={() => setOpen(false)}>
                    Home
                  </MenuLink>
                  <MenuLink href="/about" onSelect={() => setOpen(false)}>
                    About
                  </MenuLink>
                  <MenuLink href="/projects" onSelect={() => setOpen(false)}>
                    Projects
                  </MenuLink>
                  <MenuLink href="/blog" onSelect={() => setOpen(false)}>
                    Blog
                  </MenuLink>
                  <MenuLink href="/contact" onSelect={() => setOpen(false)}>
                    Contact
                  </MenuLink>
                </nav>

                {/* Bottom row uses tokens */}
                <div className="flex mt-6 gap-4 justify-between items-center">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-medium hover:underline underline-offset-4"
                    onClick={() => setOpen(false)}
                  >
                    {siteConfig.email}
                  </a>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.social.github ?? "#"}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="hover:opacity-80 transition"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.social.twitter ?? "#"}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="hover:opacity-80 transition"
                      aria-label="X"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>

      {/* Overlay uses themed foreground tint; clicking outside closes */}
      <div className="lg:hidden">
        {open && (
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-foreground/10 backdrop-blur-sm"
          />
        )}
      </div>
    </>
  );
}

/* --- Helpers use only theme tokens --- */

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
  // ghost variant already uses tokens; add subtle hover surface via accent
  return (
    <Button
      asChild
      variant="ghost"
      className="hover:bg-accent hover:text-accent-foreground"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

function MenuLink({
  href,
  onSelect,
  children,
}: {
  href: string;
  onSelect?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onSelect}
      className="block text-[18px] leading-7 tracking-tight hover:underline underline-offset-4"
    >
      {children}
    </Link>
  );
}
