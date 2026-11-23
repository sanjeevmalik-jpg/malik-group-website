import { IconAgentBadge } from "@/components/ui";
import { CAREER_START_YEAR, site } from "@/lib/site";

const tile = "flex h-full flex-col justify-center rounded-3xl border border-line bg-white p-5 shadow-sm";
const feature = "flex h-full flex-col justify-center rounded-3xl bg-navy p-6 text-white shadow-sm lg:row-span-2";

export function CredibilityStrip() {
  return (
    <section className="border-b border-line bg-cream py-10 sm:py-14" aria-label="Record">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
        <a className={feature} href="#about-sanjeev">
          <IconAgentBadge size={200} className="rounded-lg bg-white p-1" />
          <p className="mt-4 whitespace-nowrap font-display text-lg font-semibold leading-none text-white sm:text-2xl">
            5× Consecutive eXp
          </p>
          <p className="mt-3 text-lg font-semibold">Realty ICON Agent awards</p>
        </a>
        <a
          className={tile}
          href={site.zillowUrl}
          target="_blank"
          rel="noopener"
          aria-label="4.9 stars from 150 Zillow reviews, opens the Zillow team profile"
        >
          <p className="font-display text-4xl text-navy">4.9</p>
          <p className="mt-2 font-semibold text-navy">Zillow team rating</p>
          <p className="mt-1 text-slate">150 reviews on the Zillow team profile, November 2026.</p>
        </a>
        <a
          className={tile}
          href={site.googleBusinessUrl}
          target="_blank"
          rel="noopener"
          aria-label="160 plus Google reviews, opens the Google Business Profile"
        >
          <p className="font-display text-4xl text-navy">160+</p>
          <p className="mt-2 font-semibold text-navy">Google reviews</p>
          <p className="mt-1 text-slate">Read them on Sanjeev’s Google Business Profile.</p>
        </a>
        <div className={tile}>
          <p className="font-display text-4xl text-navy">225+</p>
          <p className="mt-2 font-semibold text-navy">Homes sold</p>
          <p className="mt-1 text-slate">30 sales in the last 12 months. Zillow shows 227 total team sales.</p>
        </div>
        <div className={tile}>
          <p className="font-display text-4xl text-navy">{CAREER_START_YEAR}</p>
          <p className="mt-2 font-semibold text-navy">Realtor since {CAREER_START_YEAR}</p>
          <p className="mt-1 text-slate">MBA and MS in engineering. GRI earned in 2016. Broker Associate, eXp Realty LLC.</p>
        </div>
      </div>
    </section>
  );
}
