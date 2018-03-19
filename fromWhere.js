function fromWhere(regNo){
	if (regNo=='CY'){
    	return 'Bellville';
    }
	else if(regNo == 'CJ'){
    	return 'Paarl';
    }
  	else if(regNo == 'CA'){
    	return 'Cape Town';
    }
	else{
      	return 'Some other place!';
    }
}
