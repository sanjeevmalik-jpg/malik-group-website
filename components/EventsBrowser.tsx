"use client";

import { useMemo, useState } from "react";
import { formatEventDate, isUpcoming, monthLabel, type CommunityEvent } from "@/lib/events";
import { site } from "@/lib/site";

export function EventsBrowser({ events }: { events: CommunityEvent[] }) {
  const [category, setCategory] = useState("All");
  const [city, setCity] = useState("All");
  const upcoming = useMemo(() => events.filter((event) => isUpcoming(event)), [events]);
  const categories = ["All", ...new Set(upcoming.map((event) => event.category))];
  const cities = ["All", ...new Set(upcoming.map((event) => event.city))];
  const visible = upcoming.filter(
    (event) => (category === "All" || event.category === category) && (city === "All" || event.city === city),
  );
  const months = [...new Set(visible.map((event) => event.date.slice(0, 7)))];

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Filter events">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${category === item ? "bg-navy text-white" : "border border-line bg-white text-navy"}`}
          >
            {item}
          </button>
        ))}
        {cities.map((item) => (
          <button
            key={`city-${item}`}
            type="button"
            aria-pressed={city === item}
            onClick={() => setCity(item)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${city === item ? "bg-orange-deep text-white" : "border border-line bg-white text-navy"}`}
          >
            {item === "All" ? "All cities" : item}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 rounded-3xl border border-line bg-white p-6 text-lg text-slate">
          No upcoming events match this filter. Check back after the next update, or ask Sanjeev what is on the calendar.
        </p>
      ) : (
        months.map((month) => (
          <section key={month} className="mt-10">
            <h2 className="text-3xl text-navy">{monthLabel(`${month}-01`)}</h2>
            <ul className="mt-5 grid gap-4">
              {visible
                .filter((event) => event.date.startsWith(month))
                .map((event) => (
                  <li key={`${event.date}-${event.title}`} className="rounded-3xl border border-line bg-white p-5 sm:p-6">
                    <div className="flex flex-wrap items-start gap-4">
                      <p className="inline-flex min-h-11 min-w-24 items-center justify-center rounded-2xl bg-navy px-3 text-center text-sm font-semibold text-white">
                        {formatEventDate(event.date)}
                      </p>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-deep">{event.category}</p>
                        <h3 className="mt-1 text-2xl text-navy">{event.title}</h3>
                        <p className="mt-2 text-slate">
                          {[event.startTime, event.endTime].filter(Boolean).join(" – ")}
                          {event.startTime ? " · " : ""}
                          {event.venue}, {event.city}
                        </p>
                        <p className="mt-3 leading-relaxed text-slate">{event.description}</p>
                        {event.price ? <p className="mt-2 text-sm font-semibold text-navy">{event.price}</p> : null}
                        <a
                          href={event.sourceUrl}
                          target="_blank"
                          rel="noopener"
                          className="mt-4 inline-flex min-h-11 items-center font-semibold text-navy underline decoration-orange underline-offset-4"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))
      )}
      <div className="mt-12 rounded-3xl bg-navy p-6 text-white sm:p-8">
        <h2 className="text-3xl text-white">Going with family or friends?</h2>
        <p className="mt-3 max-w-2xl text-white/90">
          Sanjeev can help you look at homes around the time you are in town. Call, text, or email.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={site.phoneTel} className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 font-semibold text-navy">
            Call {site.phoneDisplay}
          </a>
          <a href={site.smsTel} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 font-semibold text-white">
            Text {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 px-5 font-semibold text-white">
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
