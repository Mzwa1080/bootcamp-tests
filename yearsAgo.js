function yearsAgo(year){
	var currYear = new Date();
 	 console.log(currYear);
 	var fullYear = currYear.getFullYear();
  	console.log(fullYear);

 	 var  diffYear = fullYear - year;
  	console.log(diffYear);
  	return diffYear;
}
