describe('The CountAllPaarl function' , function(){

  it('If test passes the test should list all paarl regNumbers', function(){
         //var newRegNo ="CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864";
         var newRegNum2 = 'CJ 678 543, CJ 67890';
      assert.equal(allPaarl(newRegNum2), 2);
  });
  it('it should return no regNumbers', function(){
        var regNum ="CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864";
        //var check =[ 'CJ 678 543', 'CJ 67890' ];
      assert.equal(allPaarl('regNum'), 0);

  });
});
