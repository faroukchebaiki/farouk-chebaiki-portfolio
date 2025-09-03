"use client";

import * as React from "react";
import { createPortal } from "react-dom";

/** Reusable right-side drawer with overlay + animations */
export default function SlideOver({
  open,
  onClose,
  children,
  widthClass = "w-full md:w-1/2",
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  widthClass?: string; // change width if needed
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // ESC to close
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`
        fixed inset-0 z-50
        ${open ? "" : "pointer-events-none"}
      `}
      aria-hidden={!open}
    >
      {/* Overlay (click to close) */}
      <button
        aria-label="Close panel"
        onClick={onClose}
        className={`
          absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity
          ${open ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Panel */}
      <div
        className={`
          absolute right-0 top-0 h-dvh ${widthClass}
          bg-card border-l border-border shadow-xl
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
