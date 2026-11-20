import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/RelatedPages";
import { btnPrimary, btnSecondary, Container, PageHero } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Sanjeev Malik Reviews on Zillow",
  description:
    "Read Sanjeev Malik’s public reviews: 4.9 stars from 150 Zillow reviews, and 165+ Google reviews. Malik Group does not rewrite them here.",
  path: "/reviews",
  absolute: true,
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Public reviews, linked rather than rewritten."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />}
      >
        <p>
          These numbers come from public profiles. This page does not add testimonials, and it does not edit what clients wrote.
        </p>
      </PageHero>
      <Container className="grid gap-5 py-12 md:grid-cols-2 sm:py-16">
        <article className="rounded-3xl bg-white p-7">
          <p className="font-display text-5xl text-navy">4.9</p>
          <h2 className="mt-3 text-2xl text-navy">Zillow</h2>
          <p className="mt-3 leading-relaxed text-slate">
            4.9 stars from 150 reviews on the Sanjeev Malik Team profile. The rating is the team’s, as published on Zillow.
          </p>
          <a href={site.zillowUrl} rel="noopener" className={`${btnPrimary} mt-6`}>
            View the Zillow profile
          </a>
        </article>
        <article className="rounded-3xl bg-white p-7">
          <p className="font-display text-5xl text-navy">165+</p>
          <h2 className="mt-3 text-2xl text-navy">Google reviews</h2>
          <p className="mt-3 leading-relaxed text-slate">
            Sanjeev has 165+ Google reviews. A direct Google Business Profile link was not part of the verified details for this site, so the button below opens a Google search for his name and brokerage.
          </p>
          <a href={site.googleSearchUrl} rel="noopener" className={`${btnSecondary} mt-6`}>
            Search Google reviews
          </a>
        </article>
        <div className="md:col-span-2">
          <RelatedPages exclude="/reviews" />
        </div>
      </Container>
    </>
  );
}
