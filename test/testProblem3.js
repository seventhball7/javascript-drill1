let ires= require('../inventory.js');
const problem3 = require('../problem3');
let res=pb3(ires);
if(typeof res=='undefined' || res.length==0){
    console.log("Empty array, please specify a value");
    return;
}
console.log(res);   