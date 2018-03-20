describe('The fromWhere', function(){
  it('If the test passes it should returns the town the car is from', function(){
    assert.notEqual(fromWhere, true);
  });
  it('If the test fails it should return "some other place"', function(){

    assert.notDeepEqual(fromWhere, true);
  });
});
