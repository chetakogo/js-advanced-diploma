import Character from '../js/Character';

export default class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
    this.type = 'swordsman';
    this.attackRadius = 1;
    this.stepRadius = 4;
  }
}
