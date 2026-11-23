import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">Reviews</p>
        <h2 className="mt-3 max-w-3xl text-3xl text-navy sm:text-4xl">What clients wrote, in their words</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate">
          The team is rated 4.9 stars from 150 reviews on Zillow. Sanjeev has 160+ Google reviews. The comments below are public Zillow reviews, quoted without edits.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="flex flex-col rounded-3xl border border-line bg-cream p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-deep">{item.source}</p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-navy">“{item.pull}”</h3>
              <p className="mt-4 flex-1 text-slate">{item.quote}</p>
              <p className="mt-5 font-semibold text-navy">
                {item.name}
                <span className="font-normal text-slate"> · {item.detail}</span>
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.zillowUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 font-semibold text-white"
          >
            Read all Zillow reviews
          </a>
          <a
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/20 bg-white px-5 font-semibold text-navy"
          >
            Read Google reviews
          </a>
          <Link href="/reviews" className="inline-flex min-h-11 items-center justify-center px-2 font-semibold text-navy underline decoration-orange underline-offset-4">
            Review links
          </Link>
        </div>
      </div>
    </section>
  );
}
