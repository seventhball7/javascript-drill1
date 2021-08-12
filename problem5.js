 pb5 =(arr)=>{
    const yrs=[];
    if(typeof arr!='object' || arr =='undefined' || arr.length ==0)
      return yrs;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<2000){
            yrs.push(arr[i]);
        }
    }
    return yrs;
}

module.exports=(pb5);