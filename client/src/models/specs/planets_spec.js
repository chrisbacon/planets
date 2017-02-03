XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Planets = require('../planets');
var assert = require('assert');

describe('Planets request maker/JSON Handler', function() {

    var planets;

    beforeEach(function() {
        planets = new Planets();
    });

    it('should be able to send a request to the API and get all ', function() {
        planets.all(function(planets) {
            assert.equal(planets.length, 8);
        })
    });

})