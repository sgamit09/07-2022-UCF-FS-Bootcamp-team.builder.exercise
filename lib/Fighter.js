const Human = require('./Human');

class Fighter extends Human {
  constructor(charClass, name, HP, STR, weapon){
  super(charClass) 
  this.name = name;
  this.HP = HP;
  this.STR = STR;
  this.weapon = weapon;
  }
  
  getName(){
    return this.name;
  }
  
  getHP(){
    return this.HP;
  }

  getSTR(){
    return this.STR;
  }

  getWeapon(){
    return this.weapon;
  }
}

module.exports = Fighter;