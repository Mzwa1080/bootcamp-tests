describe('The isFromBellville function',  function(){
  it('If the test passes it should write the registration number of bellville', function(){

    assert.equal(isFromBellville("CY-25171"), true);
  });
  it("If the test fails it should return the wrong registration" , function(){

    assert.equal(isFromBellville('CJ-655787'), false)
  })
});
