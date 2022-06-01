export function calcTileType(index, boardSize) {
  // TODO: write logic here
  switch (true) {
    case (index === 0):
      return 'top-left';
    case (index === 7):
      return 'top-right';
    case (index === 56):
      return 'bottom-left';
    case (index === 63):
      return 'bottom-right';
    case (index > 0 && index < 7):
      return 'top';
    case (index > 56 && index < 63):
      return 'bottom';
    case (index % boardSize === 0):
      return 'left';
    case (index % boardSize === 7):
      return 'right';
    default:
      return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
