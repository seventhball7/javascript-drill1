pb3 = (arr) =>{
    const cmodels=[];
    for(var i=0;i<arr.length;i++){
        cmodels.push(arr[i].car_model);
        
    }
    cmodels.sort();
    return cmodels;
}
module.exports=(pb3);