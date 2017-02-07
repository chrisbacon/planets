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

	createImage: function(url, distance, offset) {

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
    // console.log(planets)
    var containerWidth = container.offsetWidth;
    var furthestPlanet = planets[7].distanceToSun;
    

    var distScale = containerWidth/furthestPlanet;

    var prevDistance = 0;


    for (var i=0; i<planets.length; i++) {
     var planet = planets[i];
     var img = this.createImage(planet.image, ((planet.distanceToSun - prevDistance)*distScale), (2*i+1)*10);
     container.appendChild(img);

     prevDistance = planet.distanceToSun;

   }

   marker.style.left = container.offsetLeft + "px"
   this.scrollToNeptune();
   this.scrollToUranus();
   this.scrollToSaturn();
   this.scrollToJupitor();
   this.scrollToMars();
   this.scrollToEarth();
   this.scrollToVenus();
   this.scrollToMercury();
   this.scrollToSun();
 },

 updateNavBar: function() {

  var main = document.querySelector('main');
  var navContainer = document.querySelector('#navContainer');
  var marker = document.querySelector('#marker');

  var mainWidth = main.offsetWidth;
  var navWidth = navContainer.offsetWidth;
  var xPos = window.scrollX;

  marker.style.left = (xPos*navWidth/mainWidth) + "px";

},

scrollToSun: function() {
  var sunIcon = document.querySelectorAll('.planetIcon')[0];
  sunIcon.onclick = function() {
    window.scrollTo(0, document.body.scrollWidth);
  }
},

scrollToMercury: function() {
  var mercuryIcon = document.querySelectorAll('.planetIcon')[1];
  mercuryIcon.onclick = function() {
    window.scrollTo(550, document.body.scrollWidth);
  }
},

scrollToVenus: function() {
  var venusIcon = document.querySelectorAll('.planetIcon')[2];
  venusIcon.onclick = function() {
    window.scrollTo(1050, document.body.scrollWidth);
  }
},

scrollToEarth: function() {
  var earthIcon = document.querySelectorAll('.planetIcon')[3];
  earthIcon.onclick = function() {
    window.scrollTo(1500, document.body.scrollWidth);
  }
},

scrollToMars: function() {
  var marsIcon = document.querySelectorAll('.planetIcon')[4];
  marsIcon.onclick = function() {
    window.scrollTo(2200, document.body.scrollWidth);
  }
},

scrollToJupitor: function() {
  var jupitorIcon = document.querySelectorAll('.planetIcon')[5];
  jupitorIcon.onclick = function() {
    window.scrollTo(6150, document.body.scrollWidth);
  }
},

scrollToSaturn: function() {
  var saturnIcon = document.querySelectorAll('.planetIcon')[6];
  saturnIcon.onclick = function() {
    window.scrollTo(11050, document.body.scrollWidth);
  }
},

scrollToUranus: function() {
  var uranusIcon = document.querySelectorAll('.planetIcon')[7];
  uranusIcon.onclick = function() {
    window.scrollTo(21250, document.body.scrollWidth);
  }
},

scrollToNeptune: function() {
  var neptuneIcon = document.querySelectorAll('.planetIcon')[8];
  neptuneIcon.onclick = function() {
    window.scrollTo(32400, document.body.scrollWidth);
  }
}

}

module.exports = navUI;