describe('The totalPhoneBill function', function(){
    it('it should give a totalPhoneBill of sms\'s made & calls made R12.30', function(){
      assert.equal(totalPhoneBill('call, call , call, call, call, sms, sms'), 'R12.30', true);
    });

    it('it should give an amount of "Calls" made only', function(){
        //var call = 'R2.75';
        assert.equal(totalPhoneBill('call, call, call, call, call'),  'R13.75', true);
    })

    it('it should give an amount of "SMS\'s" made only', function(){
        assert.equal(totalPhoneBill('sms, sms, sms'),  'R1.95', true);
    })

});
