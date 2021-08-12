let ires= require('../inventory.js');
const problem3 = require('../problem3');
let res=pb3(ires);
if(typeof res=='undefined' || res.length==0){
    console.log([]);
    return;
}
console.log(res);   