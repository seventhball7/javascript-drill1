let ires= require('../inventory.js');
const problem1 = require('../problem1');
let result=pb1(ires,33);
if(typeof result=='undefined' || result.length==0){
    console.log("Empty array, please specify a value");
    return;
}
console.log(`Car ${result[0].id} is a ${result[0].car_year} ${result[0].car_make} ${result[0].car_model}`);

