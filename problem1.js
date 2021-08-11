pb1 = (arr, id) => {
    const carinfo=[];
    if(typeof arr=='undefined' || arr.length==0)
      return;
    for(let i=0; i<arr.length; i++){
      if(arr[i].id == id){
        carinfo.push(arr[i]);
      }
    }
    return carinfo;
  }
  
module.exports=(pb1);