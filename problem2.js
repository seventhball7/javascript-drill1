 pb2=arr=>{
   if(typeof arr=='undefined' || arr.length==0){
     return;
   }
    let d=[];
    let l=arr.length-1;
     d.push(arr[l]);
     return d;
}
module.exports =(pb2);