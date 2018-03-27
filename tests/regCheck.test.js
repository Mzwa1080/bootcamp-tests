describe("The regCheck function" , function(){
  it('It should check if the regNumber of MP', function(){
      assert.equal(regCheck('DV 23 NB GP', 'MP') ,false);
  });
  it('it should check if the regNumber is from GP', function(){

      assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
  /*it("should check regNumbers", function(){
    assert.equal(regCheck(results), false)
  })*/
});
