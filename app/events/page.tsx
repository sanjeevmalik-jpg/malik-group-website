import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EventsBrowser } from "@/components/EventsBrowser";
import { Container, JsonLd, PageHero } from "@/components/ui";
import { eventsLastUpdated, upcomingEvents, type CommunityEvent } from "@/lib/events";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const revalidate = 86400;

export const metadata = pageMeta({
  title: "Indian & South Asian Events in Central Florida | Sanjeev Malik",
  description:
    "Upcoming Indian and South Asian events in the Orlando area: temple programs, dance, and concerts, with links to the organizers.",
  path: "/events",
  absolute: true,
});

function eventSchema(event: CommunityEvent) {
  const start = event.startTime ? `${event.date}T${to24(event.startTime)}` : event.date;
  return {
    "@type": "Event",
    name: event.title,
    startDate: start,
    endDate: event.endDate || event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.city,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    description: event.description,
    url: event.sourceUrl,
    offers: event.price
      ? { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock", description: event.price }
      : undefined,
  };
}

function to24(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return "00:00:00";
  let hour = Number(match[1]) % 12;
  if (match[3].toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${match[2]}:00`;
}

export default function EventsPage() {
  const events = upcomingEvents();
  const updated = new Date(`${eventsLastUpdated}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": events.map(eventSchema),
        }}
      />
      <PageHero
        eyebrow="Events"
        title="Indian and South Asian events in Central Florida."
        before={<Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Events", path: "/events" }]} />}
      >
        <p>
          A short list of public programs in the Orlando area, taken from organizer listings. Sanjeev Malik is a Broker Associate with {site.brokerage}.
        </p>
      </PageHero>
      <Container className="py-12 sm:py-16">
        <p className="text-sm font-semibold text-muted">Last updated {updated}</p>
        <p className="mt-2 max-w-3xl text-slate">
          Event details come from organizers&apos; public listings; please confirm with the organizer before attending.
        </p>
        <div className="mt-8">
          <EventsBrowser events={events} />
        </div>
      </Container>
    </>
  );
}
