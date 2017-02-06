/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var planet = function(options) {
this.id = options.id;
this.name = options.name;
this.overview = options.overview;
this.distanceToSun = options.distanceToSun;
this.moonValue = options.moonValue;
this.image = options.image;

};

planet.prototype = {

  getImage: function() {
      return '/images/planet'+this.id+'.png';
    }
}

module.exports = planet;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Planet = __webpack_require__(0);

var planets = function() {

};

planets.prototype = {

    makeRequest: function (url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = callback;
      request.send();
    },

    all: function(callback) {

        var self = this;

        this.makeRequest('http://localhost:3000/planets', function() {
            if (this.status !== 200) {
                return;
            }
            var jsonString = this.responseText;
            var results = JSON.parse(jsonString);

            // console.log(results);
            var planets = self.populatePlanets(results.data);
            callback(planets);
        });
    },

    populatePlanets: function(results) {
        var planets = [];
        for (var result of results) {
            var planet = new Planet(result);
            planets.push(planet);
        }
        return planets;
    }   

}

module.exports = planets;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var imgUI = __webpack_require__(3);
var navUI = __webpack_require__(4);

var UI = function() {
    new imgUI();
    new navUI();
}

module.exports = UI;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Planets = __webpack_require__(1);
var Planet = __webpack_require__(0);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Planets = __webpack_require__(1);
var Planet = __webpack_require__(0);

var navUI = function() {
    this.planets = new Planets;

    this.planets.all(function(result) {
        this.render(result);
    }.bind(this))

    window.onscroll = this.updateNavBar
}

navUI.prototype = {

	createImage: function(url, distance) {
		// console.log(distance)
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
		// console.log(container.offsetWidth, planets[7].distanceToSun);

		var containerWidth = container.offsetWidth;
		var furthestPlanet = planets[7].distanceToSun;

		var distScale = containerWidth / furthestPlanet;
		// console.log(distScale);
    
		for (var i=1; i<=planets.length; i++) {
			var planet = planets[i];
			var img = this.createImage(planet.getImage(), planet.distanceToSun*distScale - i*20);
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

		// console.log(navWidth);

		marker.style.left = (xPos*navWidth/mainWidth) + "px";

	}

}

module.exports = navUI;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(2);

var app = function(){
  new UI();
}

window.onload = app;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map