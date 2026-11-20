"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { btnPrimary } from "@/components/ui";

function current(pathname: string, href: string) {
  if (href === "/communities") {
    return pathname === href || pathname.startsWith("/communities/");
  }
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-8">
        <Link href="/" aria-label="Malik Group home" className="mr-auto shrink-0">
          <Image
            src="/logo-icon-trim.png"
            alt="Malik Group"
            width={649}
            height={580}
            className="h-11 w-auto sm:hidden"
          />
          <Image
            src="/logo-full-trim.png"
            alt="Malik Group"
            width={1102}
            height={305}
            className="hidden h-12 w-auto sm:block md:h-14"
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(pathname, item.href) ? "page" : undefined}
              className="text-[15px] font-semibold text-navy aria-[current=page]:underline aria-[current=page]:decoration-orange aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneTel} className="hidden min-h-11 items-center px-2 text-sm font-semibold text-navy sm:inline-flex">
          {site.phoneDisplay}
        </a>
        <a href={site.phoneTel} className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-navy sm:hidden">
          Call
        </a>
        <a href={site.searchUrl} rel="noopener" className={`${btnPrimary} px-3 sm:px-5`}>
          <span className="sm:hidden">Search</span>
          <span className="hidden sm:inline">Search Homes</span>
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white px-4 py-3 lg:hidden">
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current(pathname, item.href) ? "page" : undefined}
                  className="flex min-h-11 items-center rounded-xl px-3 font-semibold text-navy aria-[current=page]:bg-sand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/indian-realtor-orlando" className="flex min-h-11 items-center rounded-xl px-3 font-semibold text-navy">
                Indian realtor
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
