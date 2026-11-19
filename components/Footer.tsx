import Image from "next/image";
import Link from "next/link";
import { communities } from "@/lib/communities";
import { nav, site } from "@/lib/site";
import { EqualHousing } from "@/components/ui";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo-icon.jpg" alt="" width={497} height={412} className="h-16 w-auto rounded-lg bg-white p-1" />
          <p className="mt-4 font-display text-2xl">Malik Group</p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {site.agent}
            <br />
            {site.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">{site.disclosure}</p>
          <p className="mt-3 text-sm text-white/85">Florida license {site.license}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Explore</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/indian-realtor-orlando" className="text-white/90 hover:text-white">
                Indian realtor in Orlando
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Service areas</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {communities.map((community) => (
              <li key={community.slug}>
                <Link href={`/communities/${community.slug}`} className="text-white/90 hover:text-white">
                  {community.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/75">{site.counties.join(", ")} counties</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Contact</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a href={site.phoneTel} className="text-white/90 hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-white/90 hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Languages: {site.languages.join(", ")}
          </p>
          <EqualHousing className="mt-5 text-sm text-white" />
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs leading-relaxed text-white/70 sm:px-8">
          © {new Date().getFullYear()} Malik Group. {site.disclosure} Florida real estate license {site.license}.
        </p>
      </div>
    </footer>
  );
}
