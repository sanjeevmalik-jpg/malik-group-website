import Link from "next/link";
import { Container, CtaLinks, IconAgentBadge, Portrait } from "@/components/ui";
import { communities } from "@/lib/communities";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Malik Group | Central Florida Real Estate",
  description:
    "Sanjeev Malik, Broker Associate with eXp Realty, helps buyers and sellers in Lake Mary, Sanford, Orlando, and across Central Florida. Call (321) 297-3009.",
  path: "/",
  absolute: true,
});

const stats = [
  { value: "225+", label: "Families helped", note: "Team sales" },
  { value: "30", label: "Sales in the last 12 months", note: "Team" },
  { value: "4.9", label: "Stars from 150 Zillow reviews", note: "Team rating" },
  { value: "165+", label: "Google reviews", note: "Public reviews" },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">
              Central Florida · eXp Realty
            </p>
            <h1 className="mt-3 text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-6xl">
              Central Florida real estate, with a guide who has lived here since 1999.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Sanjeev Malik is a Broker Associate with eXp Realty LLC. He helps people buy, sell, and relocate in Lake Mary, Sanford, Orlando, and across Seminole, Volusia, Orange, and Osceola counties.
            </p>
            <p className="mt-3 text-base font-semibold text-navy">{site.languages.join(" · ")}</p>
            <CtaLinks className="mt-7" />
          </div>
          <div className="mx-auto w-full max-w-md text-center">
            <Portrait priority />
            <p className="mt-5 font-display text-3xl text-navy sm:text-4xl">Sanjeev Malik</p>
            <p className="mt-1 text-base text-slate">Broker Associate, eXp Realty</p>
            <a
              href={site.phoneTel}
              className="mt-2 inline-flex min-h-12 items-center text-lg font-semibold text-navy underline decoration-orange/70 underline-offset-4"
            >
              {site.phoneDisplay}
            </a>
            <div className="mt-4 flex justify-center">
              <IconAgentBadge className="h-12 w-auto sm:h-14" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy text-white" aria-label="Experience">
        <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-orange">{stat.value}</p>
              <p className="mt-1 text-base font-semibold">{stat.label}</p>
              <p className="text-sm text-white/75">{stat.note}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="text-3xl text-navy sm:text-4xl">Buy, sell, or move here</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/buy",
                title: "Buy",
                text: "Search current homes and work through showings, the offer, and closing with someone who has been in Central Florida since 1999.",
              },
              {
                href: "/sell",
                title: "Sell",
                text: "Start with a home value, then a clear pricing conversation and a plan through closing. No promised sale price.",
              },
              {
                href: "/relocation",
                title: "Relocate",
                text: "Compare Lake Mary, Sanford, Oviedo, Deltona, and the other communities Sanjeev serves before you spend a weekend driving.",
              },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
                <h3 className="text-2xl text-navy">{card.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate">{card.text}</p>
                <span className="mt-5 text-sm font-semibold text-orange-deep">Learn more</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl text-navy sm:text-4xl">Communities</h2>
              <p className="mt-3 max-w-2xl text-slate">
                Short, neutral notes on where each city sits, how people get around, and the kinds of homes that are typical. Every community is open to every buyer.
              </p>
            </div>
            <Link href="/communities" className="font-semibold text-navy underline decoration-orange/70 underline-offset-4">
              All communities
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((community) => (
              <li key={community.slug}>
                <Link href={`/communities/${community.slug}`} className="block overflow-hidden rounded-3xl border border-line bg-white">
                  <div className={`h-28 bg-gradient-to-br ${community.gradient}`} aria-hidden="true" />
                  <div className="p-5">
                    <h3 className="text-2xl text-navy">{community.name}</h3>
                    <p className="mt-1 text-sm text-muted">{community.county}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-navy p-7 text-white sm:p-9">
            <h2 className="text-3xl text-white">Reviews you can read yourself</h2>
            <p className="mt-4 leading-relaxed text-white/85">
              The team is rated 4.9 stars from 150 reviews on Zillow. Sanjeev has 165+ Google reviews. This site does not reprint private comments.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={site.zillowUrl} rel="noopener" className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 font-semibold text-navy">
                Zillow profile
              </a>
              <Link href="/reviews" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 font-semibold text-white">
                Review links
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-orange/40 bg-[#fff8f3] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">Languages</p>
            <h2 className="mt-3 text-3xl text-navy">An Indian realtor in Orlando and Central Florida</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Sanjeev works in English, Hindi, Punjabi, and Urdu. He has called Central Florida home since 1999 and welcomes clients of every background.
            </p>
            <Link href="/indian-realtor-orlando" className="mt-6 inline-flex min-h-11 items-center font-semibold text-navy underline decoration-orange underline-offset-4">
              Read more
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-14 text-white sm:py-16">
        <Container>
          <h2 className="text-3xl text-white sm:text-4xl">Talk with Sanjeev</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Call or text {site.phoneDisplay}, or email {site.email}. He is a Broker Associate with eXp Realty LLC, license {site.license}.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneTel} className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 font-semibold text-navy">
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 font-semibold text-white">
              Contact form
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
