import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Container, CtaLinks, JsonLd } from "@/components/ui";
import { indianAgentSchema, indianFaqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Indian Realtor in Orlando | Sanjeev Malik",
  description:
    "Hindi- and Punjabi-speaking Indian realtor in Orlando and Central Florida. Sanjeev Malik, eXp Realty. 4.9 stars on Zillow. Call (321) 297-3009.",
  path: "/indian-realtor-orlando",
  absolute: true,
});

const faqs = [
  {
    q: "Are you an Indian realtor in Orlando and Central Florida?",
    a: "Yes. Sanjeev Malik is a Broker Associate with eXp Realty and an Indian realtor serving Orlando and Central Florida. He has lived here since 1999 and has 12 years of real estate experience. He works with clients of every background and is glad to help in English, Hindi, Punjabi, or Urdu.",
  },
  {
    q: "Do you speak Hindi and Punjabi?",
    a: "Yes. Sanjeev is a Hindi speaking realtor and a Punjabi speaking realtor, and he also works in English and Urdu. You can ask questions, review offers, and walk through inspections in the language that feels most comfortable.",
  },
  {
    q: "Which areas do you serve?",
    a: "He serves Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando, as well as Seminole, Volusia, Orange, and Osceola counties. If you are looking just outside those communities, reach out and he can tell you whether he can help.",
  },
  {
    q: "Can you help with vastu-friendly layouts or a home for parents?",
    a: "Yes, when that is important to you. Sanjeev can help you evaluate floor plans, orientation, and homes with space for multigenerational living, including in-law suites. He can also help you consider drive times to temples, gurdwaras, and grocery stores you care about. He will not steer you to a neighborhood based on ethnicity or who lives there.",
  },
  {
    q: "Do you work with H-1B families, first-time buyers, and NRIs?",
    a: "Yes. Sanjeev regularly helps relocating H-1B, tech, and healthcare families, first-time buyers, NRIs and investors, and sellers. If you are moving from another state or buying from overseas, he will keep the process organized and easy to follow.",
  },
  {
    q: "How do I start a home search or find out what my home is worth?",
    a: "You can search homes now, request a home value, or call or text Sanjeev at (321) 297-3009. You can also email sanjeev.malik@exprealty.com.",
  },
];

