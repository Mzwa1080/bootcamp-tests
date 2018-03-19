function totalPhoneBill(bill){

  var phoneBill = bill.split(', ');
	var call = 0;
	var sms = 0;


  for (i= 0; i<phoneBill.length; i++){
    var allMade = phoneBill[i]
    if(phoneBill[i].startsWith('c')){
      call = call + 1;

    }
    else{
      sms = sms + 1;
    }
  }
  var Total =  call*2.75 + sms*0.65;
  return "R" +Total.toFixed(2);
}
