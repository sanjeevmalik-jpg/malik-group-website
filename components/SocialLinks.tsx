import { site, socialLinks } from "@/lib/site";

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      {children}
    </svg>
  );
}

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["name"] }) {
  switch (name) {
    case "Facebook":
      return (
        <Glyph>
          <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7Z" />
        </Glyph>
      );
    case "Instagram":
      return (
        <Glyph>
          <path d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm8 1.8H8A2.7 2.7 0 0 0 5.3 8v8A2.7 2.7 0 0 0 8 18.7h8A2.7 2.7 0 0 0 18.7 16V8A2.7 2.7 0 0 0 16 5.3ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.7a2.1 2.1 0 1 0 2.1 2.1A2.1 2.1 0 0 0 12 9.9Zm4.35-2.55a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
        </Glyph>
      );
    case "TikTok":
      return (
        <Glyph>
          <path d="M14.2 3.2c.4 2.3 1.7 3.8 3.9 4.1v2.4a6.4 6.4 0 0 1-3.8-1.2v6.3a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3.2h2.5Z" />
        </Glyph>
      );
    case "X":
      return (
        <Glyph>
          <path d="M5 4.5h3.2l3.4 4.6L15.6 4.5H19l-5.2 6.3L19.4 19.5h-3.2l-3.8-5.1-4.4 5.1H4.4l5.6-6.7L5 4.5Zm2.2 1.3 7.9 10.6h1.7L8.9 5.8H7.2Z" />
        </Glyph>
      );
    case "YouTube":
      return (
        <Glyph>
          <path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.4 6 12 6 12 6s-5.4 0-7.1.3A2.7 2.7 0 0 0 3 8.2 28 28 0 0 0 2.7 12a28 28 0 0 0 .3 3.8 2.7 2.7 0 0 0 1.9 1.9C6.6 18 12 18 12 18s5.4 0 7.1-.3a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .3-3.8 28 28 0 0 0-.3-3.8ZM10.4 14.8V9.2L15.2 12l-4.8 2.8Z" />
        </Glyph>
      );
    case "LinkedIn":
      return (
        <Glyph>
          <path d="M5.7 9.2H3.2V20h2.5V9.2ZM4.4 3.6A1.5 1.5 0 1 0 4.5 6.6 1.5 1.5 0 0 0 4.4 3.6ZM20.8 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6a2.1 2.1 0 0 0-2 1.4 2.6 2.6 0 0 0-.1 1v5.8H11.7s.1-9.4 0-10.4h2.5v1.5a2.8 2.8 0 0 1 2.5-1.4c1.8 0 3.2 1.2 3.2 3.8V20Z" />
        </Glyph>
      );
    case "Pinterest":
      return (
        <Glyph>
          <path d="M12 3.2A8.8 8.8 0 0 0 8 19.7c0-.7.2-1.6.4-2.3l1.5-6.1s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.6-2.7 3.6-5.9 0-2.4-1.6-4.2-4.6-4.2A4.8 4.8 0 0 0 7.2 9.6c0 .9.3 1.8.7 2.3a.3.3 0 0 1 .1.3l-.2.9c0 .2-.2.2-.3.1-1.1-.5-1.6-1.8-1.6-3.3 0-3.1 2.6-6.8 7.8-6.8 4.1 0 6.9 3 6.9 6.2 0 4.2-2.4 7.4-5.9 7.4-1.2 0-2.3-.6-2.6-1.4l-.7 2.7a9 9 0 0 1-1.1 2.3A8.8 8.8 0 1 0 12 3.2Z" />
        </Glyph>
      );
  }
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-white/10"
          >
            <SocialIcon name={link.name} />
          </a>
        </li>
      ))}
      <li>
        <a
          href={site.googleBusinessUrl}
          target="_blank"
          rel="noopener"
          aria-label="Google"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-white/10"
        >
          <Glyph>
            <path d="M21.6 12.23c0-.74-.07-1.45-.19-2.14H12v4.05h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.99-4.3 2.99-7.43Z" />
            <path d="M12 22c2.7 0 4.96-.9 6.61-2.43l-3.23-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58A10 10 0 0 0 12 22Z" />
            <path d="M6.41 13.91A6 6 0 0 1 6.1 12c0-.66.11-1.3.31-1.91V7.51H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.49l3.34-2.58Z" />
            <path d="M12 5.97c1.47 0 2.79.5 3.83 1.5l2.87-2.87C16.95 2.99 14.7 2 12 2A10 10 0 0 0 3.07 7.51l3.34 2.58C7.2 7.73 9.4 5.97 12 5.97Z" />
          </Glyph>
        </a>
      </li>
    </ul>
  );
}
