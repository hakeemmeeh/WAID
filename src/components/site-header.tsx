"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/where-we-work", label: "Where We Work" },
  { href: "/news", label: "News" },
  { href: "/get-involved", label: "Get Involved" },
];

const programmeLinks = [
  { href: "/programmes", label: "All Programmes" },
  { href: "/programmes/education", label: "Education" },
  { href: "/programmes/child-protection", label: "Child Protection" },
  { href: "/programmes/empowerment", label: "Women and Youth Empowerment" },
];

function NavigationLink({
  href,
  label,
  activePath,
  onNavigate,
}: {
  href: string;
  label: string;
  activePath: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      aria-current={activePath === href ? "page" : undefined}
      onClick={onNavigate}
      className="rounded-sm px-2 py-2 transition-colors hover:bg-[#faf7fc] hover:text-[#B52185] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EBAA22]"
    >
      {label}
    </Link>
  );
}

function ProgrammesDropdown({
  activePath,
  onNavigate,
}: {
  activePath: string;
  onNavigate?: () => void;
}) {
  const isActive = activePath.startsWith("/programmes");

  return (
    <details className="group relative">
      <summary
        aria-current={isActive ? "page" : undefined}
        className={`flex cursor-pointer list-none items-center gap-2 rounded-sm px-2 py-2 transition-colors hover:bg-[#faf7fc] hover:text-[#B52185] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EBAA22] [&::-webkit-details-marker]:hidden ${
          isActive ? "text-[#B52185]" : ""
        }`}
      >
        Our Programmes
        <svg
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="z-20 mt-1 flex flex-col gap-1 rounded-2xl border border-[#48145F]/10 bg-white p-2 text-sm shadow-xl md:absolute md:left-0 md:mt-3 md:min-w-64">
        {programmeLinks.map((link) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            activePath={activePath}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </details>
  );
}

export function SiteHeader({ activePath = "" }: { activePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#48145f]/10 bg-white/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded bg-white px-4 py-3 text-[#48145F] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-2 focus:outline-[#EBAA22]"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-5 py-3 sm:px-8"
      >
        <Link
          href="/"
          aria-label="WAID home"
          className="flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EBAA22]"
          onClick={closeMenu}
        >
          <Image
            src="/logo/waid-logo.png"
            alt="WAID - Women Action for Inclusive Development"
            width={300}
            height={200}
            priority
            className="h-[4.25rem] w-auto object-contain sm:h-[4.75rem]"
          />
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold text-[#32113f] lg:flex">
          {navigationLinks.slice(0, 2).map((link) => (
            <NavigationLink
              key={link.href}
              {...link}
              activePath={activePath}
            />
          ))}
          <ProgrammesDropdown activePath={activePath} />
          {navigationLinks.slice(2).map((link) => (
            <NavigationLink
              key={link.href}
              {...link}
              activePath={activePath}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            prefetch={false}
            aria-current={activePath === "/contact" ? "page" : undefined}
            className="rounded-full bg-[#48145F] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B52185] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EBAA22] sm:px-6"
          >
            Contact Us
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#48145F]/20 text-[#48145F] transition-colors hover:bg-[#faf7fc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EBAA22] lg:hidden"
          >
            {isMenuOpen ? (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          hidden={!isMenuOpen}
          className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col gap-2 border-t border-[#48145f]/10 pt-3 text-sm font-medium text-[#48145F] lg:hidden`}
        >
          {navigationLinks.slice(0, 2).map((link) => (
            <NavigationLink
              key={link.href}
              {...link}
              activePath={activePath}
              onNavigate={closeMenu}
            />
          ))}
          <ProgrammesDropdown
            activePath={activePath}
            onNavigate={closeMenu}
          />
          {navigationLinks.slice(2).map((link) => (
            <NavigationLink
              key={link.href}
              {...link}
              activePath={activePath}
              onNavigate={closeMenu}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}
