function regCheck(regNo, loc){
	var location = regNo.indexOf(loc);
  	return location != -1;
}
var isGP = regCheck('DV 23 NB GP', 'GP');
console.log(isGP);
