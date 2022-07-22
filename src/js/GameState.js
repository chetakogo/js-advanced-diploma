/* eslint-disable no-restricted-syntax */
import Bowman from '../classesCharacters/Bowerman';
import Daemon from '../classesCharacters/Daemon';
import Swordsman from '../classesCharacters/Swordsman';
import Magician from '../classesCharacters/Magician';
import Undead from '../classesCharacters/Undead';
import Vampire from '../classesCharacters/Vampire';
import PositionedCharacter from './PositionedCharacter';

export default class GameState {
  constructor(toGo, level, score, scoreMax, playerTeam, enemyTeam) {
    this.toGo = toGo;
    this.level = level;
    this.score = score;
    this.scoreMax = scoreMax;
    this.playerTeam = playerTeam;
    this.enemyTeam = enemyTeam;
  }

  from(object) {
    this.level = object.level;
    this.toGo = object.toGo;
    this.score = object.score;
    this.scoreMax = object.scoreMax;
    this.player = [];
    this.enemy = [];

    for (const anotherOne of object.player) {
      let newChar = 0;
      switch (anotherOne.type) {
        case 'swordsman':
          newChar = new Swordsman(anotherOne.member.character.level);
          break;
        case 'bowman':
          newChar = new Bowman(anotherOne.member.character.level);
          break;
        case 'magician':
          newChar = new Magician(anotherOne.member.character.level);
          break;
        default:
          throw new Error('It is not player classes!');
      }
      for (const stats in anotherOne.member.character) {
        if ({}.hasOwnProperty.call(anotherOne.member.character, stats)) {
          newChar[stats] = anotherOne.member.character[stats];
        }
      }
      this.player.push(
        {
          type: anotherOne.type,
          member: new PositionedCharacter(newChar, anotherOne.member.l_position),
        },
      );
    }
    for (const anotherOne of object.enemy) {
      let newChar = 0;
      switch (anotherOne.type) {
        case 'vampire':
          newChar = new Vampire(anotherOne.member.character.level);
          break;
        case 'daemon':
          newChar = new Daemon(anotherOne.member.character.level);
          break;
        case 'undead':
          newChar = new Undead(anotherOne.member.character.level);
          break;
        default:
          throw new Error('It is not enemy classes!');
      }
      for (const stats in anotherOne.member.character) {
        if ({}.hasOwnProperty.call(anotherOne.member.character, stats)) {
          newChar[stats] = anotherOne.member.character[stats];
        }
      }
      this.enemy.push(
        {
          type: anotherOne.type,
          member: new PositionedCharacter(newChar, anotherOne.member.l_position),
        },
      );
    }
  }

  set playerTeam(positioned) {
    this.player = [];
    for (const member of positioned) {
      this.player.push({ type: member.character.type, member });
    }
  }

  get playerTeam() {
    return this.player.map((anotherOne) => anotherOne.member);
  }

  set enemyTeam(positioned) {
    this.enemy = [];
    for (const member of positioned) {
      this.enemy.push({ type: member.character.type, member });
    }
  }

  get enemyTeam() {
    return this.enemy.map((anotherOne) => anotherOne.member);
  }
}
