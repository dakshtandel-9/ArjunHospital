"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#doctors", label: "Doctors" },
    { href: "/#facilities", label: "Facilities" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#insurance", label: "Insurance" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] h-16 items-center gap-3">
          {/* Left: Logo only */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-foreground/40 rounded">
              <Image src="/logo.png" alt="Arjun Hospital logo" width={150} height={48} priority />
            </Link>
          </div>

          {/* Center: Nav (md and up) */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: 24x7 Emergency (md+) + mobile menu button */}
          <div className="flex items-center justify-end gap-2">
            <a
              href="tel:6305800108"
              className="hidden md:inline-flex items-center justify-center rounded-md bg-red-600 text-white px-3 py-2 text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              24x7 Emergency
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.06] focus:outline-none focus:ring-2 focus:ring-foreground/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                {open ? (
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Panel */}
        {open && (
          <div className="md:hidden border-t border-black/10 dark:border-white/10 pb-4">
            <nav className="flex flex-col gap-3 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-1 text-base font-medium text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:6305800108"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-red-600 text-white px-3 py-2 text-base font-semibold text-center hover:bg-red-700 transition-colors"
              >
                24x7 Emergency
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}