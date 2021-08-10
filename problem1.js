pb1 = (arr, id) => {
    const carinfo=[];
    for(let i=0; i<arr.length; i++){
      if(arr[i].id == id){
        carinfo.push(arr[i]);
      }
    }
    return carinfo;
  }
  
module.exports=(pb1);