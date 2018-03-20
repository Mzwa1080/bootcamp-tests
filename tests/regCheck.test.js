describe("regCheck" , function(){
  it('should check the regNumbers', function(){
      assert.equal(regCheck('DV 23 NB MP', 'GP'), false);
  });
  it('should check the regNumbers', function(){

      assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
  /*it("should check regNumbers", function(){
    assert.equal(regCheck(results), false)
  })*/
});
