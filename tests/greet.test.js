describe('The greet function', function(){
  it('If the test passes it should say Hello!', function(){
    var name = 'Mzwa';
    assert.equal(greet(name), 'Hello, Mzwa');
  });
  it('If the test failed it musn\'t return anything', function(){
    assert.notEqual(greet, true)
  })
});
