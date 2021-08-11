const ires= require('./testProblem4.js');
let problem5= require('../problem5.js');
let res=pb5(ires);
if(typeof res=='undefined' || res.length==0){
    console.log("Empty array, please specify a value");
    return;
}
console.log(res);
console.log(res.length);