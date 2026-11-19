import { Container, CtaLinks, PageHero, PhotoSlot } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Sanjeev Malik",
  description:
    "Sanjeev Malik has lived in Central Florida since 1999 and has 12 years in real estate. Broker Associate, eXp Realty. MBA from UCF. License BK3313715.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="I have called Central Florida home since 1999.">
        <p>
          I am Sanjeev Malik, a Broker Associate with eXp Realty LLC. I have worked in real estate for 12 years. My Florida license number is {site.license}.
        </p>
      </PageHero>
      <Container className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <PhotoSlot label="portrait of Sanjeev Malik" className="min-h-80 bg-gradient-to-br from-[#d5e2f0] via-cream to-[#f3d0b2]">
          <svg viewBox="0 0 320 280" className="h-full w-full" aria-hidden="true">
            <circle cx="160" cy="108" r="46" fill="#1a365d" />
            <path d="M70 250c18-52 48-76 90-76s72 24 90 76" fill="#1a365d" />
            <path d="M40 70h240" stroke="#e07834" strokeWidth="10" />
          </svg>
        </PhotoSlot>
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
          </section>
        </div>
      </Container>
    </>
  );
}
