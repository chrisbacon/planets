var Planets = require('../models/planets');
var Planet = require('../models/planet');

var navUI = function() {
    this.planets = new Planets;

    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))
}

navUI.prototype = {

	render: function() {
		var nav = document.createElement('nav');
		var body = document.querySelector('body');

		body.appendChild(nav);
	}

}

module.exports = navUI;