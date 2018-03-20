describe('The CountAllPaarl function' , function(){

  it('If test passes the test should list all paarl regNumbers', function(){
         var newRegNo ="CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864";
         var newRegNum2 = ['CJ 678 543', 'CJ 67890'];
      assert.notEqual(allPaarl(newRegNo), 2);
  });
  it('If test fails it should return all regNumbers', function(){
        var regNum ="CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864";
        var check =[ 'CJ 678 543', 'CJ 67890' ];
      assert.notEqual(allPaarl(regNum),5);

  })
});
