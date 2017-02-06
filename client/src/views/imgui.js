var Planets = require('../models/planets');
var Planet = require('../models/planet');

var ImgUI = function() {
    this.planets = new Planets;

    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))
}

ImgUI.prototype = {

    createImage: function(url) {
        var main = document.querySelector('main');
        var img = document.createElement('img');
        var imageDiv = document.createElement('div');
        imageDiv.className = ('imageDiv')
        
        img.className = "planet"
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
        var main = document.querySelector('main');
       
     
        for (var planet of planets) {
            
            var imageDiv = this.createImage(planet.getImage());
            // this.imageSpacing(planet.distanceToSun);
           
            this.clickImage(imageDiv, planet);
           
           
        }
        
    }

}

module.exports = ImgUI;