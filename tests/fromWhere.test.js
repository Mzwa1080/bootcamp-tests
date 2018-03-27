describe('The fromWhere function', function(){
  it('It should returns the registration number of Bellville', function(){
    //var bellville = 'CY'
    assert.equal(fromWhere('CY'),'Bellville');
  });

  it('It should return the registration number of Paarl', function(){
      assert.equal(fromWhere('CJ'), 'Paarl');
    });

  it('It should return the registration number of Cape Town', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });



});
