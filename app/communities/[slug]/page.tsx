import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { NearbyCommunities, RelatedPages } from "@/components/RelatedPages";
import { Container, CtaLinks, PhotoSlot } from "@/components/ui";
import { communities, getCommunity } from "@/lib/communities";
import { areaDescription, areaFaqs, areaTitle, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) return {};
  return pageMeta({
    title: areaTitle(community),
    description: areaDescription(community),
    path: `/communities/${community.slug}`,
    absolute: true,
  });
}

export default async function CommunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) notFound();

  const sections = [
    ["Location", community.location],
    ["Getting around", community.gettingAround],
    ["Around town", community.aroundTown],
    ["Homes", community.homes],
  ] as const;

  return (
    <>
      <header className="border-b border-line bg-white">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Communities", path: "/communities" },
              { name: community.name, path: `/communities/${community.slug}` },
            ]}
          />
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">{community.county}</p>
          <h1 className="mt-3 text-4xl text-navy sm:text-5xl">{community.name}, Florida</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{community.overview}</p>
        </Container>
      </header>
      <Container className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <PhotoSlot label={`a photograph of ${community.name}`} className={`bg-gradient-to-br ${community.gradient}`}>
          <svg viewBox="0 0 360 260" className="h-full w-full" aria-hidden="true">
            <path d="M20 200 110 110l30 28V80h50v70l70 60H20z" fill="#1a365d" opacity="0.85" />
            <path d="M120 130 170 84l16 14V70h28v30l36 34h-18l-30-28-16 16-20-18z" fill="#e07834" />
            <path d="M0 210h360" stroke="#1a365d" strokeOpacity="0.25" strokeWidth="8" />
          </svg>
        </PhotoSlot>
        <div className="space-y-8">
          {sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="text-2xl text-navy">{title}</h2>
              <p className="mt-2 leading-relaxed text-slate">{text}</p>
            </section>
          ))}
          <p className="leading-relaxed text-slate">
            School assignment, when it matters to you, is based on the property address. Confirm it with the school district for any house you are considering. Sanjeev does not describe {community.name} by who lives there.
          </p>
          <CtaLinks />
          <p>
            <Link href="/communities" className="font-semibold text-navy underline">
              All Central Florida communities
            </Link>
          </p>
        </div>
      </Container>
      <Container className="pb-16">
        <FaqSection items={areaFaqs(community)} />
        <NearbyCommunities current={community} />
        <RelatedPages />
      </Container>
    </>
  );
}
