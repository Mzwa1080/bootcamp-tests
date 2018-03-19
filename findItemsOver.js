function findItemsOver(products, threshold){
  console.log(threshold);

  var newThresh=[];

  for(var i=0; i<threshold.length; i++){
      if(products[i].qty >  threshold){
          newThresh.push(products[i])
      }
  }
    return newThresh;
}
