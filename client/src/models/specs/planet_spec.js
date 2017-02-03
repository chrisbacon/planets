var Planet = require('../planet');
var assert = require('assert');


describe('Planet', function(){
  var planet1;
  var planet2;
  var planet3;
  beforeEach(function(){

    planet1 = new Planet({
      id: 0,
      name: "Mercury", 
      description: "The Swiftest Planet",
      distanceToSun: 0.39,
      moonValue: 0});
    planet2 = new Planet({id: 1, name: "Venus", description: "Planetary Hot Spot", distanceToSun: 0.72, moonValue: 0});
    planet3 = new Planet({id: 2, name: "Earth", description: "Our Home Planet", distanceToSun: 1, moonValue: 1});

  });


  it('planet should have an id', function(){
    assert.equal(0, planet1.id);
  });

  it('planet should have a name', function(){
    assert.equal("Venus", planet2.name);
  });

  it('planet should have a description', function(){
    assert.equal("The Swiftest Planet", planet1.description);
  });

  it('planet should have a distance from the Sun', function(){
    assert.equal(0.72, planet2.distanceToSun);
  });

  it('planet should have a moon value', function(){
    assert.equal(1, planet3.moonValue);
  });



});

