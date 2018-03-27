describe('The isWeekday function', function(){
  it("If test passes it should print out the weekday", function(){
    assert.equal(isWeekday('Monday'), true);
  });

  it("If the 1st test fails it should return the weekend", function(){

      assert.equal(isWeekday('Sunday'), false);

  })

});
