describe('greet', function(){
  it('should say Hello!', function(){
    var name = 'Mzwa';
    assert.equal(greet(name), 'Hello, Mzwa');
  });
});
