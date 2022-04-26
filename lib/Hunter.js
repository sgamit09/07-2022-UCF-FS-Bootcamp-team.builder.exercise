const Human = require('./Human');

class Hunter extends Human {
  constructor(charClass, name, HP, DEX, weapon){
  super(charClass) 
  this.name = name;
  this.HP = HP;
  this.DEX = DEX;
  this.weapon = weapon;
  }

  getName(){
    return this.name;
  }

  getHP(){
    return this.HP;
  }

  getDEX(){
    return this.DEX;
  }

  getWeapon(){
    return this.weapon;
  }
}

module.exports = Hunter;
