import { areaServed, CAREER_START_YEAR, site, socialLinks } from "@/lib/site";
import type { Crumb, FaqItem } from "@/lib/seo";
import { indianFaqs } from "@/lib/seo";

const sameAs = [site.zillowUrl, site.googleBusinessUrl, site.searchUrl, ...socialLinks.map((link) => link.href)];

const languages = site.languages.map((name) => ({
  "@type": "Language",
  name,
}));

const personId = `${site.url}/#sanjeev-malik`;
const expId = `${site.url}/#exp-realty`;
const orgId = `${site.url}/#malik-group`;

const expRealty = {
  "@type": "Organization",
  "@id": expId,
  name: "eXp Realty LLC",
  url: "https://www.exprealty.com/",
};

export const siteGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    expRealty,
    {
      "@type": "Person",
      "@id": personId,
      name: site.agent,
      honorificSuffix: "MBA, GRI",
      jobTitle: "Broker Associate",
      telephone: "+1-321-297-3009",
      email: site.email,
      url: `${site.url}/`,
      image: `${site.url}${site.portrait.src}`,
      award: "Five consecutive eXp Realty ICON Agent awards",
      knowsLanguage: languages,
      worksFor: { "@id": expId },
      hasCredential: [
        "MBA",
        "MS, Engineering",
        "GRI (Graduate, REALTOR Institute), earned 2016",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Central Florida",
      },
      sameAs,
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${site.url}/#agent`,
      name: site.agent,
      honorificSuffix: "MBA, GRI",
      telephone: "+1-321-297-3009",
      email: site.email,
      url: `${site.url}/`,
      image: `${site.url}${site.portrait.src}`,
      award: "Five consecutive eXp Realty ICON Agent awards",
      description: `Sanjeev Malik, MBA, GRI, is a Broker Associate with eXp Realty LLC. He has been a Realtor since ${CAREER_START_YEAR} and has lived in Central Florida since 1999. He has received five consecutive eXp Realty ICON Agent awards, holds an MBA and a master's degree in engineering, and earned the GRI in 2016. He works in English, Hindi, Punjabi, and Urdu.`,
      knowsLanguage: languages,
      areaServed: [...areaServed],
      worksFor: { "@id": expId },
      sameAs,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sanford",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "Organization",
      "@id": orgId,
      name: site.name,
      url: `${site.url}/`,
      logo: `${site.url}/logo-full-trim.png`,
      telephone: "+1-321-297-3009",
      email: site.email,
      employee: { "@id": personId },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
      publisher: { "@id": orgId },
      inLanguage: "en",
    },
  ],
};

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${site.url}/` : `${site.url}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": personId },
    areaServed: [...areaServed],
    availableLanguage: [...site.languages],
  };
}

export const indianAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Sanjeev Malik",
  honorificSuffix: "MBA, GRI",
  url: `${site.url}/indian-realtor-orlando/`,
  image: `${site.url}${site.portrait.src}`,
  award: "Five consecutive eXp Realty ICON Agent awards",
  telephone: "+1-321-297-3009",
  email: site.email,
  jobTitle: "Broker Associate",
  description:
    "Indian realtor in Orlando and Central Florida. Broker Associate with eXp Realty LLC. Helps clients buy and sell in English, Hindi, Punjabi, and Urdu.",
  worksFor: { "@id": expId },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sanford",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [...areaServed],
  knowsLanguage: languages,
  hasCredential: ["MBA", "MS, Engineering", "GRI (Graduate, REALTOR Institute), earned 2016"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Central Florida",
  },
  sameAs,
};

export const indianFaqSchema = faqPageSchema(indianFaqs());
