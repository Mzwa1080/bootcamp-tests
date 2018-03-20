describe('The isWeekday function', function(){
  it("If test passes it should print out the weekday", function(){
    assert.equal(isWeekday('Monday'), true);
  });

  it("If test fails it should return the weekend", function(){

      assert.notEqual(isWeekday('Sunday'), false);

  })

});
