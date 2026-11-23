import { site } from "@/lib/site";

/** Verbatim public comments posted on Zillow. Quotes are not edited. */
export const testimonials = [
  {
    name: "Khondaker R.",
    detail: "Landlord, rental",
    source: "Zillow",
    href: site.zillowUrl,
    pull: "Sanjeev did an amazing job getting me through the rental process as a landlord!",
    quote:
      "Sanjeev did an amazing job getting me through the rental process as a landlord! He is professional and friendly which is a great combination. I was guided through the proper process to prepare my rental for my next tenant in the best way possible by Sanjeev. Following his guidance, when we put the house for rent we were able to procure a tenant within a week of Sanjeev putting up his For Rent sign! Thanks to Sanjeev, we found a great tenant. He was able to help both of us through the process of forming a landlord and tennant agreement. We truly appreciate everything he has done for us and will definitely work with him in the future. Thank you so much Sanjeev!",
  },
  {
    name: "Mayuri S.",
    detail: "Selling",
    source: "Zillow",
    href: site.zillowUrl,
    pull: "Sanjeev did an excellent job communicating with us",
    quote:
      "Sanjeev did an excellent job communicating with us and always making sure that the flow of the process was never stopped, ready to move on to the next step. He is incredibly responsive and is always willing to talk in person or on the phone as soon as possible, making the selling process smoother for us.",
  },
  {
    name: "Ajay S.",
    detail: "Buying",
    source: "Zillow",
    href: site.zillowUrl,
    pull: "He was super proactive throughout the whole buying process",
    quote:
      "Sanjeev was our realtor when we bought our house recently. He was super proactive throughout the whole buying process and really looked out for our interests. He's also got great connections with local contractors if anything needs fixing. I'd totally recommend him.",
  },
  {
    name: "Pradosh S.",
    detail: "House hunt",
    source: "Zillow",
    href: site.zillowUrl,
    pull: "He was patient, provided the right information and was very responsive.",
    quote:
      "We had a great experience working with Sanjeev in our house hunt. He was patient, provided the right information and was very responsive. He made our house hunt experience a very comfortable one. We highly recommend him",
  },
] as const;
