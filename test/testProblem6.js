let ires= require('../inventory.js');
let problem6=require('../problem6.js');
let res=pb6(ires);
if(typeof res=='undefined' || res.length==0){
    console.log(res);
    return;
}
console.log(JSON.stringify( res));