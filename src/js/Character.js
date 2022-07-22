/* eslint-disable no-plusplus */
export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"

    if (new.target === 'Character') {
      throw new Error('Нельзя создавать объекты класса через new Character(level)');
    }
  }

  levelUp() {
    if (this.health + 80 > 100) {
      this.health = 100;
    } else {
      this.health += 80;
    }
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.level++;
  }
}
