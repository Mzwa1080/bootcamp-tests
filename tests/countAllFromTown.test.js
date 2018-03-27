describe('The countAllFromTown function', function(){
    it('it should list all the required town registration', function(){
      var regNumStr = 'CL 124,CY 567,CL 345, CJ 456,CL 341';
      assert.equal(allFromTown(regNumStr), 0);
    });
    it('If the test fails it supopse to return every registration', function(){
          var regNumStr = 'CL 124,CY 567,CL 345, CJ 456,CL 341';
        assert.notEqual(allFromTown(regNumStr), true)
    })
});
