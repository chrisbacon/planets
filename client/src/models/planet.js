var planet = function(options) {
this.id = options.planetId;
this.name = options.name;
this.overview = options.overview;
this.distanceToSun = options.distance_from_sun;
this.moonValue = options.number_of_moons;
this.image = options.image;

};

planet.prototype = {

  getImage: function() {
      return "http://planets-hurdleg.mybluemix.net/planets/"+this.id+"/image"
    }
}

module.exports = planet;