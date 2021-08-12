pb3 = (arr) =>{
    const cmodels=[];
    if(typeof arr=='undefined' || typeof arr!='object' || arr.length==0){
        return cmodels;
      }
    for(var i=0;i<arr.length;i++){
        cmodels.push(arr[i].car_model);
        
    }
    for(let i=0;i<cmodels.length;i++){
        for(j=i+1;j<cmodels.length;j++){
            if(cmodels[i]>cmodels[j]){
                let temp=cmodels[i];
                cmodels[i]=cmodels[j];
                cmodels[j]=temp;
            }
        }
    }
    return cmodels;
}
module.exports=(pb3);