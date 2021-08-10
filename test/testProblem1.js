let ires= require('../inventory.js');
const problem1 = require('../problem1');
let result=pb1(ires,33);
let ans =`Car ${result[0].id} is a ${result[0].car_year} ${result[0].car_make} ${result[0].car_model}`;
console.log(ans);

