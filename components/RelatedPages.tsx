import Link from "next/link";
import type { Community } from "@/lib/communities";
import { communities } from "@/lib/communities";

const pages = [
  { href: "/buy", label: "Buy a home in Central Florida" },
  { href: "/sell", label: "Sell my home in Seminole County" },
  { href: "/relocation", label: "Relocation realtor in Orlando" },
  { href: "/communities", label: "Central Florida communities" },
  { href: "/indian-realtor-orlando", label: "Hindi, Punjabi, and Urdu speaking realtor" },
  { href: "/contact", label: "Contact Sanjeev Malik" },
];

export function RelatedPages({ exclude }: { exclude?: string }) {
  const items = pages.filter((item) => item.href !== exclude);
  return (
    <nav aria-label="Related pages" className="mt-12">
      <h2 className="text-2xl text-navy">Related pages</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-navy"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function NearbyCommunities({ current }: { current: Community }) {
  const others = communities.filter((community) => community.slug !== current.slug);
  return (
    <nav aria-label="Other communities" className="mt-10">
      <h2 className="text-2xl text-navy">Other communities</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {others.map((community) => (
          <li key={community.slug}>
            <Link
              href={`/communities/${community.slug}`}
              className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-semibold text-navy"
            >
              {community.name} real estate
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
