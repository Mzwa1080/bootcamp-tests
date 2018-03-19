function allFromTown(regNum,locNum){
	var allRegNum = regNum.split(',');
  	var regNumStr = [];
  	console.log(regNum);
  	//console.log(allRegNum);

 for (var i=0; i<allRegNum.length; i++)
   	if(allRegNum[i].startsWith(locNum)){
      regNumStr.push(allRegNum[i])

    }
  return regNumStr.length;
}
var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');

assert.deepEqual(fromKuilsriver, []);
