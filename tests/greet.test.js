describe('The greet function', function(){
  it('If the test passes it should say Hello Mzwa', function(){
    var name = 'Mzwa';
    assert.equal(greet(name), 'Hello, Mzwa', true);
  });
  it('If the test failed it musn\'t return anything', function(){
      var gama = 'shane';
    assert.isOk(greet(gama), false)
  })
});
