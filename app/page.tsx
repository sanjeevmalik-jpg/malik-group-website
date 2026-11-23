import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { HeroBackground } from "@/components/HeroBackground";
import { RelatedPages } from "@/components/RelatedPages";
import { AgentCard } from "@/components/AgentCard";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Testimonials } from "@/components/Testimonials";
import { Container, CtaLinks, EmailAddress, PhoneWithText, Tagline } from "@/components/ui";
import { communities } from "@/lib/communities";
import { entitySummary, homeFaqs, pageMeta } from "@/lib/seo";
import { CAREER_START_YEAR, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Lake Mary Realtor | Sanjeev Malik",
  description:
    "Lake Mary realtor Sanjeev Malik helps you buy, sell, or relocate in Seminole County and Central Florida. Hindi, Punjabi, and Urdu. Call (321) 297-3009.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <HeroBackground />
        <Container className="relative z-10 pt-[16vh] pb-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white [text-shadow:0_2px_18px_rgba(16,36,63,0.55)]">
              Central Florida · eXp Realty
            </p>
            <h1 className="mt-3 text-4xl leading-[1.12] text-white [text-shadow:0_2px_18px_rgba(16,36,63,0.55)] sm:text-5xl lg:text-6xl">
              Central Florida real estate, with a guide who has lived here since 1999.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white [text-shadow:0_2px_18px_rgba(16,36,63,0.55)]">
              Sanjeev Malik is a Broker Associate with eXp Realty LLC and has been a Realtor since {CAREER_START_YEAR}. He has received five consecutive eXp Realty ICON Agent awards. He holds an MBA and a master’s degree in engineering, earned the GRI in 2016, and works in English, Hindi, Punjabi, and Urdu.
            </p>
            <p className="mt-3 text-base font-semibold text-white [text-shadow:0_2px_18px_rgba(16,36,63,0.55)]">{site.languages.join(" · ")}</p>
            <Tagline tone="light" accentClassName="text-[#ffb070]" className="mt-5" />
            <CtaLinks className="mt-7" tone="onDark" />
          </div>
        </Container>
      </section>

      <CredibilityStrip />

      <section id="about-sanjeev" className="border-t border-line bg-white">
        <Container className="grid items-start gap-10 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-20">
          <AgentCard />
          <div className="space-y-5 text-lg leading-[1.7] text-slate">
            <h2 className="text-3xl text-navy sm:text-4xl">About Sanjeev Malik</h2>
            <p>{entitySummary()}</p>
            <p>
              The engineering background shows up in how he reads a house and a contract. He looks at the property, the numbers, and the terms, then explains the choice in plain language. Negotiation stays practical: what the offer says, what it leaves open, and what happens next.
            </p>
            <p>
              He helps people buy, sell, and invest, including first-time buyers, in {site.areas.join(", ")}, across {site.counties.join(", ")} counties. He works with clients of every background and does not describe a place by who lives there.
            </p>
            <p>
              With his team he has helped 225+ families buy or sell, including 30 sales in the last 12 months. The team is rated 4.9 stars from 150 reviews on Zillow. Sanjeev has 160+ Google reviews. Those comments stay on the public profiles, and a few Zillow reviews are quoted below without edits.
            </p>
          </div>
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
                link: "How buying a home works",
              },
              {
                href: "/sell",
                title: "Sell",
                text: "Start with a home value, then a clear pricing conversation and a plan through closing. No promised sale price.",
                link: "How selling a home works",
              },
              {
                href: "/relocation",
                title: "Relocate",
                text: "Compare Lake Mary, Sanford, Oviedo, Deltona, and the other communities Sanjeev serves before you spend a weekend driving.",
                link: "Relocation help in Orlando",
              },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
                <h3 className="text-2xl text-navy">{card.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate">{card.text}</p>
                <span className="mt-5 text-sm font-semibold text-orange-deep">{card.link}</span>
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

      <Testimonials />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-orange/40 bg-[#fff8f3] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">Languages</p>
            <h2 className="mt-3 text-3xl text-navy">An Indian realtor in Orlando and Central Florida</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Sanjeev works in English, Hindi, Punjabi, and Urdu. He has called Central Florida home since 1999 and welcomes clients of every background.
            </p>
            <Link href="/indian-realtor-orlando" className="mt-6 inline-flex min-h-11 items-center font-semibold text-navy underline decoration-orange underline-offset-4">
              Hindi, Punjabi, and Urdu speaking realtor
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-14 text-white sm:py-16">
        <Container>
          <h2 className="text-3xl text-white sm:text-4xl">Talk with Sanjeev</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Call or text <PhoneWithText tone="light" />, or email <EmailAddress tone="light" />. He is a Broker Associate with eXp Realty LLC, license {site.license}.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneTel} aria-label={`Call ${site.phoneDisplay}`} className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 font-semibold text-navy">
              Call {site.phoneDisplay}
            </a>
            <a href={site.smsTel} aria-label={`Text ${site.phoneDisplay}`} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 font-semibold text-white">
              Text {site.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 font-semibold text-white">
              Contact form
            </Link>
          </div>
        </Container>
      </section>
      <Container className="pb-16">
        <FaqSection items={homeFaqs()} />
        <RelatedPages />
      </Container>
    </>
  );
}
