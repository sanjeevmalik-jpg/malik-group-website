import type { Metadata } from "next";
import type { Community } from "@/lib/communities";
import { CAREER_START_YEAR, site, yearsAsRealtor } from "@/lib/site";

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
          alt: "Sanjeev Malik, Broker Associate with eXp Realty, Malik Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
  };
}

export type FaqItem = { question: string; answer: string };

export type Crumb = { name: string; path: string };

export function entitySummary(): string {
  return `Sanjeev Malik, MBA, GRI, is a Broker Associate with eXp Realty LLC and an eXp Realty ICON Agent. He has been a Realtor since ${CAREER_START_YEAR} (${yearsAsRealtor()} years) and has lived in Central Florida since 1999. He helps people buy, sell, and relocate in Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando, across Seminole, Volusia, Orange, and Osceola counties. He works in English, Hindi, Punjabi, and Urdu. Call or text ${site.phoneDisplay} or email ${site.email}.`;
}

const appraisers: Record<string, { name: string; url: string }> = {
  "Seminole County": {
    name: "Seminole County Property Appraiser",
    url: "https://www.scpafl.org/",
  },
  "Volusia County": {
    name: "Volusia County Property Appraiser",
    url: "https://vcpa.vcgov.org/",
  },
  "Orange County": {
    name: "Orange County Property Appraiser",
    url: "https://www.ocpafl.org/",
  },
};

const areaTitles: Record<string, string> = {
  "lake-mary": "Lake Mary, FL Realtor",
  sanford: "Sanford Real Estate Agent",
  longwood: "Longwood FL Real Estate Agent",
  "winter-springs": "Winter Springs Realtor",
  oviedo: "Oviedo FL Real Estate Agent",
  deltona: "Deltona FL Real Estate Agent",
  debary: "DeBary FL Real Estate Agent",
  deland: "DeLand FL Real Estate Agent",
  orlando: "Orlando FL Real Estate Agent",
};

export function areaTitle(community: Community): string {
  return areaTitles[community.slug] ?? `${community.name} Real Estate`;
}

export function areaDescription(community: Community): string {
  return `${areaTitle(community)} Sanjeev Malik helps you buy or sell in ${community.name}, ${community.county}. Call ${site.phoneDisplay}. Hindi, Punjabi, and Urdu.`;
}

export function homeFaqs(): FaqItem[] {
  return [
    {
      question: "Who is a good Realtor in Lake Mary FL?",
      answer: `Sanjeev Malik is a Lake Mary realtor and a Broker Associate with eXp Realty LLC. He has been a Realtor since ${CAREER_START_YEAR} and has lived in Central Florida since 1999. He helps people buy, sell, and relocate in Lake Mary and nearby cities, in English, Hindi, Punjabi, and Urdu. Call or text ${site.phoneDisplay}.`,
    },
    {
      question: "Is there a Hindi-speaking realtor in Orlando?",
      answer:
        "Yes. Sanjeev Malik is a Hindi-speaking realtor in Orlando and Central Florida, and he also works in English, Punjabi, and Urdu. You can talk through a search, an offer, or a sale in whichever of those languages is easiest. He serves clients of every background and does not recommend neighborhoods based on who lives there.",
    },
    {
      question: "How do I sell my home in Seminole County?",
      answer: `Start with a current home value and a pricing conversation with Sanjeev Malik, then a plan for preparation, showings, and closing. He serves Seminole County cities including Lake Mary, Sanford, Longwood, Winter Springs, and Oviedo. He will not promise a sale price or a sale date. Request a value or call ${site.phoneDisplay}.`,
    },
    {
      question: "What is the best way to relocate to Central Florida?",
      answer:
        "Compare the drive, the house, and specific cities with someone who works those markets, then schedule showings for the days you are in town. Sanjeev Malik has lived in Central Florida since 1999 and covers Lake Mary, Sanford, Orlando, and nearby communities in Seminole, Volusia, Orange, and Osceola counties.",
    },
  ];
}

export function buyFaqs(): FaqItem[] {
  return [
    {
      question: "How do I buy a home in Central Florida?",
      answer: `Search current listings, then talk with Sanjeev Malik about timing, budget, and which cities to tour. He is a Broker Associate with eXp Realty LLC and can walk you through showings, the offer, inspection, and closing in English, Hindi, Punjabi, or Urdu. Start at ${site.searchUrl} or call ${site.phoneDisplay}.`,
    },
    {
      question: "Do I need my own agent to buy in Lake Mary?",
      answer:
        "You can hire your own buyer's agent, and Sanjeev Malik represents buyers looking in Lake Mary and the rest of Central Florida. Your agent helps you compare homes, write the offer, and track the steps to closing. The search itself starts on his eXp listing search.",
    },
    {
      question: "Which Central Florida cities can I search?",
      answer:
        "Sanjeev works in Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando. If a home you like sits just outside those cities, ask him whether he can take that search.",
    },
  ];
}

export function sellFaqs(): FaqItem[] {
  return [
    {
      question: "How long does it take to sell a home in Sanford?",
      answer:
        "There is no single timeline for selling a home in Sanford. It depends on the price, the condition, and buyer demand when you list. Sanjeev Malik can walk through a pricing plan for your house. This site does not promise how many days a sale will take or what price a home will bring.",
    },
    {
      question: "What are the property taxes like in Seminole County?",
      answer:
        "Seminole County property taxes are set by the county and other local taxing authorities, and the bill changes from one property to the next. Look up the parcel on the Seminole County Property Appraiser site at https://www.scpafl.org/. Sanjeev does not quote a typical tax amount on this page.",
    },
    {
      question: "How do I find out what my home is worth?",
      answer: `Request a home value, then talk with Sanjeev about recent sales and what is listed near your house. The form at ${site.valuationUrl} is a starting point. It is not a promised sale price. You can also call ${site.phoneDisplay}.`,
    },
  ];
}

