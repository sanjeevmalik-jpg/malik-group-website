import Link from "next/link";
import { Container, CtaLinks, PageHero } from "@/components/ui";
import { communities } from "@/lib/communities";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Central Florida Communities",
  description:
    "Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando. Neutral overviews from Malik Group.",
  path: "/communities",
});

export default function CommunitiesPage() {
  return (
    <>
      <PageHero eyebrow="Communities" title="Nine places Sanjeev works, described the same way.">
        <p>
          Each page covers where the city is, how people get around, what is nearby, and the home styles that usually show up. Nothing here ranks a neighborhood by the people who live there.
        </p>
      </PageHero>
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <li key={community.slug}>
              <Link href={`/communities/${community.slug}`} className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white">
                <div className={`h-32 bg-gradient-to-br ${community.gradient}`} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-2xl text-navy">{community.name}</h2>
                  <p className="mt-1 text-sm text-muted">{community.county}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{community.overview}</p>
                  <span className="mt-4 text-sm font-semibold text-orange-deep">Overview</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-slate">
          Sanjeev also works throughout Seminole, Volusia, Orange, and Osceola counties. If you are looking just outside these cities, ask whether he can help.
        </p>
        <CtaLinks className="mt-6" />
      </Container>
    </>
  );
}
