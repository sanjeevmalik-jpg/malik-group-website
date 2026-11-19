import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: site.portrait.alt,
        },
      ],
    },
  };
}
