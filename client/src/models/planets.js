var Planet = require('planet');

var planets = function() {

};

planets.prototype = {

    makeRequest: function (url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = callback;
      request.send();
    },

    all: function(callback) {

        var self = this;

        this.makeRequest('https://planets-hurdleg.mybluemix.net/', function() {
            if (this.status !== 200) {
                return;
            }
            var jsonString = this.responseText;
            var results = JSON.parse(jsonString);

            var planets = self.populatePlanets(results);
            callback(planets);
        });
    },

    populatePlanets: function(results) {
        var planets = [];
        for (var result of results) {
            var planet = new Planet(result);
            planets.push(planet);
        }
        return planets;
    }   

}

module.exports = planets;