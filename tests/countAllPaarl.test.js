describe('countAllPaarl' , function(){

  it('should list all paarl regNumbers', function(){
      var list = 'CJ';
      assert.notEqual(allPaarl(list), true);
  });
});
