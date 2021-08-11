pb4= (arr) =>{
    const years=[];
    if(typeof arr=='undefined' || arr.length==0){
        return;
      }
   
    for(let i=0;i<arr.length;i++){
        years.push(arr[i].car_year);
       
    }
    return years;

}
//export {years} from problem4.js;

module.exports=(pb4);

