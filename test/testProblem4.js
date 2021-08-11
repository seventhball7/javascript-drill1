let ires =require('../inventory.js');
const problem4= require('../problem4.js');
let res=pb4(ires);
if(typeof res=='undefined' || res.length==0){
    console.log("Empty array, please specify a value");
    return;
}
console.log(res);
module.exports=(res);