import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-2.5 text-center text-base font-semibold text-white transition hover:bg-navy-deep";

export const btnSecondary =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-navy/15 bg-white px-5 py-2.5 text-center text-base font-semibold text-navy transition hover:border-navy/40 hover:bg-sand";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 3.75h2.1c.4 0 .75.28.84.67l.7 3.02a.9.9 0 0 1-.24.86L9.4 9.8a12.1 12.1 0 0 0 4.8 4.8l1.5-1.5a.9.9 0 0 1 .86-.24l3.02.7c.39.09.67.44.67.84v2.1c0 .5-.4.9-.9.9A14.1 14.1 0 0 1 6.6 4.65c0-.5.4-.9.9-.9Z"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v7A2.5 2.5 0 0 1 16.5 15H10l-3.6 2.7c-.5.4-1.2 0-1.2-.6V15h-.2A2.5 2.5 0 0 1 5 12.5v-7Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 6.25A2.25 2.25 0 0 1 6.75 4h10.5a2.25 2.25 0 0 1 2.25 2.25v11.5A2.25 2.25 0 0 1 17.25 20H6.75a2.25 2.25 0 0 1-2.25-2.25V6.25Zm1.7.9 5.8 3.87 5.8-3.87H6.2Zm11.55 1.55-6.1 4.07a1.1 1.1 0 0 1-1.2 0L4.35 8.7v9.05c0 .22.18.4.4.4h14.5a.4.4 0 0 0 .4-.4V8.7Z"
      />
    </svg>
  );
}

export function PhoneWithText({
  tone = "navy",
  label,
}: {
  tone?: "navy" | "light";
  label?: string;
}) {
  const color = tone === "light" ? "text-white decoration-white/70" : "text-navy decoration-orange/70";
  const link = `inline-flex min-h-11 items-center font-semibold underline underline-offset-4 ${color}`;
  return (
    <span className="inline-flex flex-wrap items-center gap-0.5 align-middle">
      <a href={site.phoneTel} aria-label={`Call ${site.phoneDisplay}`} className={`${link} px-0.5`}>
        {label ?? site.phoneDisplay}
      </a>
      <a
        href={site.smsTel}
        aria-label={`Text ${site.phoneDisplay}`}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${tone === "light" ? "text-white" : "text-navy"}`}
      >
        <ChatIcon />
        <span className="sr-only">Text {site.phoneDisplay}</span>
      </a>
    </span>
  );
}

export function EmailAddress({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const color = tone === "light" ? "text-white decoration-white/70" : "text-navy decoration-orange/70";
  return (
    <a
      href={`mailto:${site.email}`}
      aria-label={`Email ${site.email}`}
      className={`inline-flex min-h-11 items-center break-all font-semibold underline underline-offset-4 ${color}`}
    >
      {site.email}
    </a>
  );
}

export function AboutContactLinks({ className = "" }: { className?: string }) {
  const item =
    "inline-flex min-h-12 items-center gap-2 rounded-full py-2 text-base font-semibold text-navy underline decoration-orange/70 underline-offset-4";
  return (
    <ul className={`mt-4 flex flex-wrap gap-x-6 gap-y-1 ${className}`}>
      <li>
        <a href={site.phoneTel} aria-label={`Call ${site.phoneDisplay}`} className={item}>
          <PhoneIcon />
          Call {site.phoneDisplay}
        </a>
      </li>
      <li>
        <a href={site.smsTel} aria-label={`Text ${site.phoneDisplay}`} className={item}>
          <ChatIcon />
          Text {site.phoneDisplay}
        </a>
      </li>
      <li>
        <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className={`${item} break-all`}>
          <MailIcon />
          {site.email}
        </a>
      </li>
    </ul>
  );
}

export function ReachSanjeev({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      <a
        href={site.phoneTel}
        aria-label="Call Sanjeev at (321) 297-3009"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-3 text-center text-base font-semibold text-white"
      >
        <PhoneIcon />
        Call Sanjeev
      </a>
      <a
        href={site.smsTel}
        aria-label="Text Sanjeev at (321) 297-3009"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-deep px-3 text-center text-base font-semibold text-white"
      >
        <ChatIcon />
        Text Sanjeev
      </a>
    </div>
  );
}

export function CtaLinks({
  searchLabel = "Search Homes",
  valueLabel = "What’s my home worth",
  className = "",
  tone = "default",
}: {
  searchLabel?: string;
  valueLabel?: string;
  className?: string;
  tone?: "default" | "onDark";
}) {
  const primary =
    tone === "onDark"
      ? "inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-center text-base font-semibold text-navy transition hover:bg-cream"
      : btnPrimary;
  const secondary =
    tone === "onDark"
      ? "inline-flex min-h-11 items-center justify-center rounded-full border border-white/75 bg-white/10 px-5 py-2.5 text-center text-base font-semibold text-white transition hover:bg-white/20"
      : btnSecondary;
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <a href={site.searchUrl} rel="noopener" className={primary}>
        {searchLabel}
      </a>
      <a href={site.valuationUrl} rel="noopener" className={secondary}>
        {valueLabel}
      </a>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  before,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  before?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line bg-white">
      <Container className="py-12 sm:py-16">
        {before}
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-deep">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.15] text-navy sm:text-5xl">{title}</h1>
        {children ? <div className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{children}</div> : null}
      </Container>
    </header>
  );
}

export function NameWithCredentials({
  className = "",
  credentialsClassName = "text-slate",
}: {
  className?: string;
  credentialsClassName?: string;
}) {
  return (
    <span className={className}>
      {site.agent}
      <span className={`whitespace-nowrap align-baseline text-[0.55em] font-semibold ${credentialsClassName}`}>
        , MBA, GRI
      </span>
    </span>
  );
}

export function Portrait({
  priority = false,
  className = "",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-line bg-white shadow-sm ${className}`}>
      <Image
        src={site.portrait.src}
        alt={site.portrait.alt}
        width={site.portrait.width}
        height={site.portrait.height}
        priority={priority}
        sizes="(min-width: 1024px) 420px, 90vw"
        className="h-auto w-full"
      />
    </figure>
  );
}

