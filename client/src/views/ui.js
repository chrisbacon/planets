var Planets = require('../models/planets');
var Planet = require('../models/planet')

var UI = function() {
    this.planets = new Planets;

    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))
}

UI.prototype = {

    createImage: function(url) {
        var img = document.createElement('img');
        img.src = url;
        return img;
    },

    render: function(planets) {
        var main = document.querySelector('main');
        for (var planet of planets) {
            console.log(planet.getImage())
            var img = this.createImage(planet.getImage());
            main.appendChild(img);
        }
    }

}

module.exports = UI;