var Planet = require('../planet');
var assert = require('assert');


describe('Planet', function(){
  var planet1;
  var planet2;
  var planet3;
  beforeEach(function(){

    planet1 = new Planet({
      id: 1,
      name: "Mercury", 
      overview: "The Swiftest Planet",
      distanceToSun: 0.39,
      moonValue: 0,
      description: "Description"});
    planet2 = new Planet({id: 1, name: "Venus", overview: "Planetary Hot Spot", distanceToSun: 0.72, moonValue: 0, description: "Description"});
    planet3 = new Planet({id: 2, name: "Earth", overview: "Our Home Planet", distanceToSun: 1, moonValue: 1, description: "Description"});

  });


  it('planet should have an id', function(){
    assert.equal(1, planet1.id);
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

  it('has description', function() {
    assert.equal("Description", planet1.description);
  })



});

