import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { RelatedPages } from "@/components/RelatedPages";
import { SocialLinks } from "@/components/SocialLinks";
import { Container, PageHero, Portrait, ReachSanjeev } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact a Lake Mary Realtor",
  description:
    "Contact Lake Mary realtor Sanjeev Malik at (321) 297-3009 or sanjeev.malik@gmail.com. Broker Associate, eXp Realty LLC.",
  path: "/contact",
  absolute: true,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, email, or send a note."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />}
      >
        <p>
          Sanjeev Malik is a licensed real estate Broker Associate with eXp Realty LLC. The brokerage does not list a public storefront on this site. Meetings are by appointment.
        </p>
      </PageHero>
      <Container className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <div className="space-y-6">
          <ReachSanjeev />
          <Portrait className="mx-auto w-full max-w-sm" />
          <div className="rounded-3xl bg-white p-6">
            <h2 className="text-2xl text-navy">Phone</h2>
            <a href={site.phoneTel} className="mt-2 inline-flex text-lg font-semibold text-navy underline">
              {site.phoneDisplay}
            </a>
          </div>
          <div className="rounded-3xl bg-white p-6">
            <h2 className="text-2xl text-navy">Social</h2>
            <SocialLinks className="mt-3 text-navy" />
          </div>
          <div className="rounded-3xl bg-white p-6">
            <h2 className="text-2xl text-navy">Email</h2>
            <a href={`mailto:${site.email}`} className="mt-2 inline-flex break-all text-lg font-semibold text-navy underline">
              {site.email}
            </a>
          </div>
          <div className="rounded-3xl bg-white p-6 text-slate">
            <h2 className="text-2xl text-navy">Office</h2>
            <p className="mt-3 leading-relaxed">
              {site.agent}, {site.title}. Florida license {site.license}. {site.disclosure}
            </p>
            <p className="mt-3 leading-relaxed">
              eXp Realty is a brokerage. Reach Sanjeev by phone, text, or email, and he will set a time to meet. No street address is published on this website.
            </p>
          </div>
        </div>
        <LeadForm sourcePage="/contact" idPrefix="contact" heading="Contact form" />
        <div className="lg:col-span-2">
          <RelatedPages exclude="/contact" />
        </div>
      </Container>
    </>
  );
}
