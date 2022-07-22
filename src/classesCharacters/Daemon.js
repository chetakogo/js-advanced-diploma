import Character from '../js/Character';

export default class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
    this.type = 'daemon';
  }
}
