import eventsFile from "@/data/events.json";

export type CommunityEvent = {
  title: string;
  date: string;
  endDate: string | null;
  startTime: string | null;
  endTime: string | null;
  venue: string;
  city: string;
  category: string;
  description: string;
  price: string | null;
  sourceUrl: string;
  lastVerified: string;
};

export const eventsLastUpdated = eventsFile.lastUpdated;

const events = eventsFile.events as CommunityEvent[];

export function easternToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(now);
}

export function isUpcoming(event: CommunityEvent, today = easternToday()): boolean {
  return (event.endDate || event.date) >= today;
}

export function upcomingEvents(now = new Date()): CommunityEvent[] {
  const today = easternToday(now);
  return events
    .filter((event) => isUpcoming(event, today))
    .sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
}

export function formatEventDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function monthLabel(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}
