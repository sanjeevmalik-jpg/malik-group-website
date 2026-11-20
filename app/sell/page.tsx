import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { LeadForm } from "@/components/LeadForm";
import { RelatedPages } from "@/components/RelatedPages";
import { btnPrimary, Container, JsonLd, PageHero } from "@/components/ui";
import { pageMeta, sellFaqs } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Sell My Home in Seminole County",
  description:
    "Sell my home in Seminole County with Sanjeev Malik. A home value and a clear plan. No promised price. Call (321) 297-3009.",
  path: "/sell",
  absolute: true,
});

export default function SellPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Home seller representation",
          description: "Seller representation, pricing conversations, and home valuations in Seminole County and Central Florida.",
          path: "/sell",
        })}
      />
      <PageHero
        eyebrow="Sell"
        title="A clear plan for selling, starting with a real value."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Sell", path: "/sell" }]} />}
      >
        <p>
          The useful first step is a current look at what comparable homes have sold for and what is listed now. Sanjeev will not promise a sale price on this page.
        </p>
      </PageHero>
      <Container className="grid gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <a href={site.valuationUrl} rel="noopener" className={btnPrimary}>
            What’s my home worth
          </a>
          <h2 className="mt-10 text-3xl text-navy">What to expect</h2>
          <ul className="mt-4 grid gap-4 text-slate">
            <li className="rounded-2xl bg-white p-4">A pricing conversation based on the house and the recent sales around it.</li>
            <li className="rounded-2xl bg-white p-4">Preparation notes before photographs and showings.</li>
            <li className="rounded-2xl bg-white p-4">A way to compare offers, including the terms, not only the number.</li>
            <li className="rounded-2xl bg-white p-4">Updates through closing.</li>
          </ul>
          <p className="mt-6 leading-relaxed text-slate">
            With his team, Sanjeev has helped 225+ families, including 30 sales in the last 12 months. Read the public reviews on the{" "}
            <Link href="/reviews" className="font-semibold text-navy underline">reviews page</Link>.
          </p>
        </div>
        <LeadForm
          sourcePage="/sell"
          idPrefix="sell"
          defaultDeal="seller"
          heading="Tell Sanjeev about the home"
          intro="Share how to reach you and a little about the property. He will follow up by phone or email."
        />
        <div className="lg:col-span-2">
          <FaqSection items={sellFaqs()} />
          <RelatedPages exclude="/sell" />
        </div>
      </Container>
    </>
  );
}
