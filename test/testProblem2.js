let ires= require('../inventory.js');
const problem2= require('../problem2.js');
let res=pb2(ires);
if(typeof res=='undefined' || res.length==0){
    console.log(res);
    return;
}
console.log(`Last car is a ${res[0].car_make} ${res[0].car_model}`);