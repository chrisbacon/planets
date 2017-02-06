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

<<<<<<< HEAD
	createImage: function(url, distance, offset) {
=======
	createImage: function(url, distance) {
		// console.log(distance)
>>>>>>> feature/box_position
        var img = document.createElement('img');
        img.style.marginLeft = distance + "px"
        img.className = "planetIcon";
        img.style.height = "20px";
        img.style.left = -offset + "px";
        img.src = url;

        return img;
    },

	render: function(planets) {
		var nav = document.createElement('nav');
		var container = document.createElement('div');
		var marker = document.createElement('div');

		var body = document.querySelector('body');

		marker.id = 'marker';
        marker.innerText = "m";


		nav.appendChild(marker);
		container.id = "navContainer"

		nav.appendChild(container);
		body.appendChild(nav);
		// console.log(container.offsetWidth, planets[7].distanceToSun);

		var containerWidth = container.offsetWidth;
		var furthestPlanet = planets[7].distanceToSun;

<<<<<<< HEAD
		var distScale = containerWidth/furthestPlanet;

        var prevDistance = 0;
		for (var i=0; i<planets.length; i++) {

=======
		var distScale = containerWidth / furthestPlanet;
		// console.log(distScale);
    
		for (var i=1; i<=planets.length; i++) {
>>>>>>> feature/box_position
			var planet = planets[i];
            console.log(planet.distanceToSun*distScale);
			var img = this.createImage(planet.getImage(), ((planet.distanceToSun - prevDistance)*distScale), (2*i+1)*10);
            container.appendChild(img);

            prevDistance = planet.distanceToSun;

		}

        marker.style.left = container.offsetLeft + "px"
	},

	updateNavBar: function() {
		
		var main = document.querySelector('main');
		var navContainer = document.querySelector('#navContainer');
		var marker = document.querySelector('#marker');

		var mainWidth = main.offsetWidth;
		var navWidth = navContainer.offsetWidth;
		var xPos = window.scrollX;

<<<<<<< HEAD
=======
		// console.log(navWidth);

>>>>>>> feature/box_position
		marker.style.left = (xPos*navWidth/mainWidth) + "px";

	}

}

module.exports = navUI;