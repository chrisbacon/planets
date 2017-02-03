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

        this.makeRequest('https://restcountries.eu/rest/v1/all', function() {
            if (this.status !== 200) {
                return;
            }
            var jsonString = this.responseText;
            var results = JSON.parse(jsonString);

            var planets = self.populatePlanet(results);
            callback(planets);
        });
    },

    populatePlanets: function(results) {
        var planets = [];
        for (var result of results) {
            var planet = {name: result.name};
            planets.push(country);
        }
        return planets;
    }   

}

module.exports = planets;