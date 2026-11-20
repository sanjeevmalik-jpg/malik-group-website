import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { RelatedPages } from "@/components/RelatedPages";
import { Container, CtaLinks, JsonLd, PageHero } from "@/components/ui";
import { communities } from "@/lib/communities";
import { pageMeta, relocationFaqs } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Relocation Realtor in Orlando",
  description:
    "Relocation realtor for Orlando and Central Florida. Compare Lake Mary, Sanford, Oviedo, and Deltona with Sanjeev Malik. Call (321) 297-3009.",
  path: "/relocation",
  absolute: true,
});

export default function RelocationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Central Florida relocation",
          description: "Relocation help comparing Central Florida cities, scheduling showings, and buying before a move.",
          path: "/relocation",
        })}
      />
      <PageHero
        eyebrow="Relocation"
        title="Moving to Central Florida, without guessing from a map."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Relocation", path: "/relocation" }]} />}
      >
        <p>
          Sanjeev has lived here since 1999. If you are moving for work, or buying while you are still somewhere else, he can help you sort commute, home style, and the communities he actually serves.
        </p>
      </PageHero>
      <Container className="space-y-12 py-12 sm:py-16">
        <section>
          <h2 className="text-3xl text-navy">A simple way to narrow the map</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-6">
              <h3 className="text-2xl text-navy">Seminole County</h3>
              <p className="mt-3 leading-relaxed text-slate">
                Lake Mary, Sanford, Longwood, Winter Springs, and Oviedo. I-4 and State Road 417 are the longer drives. SunRail stops in Sanford, Lake Mary, and Longwood.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6">
              <h3 className="text-2xl text-navy">Volusia County</h3>
              <p className="mt-3 leading-relaxed text-slate">
                Deltona, DeBary, and DeLand. Buyers often look here for a different price range while staying within reach of the I-4 corridor. DeBary has a SunRail station.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6">
              <h3 className="text-2xl text-navy">Orange County</h3>
              <p className="mt-3 leading-relaxed text-slate">
                Orlando is the employment and airport center of the region. Housing runs from in-town neighborhoods and condominiums to newer communities farther out.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-6">
              <h3 className="text-2xl text-navy">Osceola County</h3>
              <p className="mt-3 leading-relaxed text-slate">
                South of Orlando, on the same regional road network. Sanjeev can tell you whether a search just outside his core cities is one he can take on.
              </p>
            </article>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate">
            He does not describe these places by who lives there. Commute, new construction versus an older neighborhood, and the specific addresses you care about are the useful comparisons.
          </p>
        </section>
        <section>
          <h2 className="text-3xl text-navy">If you are not here yet</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            A first call can happen before any visit. Sanjeev can line up a short list, time showings to the days you are in town, and send updates if you are buying from another state or from overseas. The same is true for sellers who are already gone.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            Florida does not levy a state personal income tax. That is a general fact about the state, not a prediction of what a particular house will cost. Property taxes, insurance, and association dues depend on the property, and this page does not estimate them.
          </p>
        </section>
        <section>
          <h2 className="text-3xl text-navy">Communities to read first</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {communities.map((community) => (
              <li key={community.slug}>
                <Link href={`/communities/${community.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-white px-4 font-semibold text-navy">
                  {community.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate">Languages: {site.languages.join(", ")}.</p>
          <CtaLinks className="mt-6" />
        </section>
        <FaqSection items={relocationFaqs()} />
        <RelatedPages exclude="/relocation" />
      </Container>
    </>
  );
}
