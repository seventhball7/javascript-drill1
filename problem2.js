 pb2=arr=>{
     let d=[];
    if(typeof arr=='undefined' || arr.length==0){
      return d;
    }
    let l=arr.length-1;
     d.push(arr[l]);
     return d;
}
module.exports =(pb2);