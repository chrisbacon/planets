var Planet = require('../planet');
var assert = require('assert');


describe('Planet', function(){
  var planet1;
  var planet2;
  var planet3;
  beforeEach(function(){

    planet1 = new Planet({
      planetId: 0,
      name: "Mercury", 
      overview: "The Swiftest Planet",
      distance_from_sun: 0.39,
      number_of_moons: 0});
    planet2 = new Planet({planetId: 1, name: "Venus", overview: "Planetary Hot Spot", distance_from_sun: 0.72, number_of_moons: 0});
    planet3 = new Planet({planetId: 2, name: "Earth", overview: "Our Home Planet", distance_from_sun: 1, number_of_moons: 1});

  });


  it('planet should have an id', function(){
    assert.equal(0, planet1.id);
  });

  it('planet should have a name', function(){
    assert.equal("Venus", planet2.name);
  });

  it('planet should have a overview', function(){
    assert.equal("The Swiftest Planet", planet1.overview);
  });

  it('planet should have a distance from the Sun', function(){
    assert.equal(0.72, planet2.distanceToSun);
  });

  it('planet should have a moon value', function(){
    assert.equal(1, planet3.moonValue);
  });

  it('get image', function() {
    assert.equal("/images/planet1.png", planet2.getImage());
  });



});

