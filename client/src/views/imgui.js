var Planets = require('../models/planets');
var Planet = require('../models/planet');

var ImgUI = function() {
    this.planets = new Planets;

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

    imageSpacing: function(distance) {
        var imgDiv = document.querySelector('#imgDiv');
        imgDiv.style.left = distance*1000 + "px"
    },


    clickImage: function(imageDiv, planet) {
        var self = this;
      
        imageDiv.onclick = function() {

            var popupDiv = document.createElement('div')
            popupDiv.className = ('popupBox');
            var span = document.createElement('span');
            span.className = ('close');
            console.log('span', span)
            var p = document.createElement('p');
            
            popupDiv.style.display = 'block';
            span.innerHTML = '&times'
            p.innerText = planet.name + "\n" + planet.overview + "\n" + "Number of Moons: " + planet.moonValue + "\n" + "Distance from the sun: " + planet.distanceToSun + "AU";
           this.appendChild(popupDiv);
           popupDiv.appendChild(span);
           popupDiv.appendChild(p);
           // self.closeBox();
           this.onclick = null;

           span.onclick = function() {
            popupDiv.style.display = 'none';
               console.log(event);
           }

           // window.onclick = function(event) {
           //     if(event.target != popupDiv) {
           //         popupDiv.style.display = 'none';
           //     }
           // }

        }
    },

    render: function(planets) {
        

        var prevDistance = 0

        for (var i=0; i<planets.length; i++) {
            var planet = planets[i]
            var imgDiv = this.createImage(planet.image, (planet.distanceToSun - prevDistance)*1000, (2*i + 1)*174);
            this.clickImage(imgDiv, planet);
            // main.appendChild(img);

            prevDistance = planet.distanceToSun

        }
        
    }

}

module.exports = ImgUI;