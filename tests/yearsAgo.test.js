describe('The yearsAgo function', function(){
  it('If test passes this test should print out the current year', function(){

      assert.equal(yearsAgo('2018'), 0);
  })

  it('If the test fails it shouldn\'t print out the current year', function(){

      assert.equal(yearsAgo('2038'), -20);
  });
});
