import { areaServed, CAREER_START_YEAR, site, socialLinks, yearsAsRealtor } from "@/lib/site";

const sameAs = [site.zillowUrl, site.searchUrl, ...socialLinks.map((link) => link.href)];

const languages = site.languages.map((name) => ({
  "@type": "Language",
  name,
}));

export const siteAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.agent,
  honorificSuffix: "MBA, GRI",
  telephone: "+1-321-297-3009",
  email: site.email,
  url: `${site.url}/`,
  image: `${site.url}${site.portrait.src}`,
  award: site.iconAgent.label,
  areaServed: [...areaServed],
  knowsLanguage: languages,
  sameAs,
};

export const indianAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Sanjeev Malik",
  honorificSuffix: "MBA, GRI",
  url: "https://sanjeevmalik.com/indian-realtor-orlando/",
  image: `${site.url}${site.portrait.src}`,
  award: site.iconAgent.label,
  telephone: "+1-321-297-3009",
  email: site.email,
  jobTitle: "Broker Associate",
  description:
    "Indian realtor in Orlando and Central Florida. Broker Associate with eXp Realty. Helps families buy and sell in English, Hindi, Punjabi, and Urdu.",
  worksFor: {
    "@type": "RealEstateAgent",
    name: "eXp Realty",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sanford",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [...areaServed],
  knowsLanguage: languages,
  hasCredential: "GRI (Graduate, REALTOR Institute), earned 2016",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Central Florida",
  },
  sameAs,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

export const indianFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are you an Indian realtor in Orlando and Central Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Yes. Sanjeev Malik is a Broker Associate with eXp Realty and an Indian realtor serving Orlando and Central Florida. He has lived here since 1999 and has been a Realtor since ${CAREER_START_YEAR}, with ${yearsAsRealtor()} years of real estate experience. He works with clients of every background and is glad to help in English, Hindi, Punjabi, or Urdu.`,
      },
    },
    {
      "@type": "Question",
      name: "Do you speak Hindi and Punjabi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sanjeev is a Hindi speaking realtor and a Punjabi speaking realtor, and he also works in English and Urdu. You can ask questions, review offers, and walk through inspections in the language that feels most comfortable.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He serves Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando, as well as Seminole, Volusia, Orange, and Osceola counties. If you are looking just outside those communities, reach out and he can tell you whether he can help.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with vastu-friendly layouts or a home for parents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when that is important to you. Sanjeev can help you evaluate floor plans, orientation, and homes with space for multigenerational living, including in-law suites. He can also help you consider drive times to temples, gurdwaras, and grocery stores you care about. He will not steer you to a neighborhood based on ethnicity or who lives there.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with H-1B families, first-time buyers, and NRIs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sanjeev regularly helps relocating H-1B, tech, and healthcare families, first-time buyers, NRIs and investors, and sellers. If you are moving from another state or buying from overseas, he will keep the process organized and easy to follow.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start a home search or find out what my home is worth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `You can search homes at https://sanjeevmalik.com/property-search/, request a home value at https://sanjeevmalik.exprealty.com/seller/valuation/, or call or text Sanjeev at (321) 297-3009. You can also email ${site.email}.`,
      },
    },
  ],
};
