import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { RelatedPages } from "@/components/RelatedPages";
import { Container, CtaLinks, JsonLd, PageHero } from "@/components/ui";
import { buyFaqs, pageMeta } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { CAREER_START_YEAR, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Buy a Home in Central Florida",
  description:
    "Buy a home in Lake Mary, Sanford, or Orlando with Sanjeev Malik, eXp Realty. Showings and offers in English, Hindi, Punjabi, or Urdu.",
  path: "/buy",
  absolute: true,
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
      <JsonLd
        data={serviceSchema({
          name: "Home buyer representation",
          description: "Buyer representation for Central Florida home searches, showings, offers, and closing.",
          path: "/buy",
        })}
      />
      <PageHero
        eyebrow="Buy"
        title="Search Central Florida homes with a local guide."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Buy", path: "/buy" }]} />}
      >
        <p>
          Sanjeev Malik has lived here since 1999 and has been a Realtor since {CAREER_START_YEAR}. Start with the listings, then tell him what the house needs to do.
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
          Moving from another city? The <Link href="/relocation" className="font-semibold text-navy underline">relocation realtor guide</Link> covers how to compare communities before a visit. You can also call {site.phoneDisplay}.
        </p>
        <FaqSection items={buyFaqs()} />
        <RelatedPages exclude="/buy" />
      </Container>
    </>
  );
}
