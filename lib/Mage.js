const Human = require('./Human');

class Mage extends Human {
  constructor(charClass, name, HP, MAG, weapon){
  super(charClass) 
  this.name = name;
  this.HP = HP;
  this.MAG = MAG;
  this.weapon = weapon;
  }

  getName(){
    return this.name;
  }

  getHP(){
    return this.HP;
  }

  getMAG(){
    return this.MAG;
  }

  getWeapon(){
    return this.weapon;
  }
}
module.exports = Mage;