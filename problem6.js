pb6=(arr)=>{
    const cname=[];
    if(typeof arr=='undefined' || arr.length==0){
        return cname;
      }
    for(let i=0;i<arr.length;i++){
        
        if(arr[i].car_make=="BMW" || arr[i].car_make=="Audi"){
         cname.push(arr[i]);
        }
    }
    return cname;
}
module.exports=(pb6);