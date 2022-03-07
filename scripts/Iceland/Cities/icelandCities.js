const notableCities = [
    {
        name: "Paris"
        , population: "2,165,423"
        , description: "Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts. The City of Paris is the centre and seat of government of the region and province of Île-de-France, or Paris Region, with an estimated population of 12,174,880 in 2017, or about 18 percent of the population of France."
        , image: "/images/france-images/city-paris.jpg"
    }
    ,
    {
        name: "Bordeaux"
        , population: "257,804"
        , description: "Bordeaux is a port city on the river Garonne in the Gironde department, Southwestern France. Bordeaux is a world capital of wine, with its castles and vineyards of the Bordeaux region that stand on the hillsides of the Gironde and is home to the world's main wine fair, Vinexpo."
        , image: "/images/france-images/city-paris.jpg"
    }
    ,
    {
        name: "Marseille"
        , population: "870,018"
        , description: "Founded around 600 BC by Greek settlers from Phocaea, Marseille is the oldest city of France, as well as one of Europe's oldest continuously inhabited settlements."
        , image: "/images/france-images/city-m.jpg"
    }
]

export const getCities = () =>{
    return notableCities;
}