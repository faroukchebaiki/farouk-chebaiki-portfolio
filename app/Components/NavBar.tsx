"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Github, Twitter, Menu as MenuIcon, X } from "lucide-react";

import { UnifrakturMaguntia } from "next/font/google";
const logoFont = UnifrakturMaguntia({ weight: "400", subsets: ["latin"] });
/**
 * Navbar (Desktop + Mobile in one)
 * - Sticky at top
 * - Desktop (lg+): logo | center links | right email + icons
 * - Mobile/Tablet: logo | Menu button -> popover (small window) above the button
 *
 * Tip: if you have a logo font (e.g. logoFont.className), add it to the logo <span>.
 */
export default function Navbar() {
  // Controls the mobile/tablet popover state
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* ===== Fixed/Sticky Navbar ===== */}
      <nav className="sticky top-0 z-40 w-full bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white shadow">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-wide hover:opacity-90 transition"
          >
            
            <span className={logoFont.className}>Farouk Chebaiki</span>
          </Link>

          {/* Center links — visible on desktop (lg+) */}
          <div className="hidden lg:flex gap-6">
            <NavButton href="/about">About</NavButton>
            <NavButton href="/projects">Projects</NavButton>
            <NavButton href="/blog">Blog</NavButton>
          </div>

          {/* Right side — email + icons (desktop only) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:me@farouk.uk"
              className="text-sm hover:underline underline-offset-4"
            >
              me@farouk.uk
            </a>
            <a
              href="https://github.com/faroukchebaiki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/faroukchebaiki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
              aria-label="X"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile/Tablet (≤ lg): Menu button (popover trigger) */}
          <div className="lg:hidden">
            <Popover open={open} onOpenChange={setOpen}>
              {/* The trigger is the "Menu" pill button */}
              <PopoverTrigger asChild>
                <Button
                  variant="secondary"
                  className="rounded-2xl px-3 sm:px-4 bg-white/15 hover:bg-white/25 text-white backdrop-blur transition shadow-sm"
                >
                  <MenuIcon className="h-4 w-4 mr-2" />
                  Menu
                </Button>
              </PopoverTrigger>

              {/* Small window ABOVE the button (aligned to the right edge) */}
              <PopoverContent
                side="top"
                align="end"
                sideOffset={12}
                collisionPadding={8}
                className="
                  z-[60] w-72 rounded-3xl
                  bg-white p-5 sm:p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  text-black
                "
              >
                {/* Single Close button in the top-right */}
                <div className="flex justify-end">
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/70 hover:bg-black/5 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Links list */}
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
                  <MenuLink href="/contact" onSelect={() => setOpen(false)}>
                    Blog
                  </MenuLink>
                </nav>

                {/* Email at bottom */}
                <div className="flex mt-6 gap-4 justify-between items-center ">
                  <a
                    href="mailto:me@farouk.uk"
                    className="text-sm font-medium text-neutral-700 hover:underline underline-offset-4"
                    onClick={() => setOpen(false)}
                  >
                    me@farouk.uk
                  </a>
                  <div className="flex items-center gap-3">
                  <a
                 href="https://github.com/faroukchebaiki"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="GitHub"
                >
                <Github className="h-5 w-5" />
                </a>
                <a
                href="https://x.com/faroukchebaiki.com/"
                target="_blank"
                rel="noopener noreferrer"
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

      {/* ===== Overlay that blurs the page when mobile menu is open =====
         - Renders only on mobile/tablet (lg:hidden) and only while `open`
         - Covers the whole viewport; clicking it closes the menu
         - Sits under the popover (z-50 < popover's z-60 above) but above page content
      */}
      <div className="lg:hidden">
        {open && (
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/10 backdrop-blur-[2px]"
          />
        )}
      </div>
    </>
  );
}

/* -------------------- Small helpers -------------------- */

/** Desktop nav buttons (shadcn Button as a link) */
function NavButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      className="text-white hover:bg-white/10 hover:text-white"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

/** MenuLink for the mobile popover */
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
