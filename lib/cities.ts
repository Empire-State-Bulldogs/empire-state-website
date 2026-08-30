// Major US Cities and regional targets for Empire State Bulldogs
// Prioritizing NY State and major metros within ~500 miles, plus major national hubs.

export const TARGET_CITIES = [
    // New York State
    { name: "Albany", state: "NY", slug: "albany-ny" },
    { name: "New York City", state: "NY", slug: "nyc" },
    { name: "Manhattan", state: "NY", slug: "manhattan-ny" },
    { name: "Brooklyn", state: "NY", slug: "brooklyn-ny" },
    { name: "Queens", state: "NY", slug: "queens-ny" },
    { name: "Bronx", state: "NY", slug: "bronx-ny" },
    { name: "Staten Island", state: "NY", slug: "staten-island-ny" },
    { name: "Buffalo", state: "NY", slug: "buffalo-ny" },
    { name: "Rochester", state: "NY", slug: "rochester-ny" },
    { name: "Syracuse", state: "NY", slug: "syracuse-ny" },
    { name: "Yonkers", state: "NY", slug: "yonkers-ny" },
    { name: "Saratoga Springs", state: "NY", slug: "saratoga-springs-ny" },
    // Added from Search Console demand: recurring impressions with no matching page
    { name: "Scarsdale", state: "NY", slug: "scarsdale-ny" },
    { name: "White Plains", state: "NY", slug: "white-plains-ny" },
    { name: "New Rochelle", state: "NY", slug: "new-rochelle-ny" },

    // Northeast / ~500 Mile Radius
    { name: "Boston", state: "MA", slug: "boston-ma" },
    { name: "Philadelphia", state: "PA", slug: "philadelphia-pa" },
    { name: "Newark", state: "NJ", slug: "newark-nj" },
    { name: "Jersey City", state: "NJ", slug: "jersey-city-nj" },
    { name: "Stamford", state: "CT", slug: "stamford-ct" },
    { name: "Hartford", state: "CT", slug: "hartford-ct" },
    { name: "Providence", state: "RI", slug: "providence-ri" },
    { name: "Baltimore", state: "MD", slug: "baltimore-md" },
    { name: "Washington", state: "DC", slug: "washington-dc" },

    // Major National Hubs (for "nationwide delivery" keywords)
    { name: "Los Angeles", state: "CA", slug: "los-angeles-ca" },
    { name: "Chicago", state: "IL", slug: "chicago-il" },
    { name: "Houston", state: "TX", slug: "houston-tx" },
    { name: "Miami", state: "FL", slug: "miami-fl" },
    { name: "Atlanta", state: "GA", slug: "atlanta-ga" },
    { name: "Dallas", state: "TX", slug: "dallas-tx" },
    { name: "Las Vegas", state: "NV", slug: "las-vegas-nv" },
]
