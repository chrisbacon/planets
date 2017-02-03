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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function(){
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Planets = __webpack_require__(2);
	
	var UI = function() {
	    this.planets = new Planets;
	
	    this.planets.all(function(result) {
	        this.render(result);
	    }.bind(this))
	}
	
	UI.prototype = {
	
	    createImage: function(url) {
	        var img = document.createElement('img');
	        img.src = url;
	    },
	
	    render: function(planets) {
	        var main = document.querySelector('main');
	
	        for (var planet in planets) {
	            var img = this.createImage(planet.getImage());
	            main.appendChild(img);
	        }
	    }
	
	}
	
	module.exports = UI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Planet = __webpack_require__(3);
	
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
	
	        this.makeRequest('http://planets-hurdleg.mybluemix.net/', function() {
	            if (this.status !== 200) {
	                return;
	            }
	            var jsonString = this.responseText;
	            var results = JSON.parse(jsonString);
	
	            var planets = self.populatePlanets(results);
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var planet = function(options) {
	this.id = options.planetId;
	this.name = options.name;
	this.overview = options.overview;
	this.distanceToSun = options.distance_from_sun;
	this.moonValue = options.number_of_moons;
	this.image = options.image;
	
	};
	
	planet.prototype = {
	
	  getImage: function() {
	      return "http://planets-hurdleg.mybluemix.net/planets/"+this.id+"/image"
	    }
	}
	
	module.exports = planet;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map