function mostProfitableDepartment(sales){
  //console.log(sales);

  var newDepartment = {};
  var departmentName = ' ';
  var max = 0;
  for(var i=0; i<sales.length; i++){

    var currentDepartment = sales[i];

    if(newDepartment[currentDepartment.department] === undefined){
      newDepartment[currentDepartment.department] = 0;
    }
     //Incrementing the currentDepartment
      newDepartment[currentDepartment.department] += currentDepartment.sales;
    }
  console.log(newDepartment);

  //Loop through the department list using the for in Loop...
for(var departments in newDepartment){
    if(newDepartment[departments] > max){
      max = newDepartment[departments];
      departmentName = departments;
      console.log(departmentName);
    }
  }
  return departmentName;
}


function mostProfitableDay(sales){
	var newDay ={};
  	var dayName = ' ';
  	var max =0;

 for(var i=0; i<sales.length; i++){

    var currentOne = sales[i]; //this var will store the current day
    //Check if the current depertment exists and add it
    if(newDay[currentOne.day] === undefined){
      newDay[currentOne.day] = 0;
    }
     //Increment the current map by 1
      newDay[currentOne.day] += currentOne.sales;
    }
  console.log(newDay);

  //Loop through the newDepartment Day
for(var day in newDay){
    if(newDay[day] > max){
      max = newDay[day];
      dayName = day;
      console.log(dayName);
    }
  }
  return dayName;
}
