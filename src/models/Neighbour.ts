/*
|   |   |   |   |   |
|   | 1 | 2 | 3 |   |
|   | 4 | x | 5 |   |
|   | 6 | 7 | 8 |   |
|   |   |   |   |   |
*/

export enum Neighbour {
  upper_left = 1,
  upper = 2,
  upper_right = 3,
  left = 4,
  right = 5,
  lower_left = 6,
  lower = 7,
  lower_right = 8,
}

export const allNeighbours: Neighbour[] = [
  Neighbour.upper_left,
  Neighbour.upper,
  Neighbour.upper_right,
  Neighbour.left,
  Neighbour.right,
  Neighbour.lower_left,
  Neighbour.lower,
  Neighbour.lower_right,
];
