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
            // console.log(planet.name, 'runs state1')
            var popupDiv = document.querySelector('.popupBox')
            popupDiv.className = ('overlay');
            var span = document.createElement('span');
            span.className = 'close';
            var p = document.createElement('p');

            popupDiv.style.display = "block";
            popupDiv.innerHTML = "";
            

            span.innerHTML = '&times'
            p.innerText = planet.name + " - " +  "'"+planet.overview+"'" + "\n" + "Number of Moons: " + planet.moonValue + "\n" + "Distance from the sun: " + planet.distanceToSun + "AU" + "\n" + "Interesting Facts: " + planet.description;
            popupDiv.appendChild(span);
            popupDiv.appendChild(p);



            span.onclick = function(event) {
                event.stopPropagation();

                popupDiv.style.display = "none";
                imageDiv.onclick = state1;
            }
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