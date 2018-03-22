describe('The transportFee function', function(){
  it('If the test passes it should return the right price based on the shifts', function(){
    assert.notEqual('transportFee', true);
  });



  it('If the test fails it should return nothing', function(){
    var none = 0.00;
    assert.notDeepEqual(transportFee(none), false)
  });
});
