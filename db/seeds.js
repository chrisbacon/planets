use projectPlanet;
db.planets.drop();

    db.planets.insert({
        name: "Sun",
        overview: "Big, bright and Hot",
        image: "images/planet0.png",
        description: "That big bright thing in the sky that we offer sacrifices to.  Our sun is a yellow dwarf.  Not that it's small.  At 1,392,684 km in diameter and with a circumference of 4,370,005 km you could fit 960,000 Earth-sized sqheres inside it!!  Boy it's hot there too! At the surface it's a balmy 5500℃.  Our sun is approximately 4.6 Billion years old.",
        distanceToSun: 0.0,
        moonValue: 0
    });

    db.planets.insert({
        name: "Mercury",
        overview: "The Swiftest Planet",
        image: "images/planet1.png",
        description: "Mercury's eccentric orbit takes the small planet as close as 47 million km (29 million miles) and as far as 70 million km (43 million miles) from the sun. If one could stand on the scorching surface of Mercury when it is at its closest point to the sun, the sun would appear more than three times as large as it does when viewed from Earth.",
        distanceToSun: 0.39,
        moonValue: 0
    });

    db.planets.insert({
        name: "Venus",
        overview: "Planetary Hot Spot",
        image: "images/planet2.png",
        description: "Similar in structure and size to Earth, Venus' thick, toxic atmosphere traps heat in a runaway greenhouse effect. A permanent layer of clouds traps heat, creating surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planets.",
        distanceToSun: 0.72,
        moonValue: 0
    });

    db.planets.insert({
        name: "Earth",
        overview: "Our Home Planet",
        image: "images/planet3.png",
        description: "Earth, our home planet, is the only planet in our solar system known to harbor life - life that is incredibly diverse. All the things we need to survive exist under a thin layer of atmosphere that separates us from the cold, airless void of space.",
        distanceToSun: 1,
        moonValue: 1
    });

    db.planets.insert({
        name: "Mars",
        overview: "The Red Planet",
        image: "images/planet4.png",
        description: "Mars is a cold desert world. It is half the diameter of Earth and has the same amount of dry land. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons and weather, but its atmosphere is too thin for liquid water to exist for long on the surface. There are signs of ancient floods on Mars, but evidence for water now exists mainly in icy soil and thin clouds.",
        distanceToSun: 1.52,
        moonValue: 2
    });
    

    db.planets.insert({
        name: "Jupiter",
        overview: "King of the Planets",
        image: "images/planet5.png",
        description: "Jupiter, the most massive planet in our solar system -- with dozens of moons and an enormous magnetic field -- forms a kind of miniature solar system. Jupiter does resemble a star in composition, but it did not grow big enough to ignite. The planet's swirling cloud stripes are punctuated by massive storms such as the Great Red Spot, which has raged for hundreds of years.",
        distanceToSun: 5.2,
        moonValue: 67
    });


    db.planets.insert({
        name: "Saturn",
        overview: "Jewel of Our Solar System",
        image: "images/planet6.png",
        description: "Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. All four gas giant planets have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like the other gas giants, Saturn is mostly a massive ball of hydrogen and helium.",
        distanceToSun: 9.5,
        "moonValue": 62
    });


    db.planets.insert({
        name: "Uranus",
        overview: "The Sideways Planet",
        image: "images/planet7.png",
        description: "Uranus is the only giant planet whose equator is nearly at right angles to its orbit. A collision with an Earth-sized object may explain the unique tilt. Nearly a twin in size to Neptune, Uranus has more methane in its mainly hydrogen and helium atmosphere than Jupiter or Saturn. Methane gives Uranus its blue tint.",
        distanceToSun: 19.19,
        moonValue: 27
    });


    db.planets.insert({
        name: "Neptune",
        overview: "The Windiest Planet",
        image: "images/planet8.png",
        description: "Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system. More than 30 times as far from the sun as Earth, the planet takes almost 165 Earth years to orbit our sun. In 2011 Neptune completed its first orbit since its discovery in 1846.",
        distanceToSun: 30.07,
        moonValue: 14
    });

