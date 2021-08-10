module.exports = (inventory, id) => {
    const carinfo=[];
    for(let i=0; i<inventory.length; i++){
      if(inventory[i].id == id){
        carinfo.push(inventory[i]);
      }
    }
    return carinfo;
  }
  
