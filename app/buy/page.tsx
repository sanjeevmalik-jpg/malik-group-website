import Link from "next/link";
import { Container, CtaLinks, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { CAREER_START_YEAR, site, yearsAsRealtor } from "@/lib/site";

export const metadata = pageMeta({
  title: "Buy a Home in Central Florida",
  description:
    "Search Central Florida homes with Sanjeev Malik. Showings, offers, and closing help in English, Hindi, Punjabi, and Urdu.",
  path: "/buy",
});

const steps = [
  {
    title: "A first conversation",
    text: "We talk about timing, budget, and the communities you want to consider. That conversation can be in English, Hindi, Punjabi, or Urdu.",
  },
  {
    title: "A search you can act on",
    text: "Current listings are on the eXp search. I can help you narrow Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando.",
  },
  {
    title: "Showings and an offer",
    text: "We look at the houses, then write an offer around the inspection, financing, and closing terms that matter to you.",
  },
  {
    title: "Through closing",
    text: "I stay with the inspection, the loan timeline, and the questions that come up before you get the keys.",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero eyebrow="Buy" title="Search Central Florida homes with a local guide.">
        <p>
          Sanjeev Malik has lived here since 1999 and has been a Realtor since {CAREER_START_YEAR} ({yearsAsRealtor()} years). Start with the listings, then tell him what the house needs to do.
        </p>
      </PageHero>
      <Container className="py-12 sm:py-16">
        <CtaLinks />
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-line bg-white p-6">
              <p className="text-sm font-semibold text-orange-deep">0{index + 1}</p>
              <h2 className="mt-2 text-2xl text-navy">{step.title}</h2>
              <p className="mt-3 leading-relaxed text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl leading-relaxed text-slate">
          Moving from another city? The <Link href="/relocation" className="font-semibold text-navy underline">relocation guide</Link> covers how to compare communities before a visit. You can also call {site.phoneDisplay}.
        </p>
      </Container>
    </>
  );
}
