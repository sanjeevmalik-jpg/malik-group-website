import Link from "next/link";
import { JsonLd } from "@/components/ui";
import type { Crumb } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="font-semibold text-navy" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="font-semibold text-navy underline decoration-orange/60 underline-offset-4">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
