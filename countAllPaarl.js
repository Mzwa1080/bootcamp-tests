function allPaarl(regNo){
	var newRegNo = regNo.split(', ');
  	console.log(regNo);
  	var newRegNum2 = [];

	for (var i=0; i<newRegNo.length; i++){
    	if(newRegNo[i].startsWith('CJ')){
  			newRegNum2.push(newRegNo[i]);
           }

    }
 		return newRegNum2.length;
}
