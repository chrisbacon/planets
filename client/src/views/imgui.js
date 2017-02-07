var Planets = require('../models/planets');
var Planet = require('../models/planet');

var ImgUI = function() {
    this.planets = new Planets;
    this.clicked = false;
    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))
}

ImgUI.prototype = {

    createImage: function(url, distance, offset) {
        var img = document.createElement('img');
        var main = document.querySelector('main');
        var imageDiv = document.createElement('div');
        imageDiv.className = ('imageDiv')

        img.style.marginLeft = (distance) + "px"
        img.className = "planet";
        img.style.left = -offset + "px";
        img.src = url;

        imageDiv.appendChild(img);
        main.appendChild(imageDiv);

        return imageDiv;
    },

    clickImage: function(imageDiv, planet) {

        var state1 = function() {
            var popupDiv = document.createElement('div')
            popupDiv.className = ('popupBox');
            var span = document.createElement('span');
            span.className = ('close');
            var p = document.createElement('p');

            popupDiv.style.display = 'block';

            span.innerHTML = '&times'
            p.innerText = planet.name + " - " +  "'"+planet.overview+"'" + "\n" + "Number of Moons: " + planet.moonValue + "\n" + "Distance from the sun: " + planet.distanceToSun + "AU" + "\n" + "About this planet: " + planet.description;
           this.appendChild(popupDiv);
           popupDiv.appendChild(span);
           popupDiv.appendChild(p);
           // self.closeBox();
           // if (popupDiv.style.display === 'block'){
           // return this.onclick = null;
            



            
        }

        imageDiv.onclick = state1; 

    },

    render: function(planets) {
        

        var prevDistance = 0


        for (var i=0; i<planets.length; i++) {
            var planet = planets[i]
            var imgDiv = this.createImage(planet.image, (planet.distanceToSun - prevDistance)*1000, (2*i + 1)*174);
            this.clickImage(imgDiv, planet);

            prevDistance = planet.distanceToSun

        }
        
    }

}

module.exports = ImgUI;