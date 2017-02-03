var Planets = require('../models/planets');

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
    },

    render: function(planets) {
        var main = document.querySelector('main');

        for (var planet in planets) {
            var img = this.createImage(planet.image);
            main.appendChild(img);
        }
    }

}

module.exports = UI;