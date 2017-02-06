var Planets = require('../models/planets');
var Planet = require('../models/planet');

var ImgUI = function() {
    this.planets = new Planets;

    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))
}

ImgUI.prototype = {

    createImage: function(url, distance) {
        var img = document.createElement('img');
        img.style.left = distance*1000 + "px"
        img.className = "planet"
        img.src = url;

        return img;
    },

    clickImage: function(img, planet) {
        var body = document.querySelector('body')
        var div = document.querySelector('#popupBox')
        var span = document.getElementsByClassName('close')[0];
        var p = document.querySelector('p')
      
        img.onclick = function() {
            div.style.display = 'block';
            p.innerText = planet.name + "\n" + planet.overview + "\n" + "Number of Moons: " + planet.moonValue + "\n" + "Distance from the sun: " + planet.distanceToSun + "AU";
        }

        span.onclick = function() {
            div.style.display = 'none';
        }

        window.onclick = function(event) {
            if(event.target == div) {
                div.style.display = 'none';
            }
        }
         
    },

    render: function(planets) {
        var main = document.querySelector('main');
        
        
        for (var planet of planets) {
            var img = this.createImage(planet.getImage(), planet.distanceToSun);
            this.clickImage(img, planet);
            main.appendChild(img);
        }

    }

}

module.exports = ImgUI;