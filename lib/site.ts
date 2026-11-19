/** First year Sanjeev worked as a Realtor. Experience is counted from this year. */
export const CAREER_START_YEAR = 2014;

export function yearsAsRealtor(year = new Date().getFullYear()): number {
  return year - CAREER_START_YEAR;
}

export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/SanjeevMalikTeam" },
  { name: "Instagram", href: "https://www.instagram.com/sanjeev_malik10/" },
  { name: "TikTok", href: "https://www.tiktok.com/@sanjeevmalik000" },
  { name: "X", href: "https://x.com/chidabas" },
  { name: "YouTube", href: "https://www.youtube.com/@sanjeevmalik" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sanjeev-malik-ms-mba-0b51571" },
  { name: "Pinterest", href: "https://in.pinterest.com/sanjeev5070/" },
] as const;

export const site = {
  name: "Malik Group",
  url: "https://sanjeevmalik.com",
  agent: "Sanjeev Malik",
  title: "Broker Associate, eXp Realty LLC",
  brokerage: "eXp Realty LLC",
  license: "BK3313715",
  phoneDisplay: "(321) 297-3009",
  phoneTel: "tel:+13212973009",
  smsTel: "sms:+13212973009",
  email: "sanjeev.malik@gmail.com",
  searchUrl: "https://sanjeevmalik.exprealty.com/",
  valuationUrl: "https://sanjeevmalik.exprealty.com/seller/valuation/",
  zillowUrl: "https://www.zillow.com/profile/SanjeevMalikTeam/",
  googleSearchUrl:
    "https://www.google.com/search?q=Sanjeev+Malik+eXp+Realty+Central+Florida+reviews",
  leadSource: "sanjeevmalik.com website",
  languages: ["English", "Hindi", "Punjabi", "Urdu"] as const,
  areas: [
    "Lake Mary",
    "Sanford",
    "Longwood",
    "Winter Springs",
    "Oviedo",
    "Deltona",
    "DeBary",
    "DeLand",
    "Orlando",
  ] as const,
  counties: ["Seminole", "Volusia", "Orange", "Osceola"] as const,
  disclosure:
    "Sanjeev Malik is a licensed real estate Broker Associate with eXp Realty LLC.",
  portrait: {
    src: "/sanjeev-malik.jpg",
    width: 640,
    height: 682,
    alt: "Sanjeev Malik, Broker Associate, eXp Realty",
  },
  iconAgent: {
    src: "/exp-icon-agent.png",
    width: 500,
    height: 500,
    alt: "eXp Realty ICON Agent",
    label: "eXp Realty ICON Agent",
  },
} as const;

export const nav = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/relocation", label: "Relocation" },
  { href: "/communities", label: "Communities" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const areaServed = [
  "Orlando, FL",
  "Lake Mary, FL",
  "Sanford, FL",
  "Longwood, FL",
  "Winter Springs, FL",
  "Oviedo, FL",
  "Deltona, FL",
  "DeBary, FL",
  "DeLand, FL",
  "Seminole County, FL",
  "Volusia County, FL",
  "Orange County, FL",
  "Osceola County, FL",
  "Central Florida",
] as const;
