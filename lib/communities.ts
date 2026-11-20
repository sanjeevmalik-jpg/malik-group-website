export type Community = {
  slug: string;
  name: string;
  county: string;
  description: string;
  overview: string;
  location: string;
  gettingAround: string;
  aroundTown: string;
  homes: string;
  gradient: string;
};

export const communities: Community[] = [
  {
    slug: "lake-mary",
    name: "Lake Mary",
    county: "Seminole County",
    description:
      "Lake Mary, Florida, on the I-4 corridor in Seminole County. Location, roads, SunRail, and the kinds of homes buyers usually find.",
    overview:
      "Lake Mary is a Seminole County city along the I-4 corridor, north of Orlando and just south of Sanford.",
    location:
      "The city sits between Sanford and Longwood. Residential streets and shopping spread out from Lake Mary Boulevard and the surrounding roads.",
    gettingAround:
      "I-4 and State Road 417, the Seminole Expressway, are the main routes toward Orlando, Sanford, and the airport. SunRail stops at the Lake Mary station.",
    aroundTown:
      "Lake Mary Boulevard is a main commercial stretch, with grocery stores, restaurants, and everyday services. The city has parks and trails around its lakes.",
    homes:
      "Listings commonly include single-family houses, townhomes, and condominiums, in both established neighborhoods and newer construction. Availability changes with the market.",
    gradient: "from-[#d7e6f2] via-[#f4efe6] to-[#f7d7bf]",
  },
  {
    slug: "sanford",
    name: "Sanford",
    county: "Seminole County",
    description:
      "Sanford, Florida, the Seminole County seat on Lake Monroe. Downtown, the waterfront, SunRail, and a mix of older and newer homes.",
    overview:
      "Sanford is the Seminole County seat, on the south shore of Lake Monroe.",
    location:
      "Downtown sits near the waterfront. Neighborhoods continue south and west toward Lake Mary, I-4, and the rest of the county.",
    gettingAround:
      "I-4 runs along the south side of the city toward Orlando and Deltona. SunRail has a Sanford station, and the historic downtown is a short trip from the waterfront.",
    aroundTown:
      "The RiverWalk follows the Lake Monroe shore beside a historic downtown of small blocks, shops, and restaurants. Farther out, the city mixes older blocks with newer subdivisions.",
    homes:
      "Buyers will see older houses near downtown and newer construction in outlying subdivisions, along with townhomes in some communities.",
    gradient: "from-[#c9d7ea] via-[#efe6d8] to-[#f3cbb0]",
  },
  {
    slug: "longwood",
    name: "Longwood",
    county: "Seminole County",
    description:
      "Longwood, Florida, in Seminole County between Lake Mary and the Orlando side of the county. Roads, SunRail, and established neighborhoods.",
    overview:
      "Longwood is a Seminole County city between Lake Mary and Altamonte Springs, along I-4.",
    location:
      "It sits south of Lake Mary and north of the Winter Park and Orlando side of the metro, with State Road 434 crossing the city.",
    gettingAround:
      "I-4 and State Road 434 are the main roads. SunRail stops at the Longwood station for trips toward Lake Mary, Sanford, and downtown Orlando.",
    aroundTown:
      "Historic downtown Longwood is a small commercial center. The rest of the city is mostly residential streets, local parks, and neighborhood shopping.",
    homes:
      "Most housing is established single-family neighborhoods, with some townhomes and a smaller number of newer homes.",
    gradient: "from-[#d5e4d8] via-[#f6f1e6] to-[#f6d3b8]",
  },
  {
    slug: "winter-springs",
    name: "Winter Springs",
    county: "Seminole County",
    description:
      "Winter Springs, Florida, in eastern Seminole County. Access from State Road 417 and 434, local parks, and mostly single-family housing.",
    overview:
      "Winter Springs is in eastern Seminole County, between Longwood and Oviedo.",
    location:
      "The city is inland from I-4, closer to the Seminole Expressway than to the interstate itself.",
    gettingAround:
      "State Road 417 and State Road 434 are the usual routes toward Orlando, UCF, and the rest of Seminole County. There is no SunRail station in the city.",
    aroundTown:
      "Winter Springs is largely residential, with neighborhood parks, local shops, and everyday services along the main roads.",
    homes:
      "The housing is mostly single-family subdivisions, with some townhomes. Both older neighborhoods and later phases of construction show up in the listings.",
    gradient: "from-[#d9e7dc] via-[#f3eee4] to-[#efd0b4]",
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    county: "Seminole County",
    description:
      "Oviedo, Florida, in eastern Seminole County near the University of Central Florida. Roads, downtown, and single-family neighborhoods.",
    overview:
      "Oviedo is in eastern Seminole County, east of Winter Springs and near the University of Central Florida.",
    location:
      "The city extends from the university side of the county toward the Econlockhatchee River corridor and the rural edge of Seminole County.",
    gettingAround:
      "State Road 417, State Road 434, and County Road 419 are the main connections toward Orlando, Winter Springs, and UCF.",
    aroundTown:
      "The downtown district known as Oviedo on the Park is the city’s central gathering spot, with local shops and restaurants. Neighborhood parks are spread through the residential areas.",
    homes:
      "Housing is mostly single-family neighborhoods, including both established subdivisions and newer communities. Townhomes appear in some parts of the city.",
    gradient: "from-[#d4e3ef] via-[#f7f0e4] to-[#f6c9a6]",
  },
  {
    slug: "deltona",
    name: "Deltona",
    county: "Volusia County",
    description:
      "Deltona, Florida, in southwestern Volusia County west of I-4. A large residential city within a drive of Sanford and Orlando.",
    overview:
      "Deltona is a large city in southwestern Volusia County, on the west side of I-4.",
    location:
      "It sits north of DeBary and within a drive of Sanford and the rest of the I-4 corridor.",
    gettingAround:
      "I-4 is the regional route toward DeBary, Sanford, Lake Mary, and Orlando. Local driving is on a grid of arterial roads through the residential sections.",
    aroundTown:
      "Deltona is primarily a residential city, with shopping along the main corridors and a number of lakes through the neighborhoods.",
    homes:
      "Much of the housing is single-family, including homes on larger lots than are typical closer to Orlando. Some newer construction is mixed in with earlier subdivisions.",
    gradient: "from-[#e7dcc8] via-[#f6f1e7] to-[#f3c7a4]",
  },
  {
    slug: "debary",
    name: "DeBary",
    county: "Volusia County",
    description:
      "DeBary, Florida, in Volusia County along I-4 and the St. Johns River. SunRail, Gemini Springs Park, and single-family neighborhoods.",
    overview:
      "DeBary is in southwestern Volusia County, along I-4 and the St. Johns River, between Deltona and Sanford.",
    location:
      "The city is the southern gateway of Volusia County on this part of the interstate, across the river corridor from Seminole County.",
    gettingAround:
      "I-4 is the direct route south to Sanford and Orlando. SunRail stops at the DeBary station, which is the northern end of the current SunRail line.",
    aroundTown:
      "Gemini Springs Park, a Volusia County park, is in the city. Other daily needs are along the main commercial roads, with the St. Johns River along the city’s edge.",
    homes:
      "Homes are mostly single-family neighborhoods, from earlier subdivisions to more recent construction.",
    gradient: "from-[#cfe0ea] via-[#f4efe6] to-[#f6d2b6]",
  },
  {
    slug: "deland",
    name: "DeLand",
    county: "Volusia County",
    description:
      "DeLand, Florida, the Volusia County seat and home of Stetson University. Historic downtown and a drive west to I-4.",
    overview:
      "DeLand is the Volusia County seat, set east of I-4, and home to Stetson University.",
    location:
      "Downtown is the center of the city. The interstate is a drive to the west, rather than running through town.",
    gettingAround:
      "State Road 44 connects downtown DeLand with I-4. From the interstate, Sanford and Orlando are to the south. DeLand does not have a SunRail station.",
    aroundTown:
      "Downtown DeLand is a historic commercial district near the Stetson campus, with local shops, restaurants, and county offices. Parks and residential streets surround the center.",
    homes:
      "The mix includes historic houses near downtown and subdivisions farther out, along with some newer homes.",
    gradient: "from-[#e6dcc8] via-[#f7f2e8] to-[#efc9a8]",
  },
  {
    slug: "orlando",
    name: "Orlando",
    county: "Orange County",
    description:
      "Orlando, Florida, the Orange County seat. The region’s job centers, airport, expressways, and a wide range of housing.",
    overview:
      "Orlando is the Orange County seat and the employment and transportation center of Central Florida.",
    location:
      "The city covers downtown and a wide set of neighborhoods, with suburban communities continuing into the rest of Orange County and the neighboring counties.",
    gettingAround:
      "Orlando International Airport is southeast of downtown. I-4 and the 408, 417, and 528 expressways connect the city with Seminole County to the north and Osceola County to the south. SunRail serves several stations in Orlando.",
    aroundTown:
      "Downtown, in-town neighborhoods, and suburban districts each have their own shops, parks, and daily errands. What is nearby depends entirely on the address.",
    homes:
      "Housing covers condominiums, houses in established neighborhoods, and newer communities toward the edges of the city. The range is wide, so a search is more useful than a single description.",
    gradient: "from-[#d5deef] via-[#f6f1e8] to-[#f6cbb0]",
  },
];

export function getCommunity(slug: string): Community | undefined {
  return communities.find((community) => community.slug === slug);
}