export function Tagline({
  tone = "navy",
  className = "",
  compact = false,
  accentClassName = "text-orange",
}: {
  tone?: "navy" | "light";
  className?: string;
  compact?: boolean;
  accentClassName?: string;
}) {
  const phrases = ["Buy Smarter", "Sell Stronger", "Move With Confidence"];
  const color = tone === "light" ? "text-white/90" : "text-navy";
  const tracking = compact ? "tracking-[0.08em] text-[0.68rem]" : "tracking-[0.14em] text-xs sm:text-sm";
  return (
    <p className={`font-semibold uppercase ${tracking} ${color} ${className}`}>
      {phrases.map((phrase, index) => (
        <span key={phrase}>
          {phrase}
          <span className={accentClassName}>{index < phrases.length - 1 ? ". " : "."}</span>
        </span>
      ))}
    </p>
  );
}

export function IconAgentBadge({ className = "" }: { className?: string }) {
  return (
    <Image
      src={site.iconAgent.src}
      alt={site.iconAgent.alt}
      width={site.iconAgent.width}
      height={site.iconAgent.height}
      sizes="48px"
      className={className}
    />
  );
}

export function PhotoSlot({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-3xl border border-line ${className}`}>
      <div className="absolute inset-0" aria-hidden="true">
        {children}
      </div>
      <figcaption className="relative flex min-h-56 items-end p-4 sm:min-h-72 sm:p-6">
        <span className="rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-navy shadow-sm">
          Photo placeholder · {label}
        </span>
      </figcaption>
    </figure>
  );
}

export function EqualHousing({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label="Equal Housing Opportunity">
        <path
          d="M8 30 32 8l24 22v26H8V30z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M20 36h24M20 46h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span>Equal Housing Opportunity</span>
    </span>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} rel="noopener" className="font-semibold text-navy underline decoration-orange/70 underline-offset-4">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="font-semibold text-navy underline decoration-orange/70 underline-offset-4">
      {children}
    </Link>
  );
}
