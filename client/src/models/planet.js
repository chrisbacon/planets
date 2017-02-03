var planet = function(options) {
this.id = options.id;
this.name = options.name;
this.overview = options.overview;
this.distanceToSun = options.distanceToSun;
this.moonValue = options.moonValue;
this.image = options.image;

};

planet.prototype = {

  getImage: function() {
      return '/images/planet'+this.id+'.png';
    }
}

module.exports = planet;