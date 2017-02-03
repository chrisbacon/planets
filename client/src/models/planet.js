var planet = function(options) {
this.id = options.planetId;
this.name = options.name;
this.overview = options.overview;
this.distanceToSun = options.distance_from_sun;
this.moonValue = options.number_of_moons;
this.image = options.image;

};

module.exports = planet;