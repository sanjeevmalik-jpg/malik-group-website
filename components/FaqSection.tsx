import { JsonLd } from "@/components/ui";
import type { FaqItem } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";

function AnswerText({ text }: { text: string }) {
  const parts = text.split(/(https:\/\/[^\s]+)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (!part.startsWith("https://")) return <span key={index}>{part}</span>;
        const href = part.replace(/[.,)]+$/, "");
        const trailing = part.slice(href.length);
        return (
          <span key={index}>
            <a href={href} rel="noopener" className="font-semibold text-navy underline decoration-orange/70 underline-offset-4">
              {href}
            </a>
            {trailing}
          </span>
        );
      })}
    </>
  );
}

export function FaqSection({ items, heading = "Questions people ask" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section className="mt-14">
      <JsonLd data={faqPageSchema(items)} />
      <h2 className="text-3xl text-navy">{heading}</h2>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <article key={item.question} className="rounded-3xl border border-line bg-white p-5 sm:p-6">
            <h3 className="text-xl text-navy">{item.question}</h3>
            <p className="mt-3 leading-relaxed text-slate">
              <AnswerText text={item.answer} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
