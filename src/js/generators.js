/* eslint-disable no-plusplus */
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const randomIndex = Math.floor(Math.random() * allowedTypes.length);
  const newMember = Object.create(allowedTypes[randomIndex]);
  newMember.level = Math.floor(Math.random() * maxLevel + 1);
  yield newMember;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const members = [];

  for (let i = 0; i < characterCount; i++) {
    members.push(characterGenerator(allowedTypes, maxLevel).next().value);
  }
  return members;
}
