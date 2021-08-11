 pb5 =(arr)=>{
    const yrs=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].car_year<2000){
            yrs.push(arr[i].car_year);
        }
    }
    return yrs;
}
module.exports=(pb5);