export function relocationFaqs(): FaqItem[] {
  return [
    {
      question: "What is the best way to relocate to Central Florida?",
      answer:
        "Decide what the drive, the house, and your timing need to do, then compare specific cities instead of the whole region at once. Sanjeev Malik is a relocation realtor who has lived in Central Florida since 1999. He can narrow Lake Mary, Sanford, Oviedo, Deltona, Orlando, and the other communities he serves before you spend a weekend driving.",
    },
    {
      question: "Can I buy a Central Florida home before I move?",
      answer: `Yes. You can start with a call, review homes remotely, and schedule showings for the days you are in town. Sanjeev also helps people buying from another state or from overseas, and sellers who have already left. Call or text ${site.phoneDisplay} or email ${site.email}.`,
    },
    {
      question: "Which Orlando-area cities should I compare first?",
      answer:
        "Start with the cities he serves: Lake Mary, Sanford, Longwood, Winter Springs, and Oviedo in Seminole County; Deltona, DeBary, and DeLand in Volusia County; and Orlando in Orange County. Each community page describes location, roads, and typical home styles, not who lives there.",
    },
  ];
}

export function areaFaqs(community: Community): FaqItem[] {
  const appraiser = appraisers[community.county];
  const taxAnswer = appraiser
    ? `Property taxes in ${community.county} are set by local taxing authorities and vary by property, so there is no single number that fits every house. Look up the parcel on the ${appraiser.name} site at ${appraiser.url}. Sanjeev does not estimate a tax bill on this page.`
    : `Property taxes depend on the property and the local taxing authorities. Look up the parcel with the county property appraiser rather than using a general estimate. Sanjeev does not estimate a tax bill on this page.`;

  return [
    {
      question: `Who is a good Realtor in ${community.name} FL?`,
      answer: `Sanjeev Malik is a ${community.name} realtor and a Broker Associate with eXp Realty LLC. He has been a Realtor since ${CAREER_START_YEAR}. He helps people buy and sell in ${community.name}, ${community.county}, and nearby Central Florida cities, in English, Hindi, Punjabi, and Urdu. Call ${site.phoneDisplay}.`,
    },
    {
      question: `How do I buy or sell a home in ${community.name}?`,
      answer: `If you are buying, start with current listings. If you are selling, request a home value, then talk with Sanjeev about that specific house. He can explain showings, offers, and closing in plain language. He does not promise a sale price or how fast a home in ${community.name} will sell.`,
    },
    {
      question: `What are the property taxes like in ${community.county}?`,
      answer: taxAnswer,
    },
    {
      question: `How do people get around ${community.name}?`,
      answer: community.gettingAround,
    },
  ];
}

export function indianFaqs(): FaqItem[] {
  return [
    {
      question: "Is there a Hindi-speaking realtor in Orlando?",
      answer: `Yes. Sanjeev Malik is a Hindi-speaking realtor in Orlando and Central Florida. He also works in English, Punjabi, and Urdu, so you can review homes, offers, and inspections in the language that is most comfortable. Call or text ${site.phoneDisplay}.`,
    },
    {
      question: "Are you an Indian realtor in Orlando and Central Florida?",
      answer: `Yes. Sanjeev Malik is a Broker Associate with eXp Realty and an Indian realtor serving Orlando and Central Florida. He has lived here since 1999 and has been a Realtor since ${CAREER_START_YEAR}, with ${yearsAsRealtor()} years of real estate experience. He works with clients of every background and is glad to help in English, Hindi, Punjabi, or Urdu.`,
    },
    {
      question: "Do you speak Hindi, Punjabi, and Urdu?",
      answer:
        "Yes. Sanjeev works in English, Hindi, Punjabi, and Urdu. You can ask questions, review offers, and walk through inspections in the language that feels most comfortable.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "He serves Lake Mary, Sanford, Longwood, Winter Springs, Oviedo, Deltona, DeBary, DeLand, and Orlando, as well as Seminole, Volusia, Orange, and Osceola counties. If you are looking just outside those communities, reach out and he can tell you whether he can help.",
    },
    {
      question: "Can you help with vastu-friendly layouts or a home for parents?",
      answer:
        "Yes, when that is important to you. Sanjeev can help you evaluate floor plans, orientation, and homes with space for multigenerational living, including in-law suites. He can also help you consider drive times to temples, gurdwaras, and grocery stores you care about. He will not steer you to a neighborhood based on ethnicity or who lives there.",
    },
    {
      question: "Do you work with H-1B families, first-time buyers, and NRIs?",
      answer:
        "Yes. Sanjeev helps relocating H-1B, tech, and healthcare families, first-time buyers, NRIs and investors, and sellers. If you are moving from another state or buying from overseas, he will keep the process organized and easy to follow.",
    },
    {
      question: "How do I start a home search or find out what my home is worth?",
      answer: `Search homes at ${site.searchUrl}, request a home value at ${site.valuationUrl}, or call or text Sanjeev at ${site.phoneDisplay}. You can also email ${site.email}.`,
    },
  ];
}
