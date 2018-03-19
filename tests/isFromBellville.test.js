describe('isFromBellville',  function(){
  it('should write the registration number of bellville', function(){
    var say = 'CY';
    assert.equal(isFromBellville(say), true);
  });
  it("should right not available" , function(){
    var hi = "CJ"
    assert.equal(isFromBellville(hi), false)
  })
});