export default function IndianRealtorPage() {
  return (
    <>
      <JsonLd data={indianFaqSchema} />
      <JsonLd data={indianAgentSchema} />
      <header className="border-b border-line bg-white">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">
            English · Hindi · Punjabi · Urdu
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-navy sm:text-5xl">
            Indian Realtor in Orlando & Central Florida
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
            Sanjeev Malik is a Broker Associate with eXp Realty who has called Central Florida home since 1999. He helps families buy and sell in English, Hindi, Punjabi, and Urdu — with the same care he would want for his own.
          </p>
          <CtaLinks className="mt-7" searchLabel="Search Homes" valueLabel="What’s My Home Worth" />
        </Container>
      </header>

      <Container className="space-y-14 py-12 sm:py-16">
        <section>
          <h2 className="text-3xl text-navy">Why Work With Sanjeev</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate">
            Looking for an Indian realtor in Orlando, a Hindi speaking realtor, or a Punjabi speaking realtor in Central Florida should feel straightforward. Sanjeev offers language, local knowledge, and a calm, practical process — and he welcomes clients of every background.
          </p>
          <ul className="mt-6 grid gap-4">
            <li className="rounded-3xl bg-white p-6 leading-relaxed text-slate">
              <strong className="text-navy">A neighbor, not just an agent.</strong> Sanjeev has lived in Central Florida since 1999 and has been a real estate professional for 12 years. He is a husband and a father of two teenagers, so he understands what a family move actually involves.
            </li>
            <li className="rounded-3xl bg-white p-6 leading-relaxed text-slate">
              <strong className="text-navy">A clear, well-trained advisor.</strong> He holds an MBA from the University of Central Florida, a Master of Science in Environmental Engineering, a Master of Science in Computer Science, and a Bachelor of Science in Civil Engineering, and he earned the GRI (Graduate, REALTOR® Institute) designation in 2016. That mix of education is useful when you want someone who can talk through a house as well as a contract.
            </li>
            <li className="rounded-3xl bg-white p-6 leading-relaxed text-slate">
              <strong className="text-navy">Language that makes the process easier.</strong> Conversations can happen in English, Hindi, Punjabi, or Urdu, so questions about inspections, lending, or negotiations do not get lost in translation.
            </li>
            <li className="rounded-3xl bg-white p-6 leading-relaxed text-slate">
              <strong className="text-navy">Culturally aware, never one-size-fits-all.</strong> If it matters to your household, Sanjeev can help you evaluate vastu-friendly layouts (for example, entry, kitchen, and room orientation as you define them), homes that work for multigenerational living, including in-law suites, and drive times to temples, gurdwaras, and Indian grocery stores. Those preferences are yours. He will not steer anyone toward or away from a neighborhood based on who lives there.
            </li>
            <li className="rounded-3xl bg-white p-6 leading-relaxed text-slate">
              <strong className="text-navy">Everyday conveniences, named only where they can be confirmed.</strong> Central Florida has established places of worship and grocers that many clients ask about, including the{" "}
              <a href="https://orlandohindutemple.org/" rel="noopener" className="font-semibold text-navy underline">
                Hindu Society of Central Florida
              </a>{" "}
              in Casselberry,{" "}
              <a href="https://orlandogurudwara.com/" rel="noopener" className="font-semibold text-navy underline">
                Sikh Society of Central Florida
              </a>{" "}
              in Oviedo,{" "}
              <a href="https://www.sikhgurdwaraorlando.com/" rel="noopener" className="font-semibold text-navy underline">
                Sikh Gurdwara Orlando
              </a>
              , and Indian grocery stores such as{" "}
              <a href="https://spicelandstore.com/" rel="noopener" className="font-semibold text-navy underline">
                Spiceland
              </a>{" "}
              in Lake Mary. If a particular place is on your list, he can help you look at commute and daily convenience alongside the home itself.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl text-navy">Who I Help</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            Sanjeev works with buyers and sellers throughout Central Florida. He is glad to help anyone, including:
          </p>
          <ul className="mt-4 grid gap-3 text-slate">
            <li>
              <strong className="text-navy">Relocating H-1B, tech, and healthcare families</strong> who need a grounded introduction to schools, commutes, and neighborhoods after a job move to the Orlando area.
            </li>
            <li>
              <strong className="text-navy">First-time buyers</strong> who want the process explained clearly, from showings and inspections to the loan and closing.
            </li>
            <li>
              <strong className="text-navy">NRIs and investors</strong> buying or selling from out of town or overseas who need timely updates, careful due diligence, and a trusted local presence.
            </li>
            <li>
              <strong className="text-navy">Sellers</strong> who want a clear pricing plan, thoughtful preparation, and steady communication through closing.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl text-navy">Communities I Serve in Central Florida</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-slate">
            <p>
              Sanjeev helps clients in <strong>Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando</strong>, and throughout <strong>Seminole, Volusia, Orange, and Osceola</strong> counties. As an Indian realtor in Sanford and Lake Mary — and across the wider Orlando metro — he can walk you through the practical differences between these communities: commute, home styles, new construction versus established neighborhoods, and school zoning.
            </p>
            <p>
              He does not describe or recommend areas by the people who live there. Every community on this list is open to every buyer. What he can share are facts that help you decide for yourself.
            </p>
            <h3 className="pt-2 text-2xl text-navy">Schools in Seminole County</h3>
            <p>
              Lake Mary, Sanford, Longwood, Winter Springs, and Oviedo are served by Seminole County Public Schools. The district earned an A grade from the Florida Department of Education for the 2025–2026 school year, ranked first among Central Florida districts, and ranked 11th of Florida’s 67 districts. School assignment is based on the home’s address. Sanjeev can help you confirm zoning for any property you are considering.
            </p>
            <h3 className="pt-2 text-2xl text-navy">A few orientation notes, kept general</h3>
            <ul className="grid gap-3">
              <li>
                <strong className="text-navy">Lake Mary, Longwood, Winter Springs, and Oviedo</strong> are Seminole County communities with suburban neighborhoods, access to I-4 or State Road 417, and the school district noted above.
              </li>
              <li>
                <strong className="text-navy">Sanford</strong>, the Seminole County seat, has a historic downtown and a waterfront along Lake Monroe, with SunRail service and a mix of older homes and newer construction.
              </li>
              <li>
                <strong className="text-navy">Orlando and Orange County</strong> offer a wide range of housing, from established in-town neighborhoods to newer communities, with access to major employment and the airport.
              </li>
              <li>
                <strong className="text-navy">Deltona, DeBary, and DeLand</strong> in Volusia County are often a fit for buyers who want more space or a different price point while remaining in reach of the I-4 corridor and the rest of Central Florida.
              </li>
            </ul>
            <p>
              If temples, gurdwaras, Indian grocery stores, or a particular commute are part of your own criteria, bring that list. Sanjeev will help you weigh it with the rest of what matters to you — without treating any city as belonging to one community.
            </p>
            <p>
              <Link href="/communities" className="font-semibold text-navy underline">
                Community pages
              </Link>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl text-navy">Proof You Can Check</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate">
            Sanjeev and his team have helped <strong>225+ families</strong> buy or sell, including <strong>30 homes in the last 12 months</strong>. Clients have rated the team <strong>4.9 stars from 150 reviews on Zillow</strong>, and Sanjeev has <strong>165+ Google reviews</strong>.
          </p>
          <ul className="mt-4 grid gap-2 text-slate">
            <li>
              <Link href="/reviews" className="font-semibold text-navy underline">
                Read Google reviews
              </Link>
            </li>
            <li>
              <a href={site.zillowUrl} rel="noopener" className="font-semibold text-navy underline">
                Read Zillow reviews
              </a>
            </li>
            <li>
              <a href={site.zillowUrl} rel="noopener" className="font-semibold text-navy underline">
                View Sanjeev’s Zillow profile
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl text-navy">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-3xl bg-white p-5">
                <summary className="cursor-pointer text-lg font-semibold text-navy">{item.q}</summary>
                <p className="mt-3 leading-relaxed text-slate">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-slate">
            To start,{" "}
            <a href={site.searchUrl} rel="noopener" className="font-semibold text-navy underline">
              search homes
            </a>
            , request a{" "}
            <a href={site.valuationUrl} rel="noopener" className="font-semibold text-navy underline">
              home value
            </a>
            , call or text{" "}
            <a href={site.phoneTel} className="font-semibold text-navy underline">
              (321) 297-3009
            </a>
            , or email{" "}
            <a href="mailto:sanjeev.malik@exprealty.com" className="font-semibold text-navy underline">
              sanjeev.malik@exprealty.com
            </a>
            .
          </p>
        </section>

        <section className="rounded-3xl bg-navy p-7 text-white sm:p-9">
          <h2 className="text-3xl text-white">Let’s Talk</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/85">
            When you are ready to buy or sell, Sanjeev would be glad to hear what you are looking for — in English, Hindi, Punjabi, or Urdu.
          </p>
          <p className="mt-4 font-semibold">Sanjeev Malik</p>
          <p>Broker Associate, eXp Realty</p>
          <p>Indian realtor in Orlando, Sanford, Lake Mary, and Central Florida</p>
          <p className="mt-3">
            <a href={site.phoneTel} className="underline">
              (321) 297-3009
            </a>
            <br />
            <a href="mailto:sanjeev.malik@exprealty.com" className="underline">
              sanjeev.malik@exprealty.com
            </a>
          </p>
          <CtaLinks className="mt-6" searchLabel="Search Homes" valueLabel="What’s My Home Worth" />
        </section>

        <LeadForm
          sourcePage="/indian-realtor-orlando"
          idPrefix="indian"
          heading="Send a note"
          intro="Write in the language that is easiest. Sanjeev can reply in English, Hindi, Punjabi, or Urdu."
        />

        <p className="text-sm leading-relaxed text-muted">
          Sanjeev Malik is pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity. He welcomes clients of every race, color, religion, sex, disability, familial status, national origin, and background.
        </p>
      </Container>
    </>
  );
}
