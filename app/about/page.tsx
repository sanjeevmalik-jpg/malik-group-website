import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/RelatedPages";
import { AboutContactLinks, Container, CtaLinks, IconAgentBadge, PageHero, Portrait } from "@/components/ui";
import { entitySummary, pageMeta } from "@/lib/seo";
import { CAREER_START_YEAR, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Sanjeev Malik, MBA, GRI",
  description:
    "About Sanjeev Malik, MBA, GRI, a Central Florida Realtor since 2014 with eXp Realty. English, Hindi, Punjabi, and Urdu. License BK3313715.",
  path: "/about",
  absolute: true,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="I have called Central Florida home since 1999."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />}
      >
        <p>
          <strong className="text-navy">About Sanjeev Malik. </strong>
          {entitySummary()}
        </p>
        <AboutContactLinks />
        <p className="mt-4">
          I am Sanjeev Malik, a Broker Associate with eXp Realty LLC. I have been a Realtor since {CAREER_START_YEAR}. My Florida license number is {site.license}.
        </p>
      </PageHero>
      <Container className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div>
          <Portrait priority />
          <div className="mt-4 flex items-center gap-3">
            <IconAgentBadge className="h-12 w-auto" />
            <p className="text-base font-semibold text-navy">eXp Realty ICON Agent</p>
          </div>
        </div>
        <div className="space-y-10 text-lg leading-relaxed text-slate">
          <section>
            <h2 className="text-3xl text-navy">A neighbor, and a father</h2>
            <p className="mt-4">
              I am a husband and a father of two teenagers. Many of the moves I help with affect a whole household, so I try to keep the steps plain: what we are looking at, what it will take, and what happens next.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-navy">Training I use on the house and the contract</h2>
            <p className="mt-4">
              I earned a Bachelor of Science in Civil Engineering, a Master of Science in Environmental Engineering, a Master of Science in Computer Science, and an MBA from the University of Central Florida. I also earned the GRI (Graduate, REALTOR® Institute) designation in 2016.
            </p>
            <p className="mt-4">
              That mix helps when you want to talk about the house itself and the paperwork. I still explain showings, inspections, lending, and closing in ordinary language. We can do that in English, Hindi, Punjabi, or Urdu.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-navy">The work so far</h2>
            <p className="mt-4">
              With my team, I have helped 225+ families buy or sell, including 30 sales in the last 12 months. Clients have rated the team 4.9 stars from 150 reviews on Zillow, and I have 165+ Google reviews. Those reviews are public. I do not rewrite them here.
            </p>
          </section>
          <section>
            <h2 className="text-3xl text-navy">Where I work</h2>
            <p className="mt-4">
              I help buyers and sellers in {site.areas.join(", ")}, and throughout {site.counties.join(", ")} counties.
            </p>
            <CtaLinks className="mt-6" />
            <RelatedPages exclude="/about" />
          </section>
        </div>
      </Container>
    </>
  );
}
