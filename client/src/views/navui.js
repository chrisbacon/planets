var Planets = require('../models/planets');
var Planet = require('../models/planet');

var navUI = function() {
    this.planets = new Planets;

    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))

    window.onscroll = this.updateNavBar
}

navUI.prototype = {

	createImage: function(url, distance) {
		console.log(distance)
        var img = document.createElement('img');
        img.style.left = distance + "px"
        img.className = "planet"
        img.style.height = "20px";
        img.src = url;

        return img;
    },

	render: function(planets) {
		var nav = document.createElement('nav');
		var container = document.createElement('div');
		var marker = document.createElement('div');

		var body = document.querySelector('body');

		marker.id = 'marker';

		container.appendChild(marker);
		container.id = "navContainer"

		nav.appendChild(container);
		body.appendChild(nav);
		console.log(container.offsetWidth, planets[7].distanceToSun);

		var containerWidth = container.offsetWidth;
		var furthestPlanet = planets[7].distanceToSun;

		var distScale = containerWidth / furthestPlanet;
		console.log(distScale);

		for (var i=0; i<planets.length; i++) {
			var planet = planets[i];
			var img = this.createImage(planet.image, planet.distanceToSun*distScale - i*20);
            container.appendChild(img);
		}
	},

	updateNavBar: function() {
		
		var main = document.querySelector('main');
		var navContainer = document.querySelector('#navContainer');
		var marker = document.querySelector('#marker')

		var mainWidth = main.offsetWidth;
		var navWidth = navContainer.offsetWidth;
		var xPos = window.scrollX;

		console.log(navWidth);

		marker.style.left = (xPos*navWidth/mainWidth) + "px";

	}

}

module.exports = navUI;