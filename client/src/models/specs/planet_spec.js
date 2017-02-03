var Planet = require('../planet');
var assert = require('assert');


var planet1 new Planet(0, "Mercury", "The Swiftest Planet", 0.39, 0);
var planet2 new Planet(1, "Venus", "Planetary Hot Spot", 0.72, 0);
var planet3 new Planet(2, "Earth", "Our Home Planet", 1, 1);

describe('Planet', function(){
  beforeEach(function){
    // planet1.name = "Mercury";
    // planet2.name = "Venus";
    // planet3.name = "Earth";
  }
});

it('planet should have an id', function(){
  assert.equal(0, planet1.id);
})

it('planet should have a name', function(){
  assert.equal("Earth", planet2.name);
});

it('planet should have a description', function(){
  assert.equal("The Swiftest Planet", planet1.description);
});

it('planet should have a distance from the Sun', function(){
  assert.equal(0.72, planet2.distanceToSun);
});

it('planet should have a moon value', function(){
  assert.equal(0, planet.moonValue);
});


