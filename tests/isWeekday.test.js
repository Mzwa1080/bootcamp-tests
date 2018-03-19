describe('isWeekday', function(){
  it("should print out the weekday", function(){
    var days = "Tuesday";
    assert.equal(isWeekday(days), true);
  });

  it("should print out the weekend", function(){
      var wEnd = "satDay";
      assert.equal(isWeekday(wEnd), false);

  })

});
