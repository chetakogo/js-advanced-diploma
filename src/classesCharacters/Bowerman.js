import Character from '../js/Character';

export default class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
    this.type = 'bowman';
  }
}