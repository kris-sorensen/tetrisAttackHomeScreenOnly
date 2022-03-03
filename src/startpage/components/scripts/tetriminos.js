const L = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 2],
  ],
  color: 2,
}; // horizontal
const L2 = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 0],
    [-2, 0],
  ],
  color: 2,
}; // vertical right
const L3 = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-1, 1],
    [-1, 2],
  ],
  color: 2,
}; // horizontal pointing down
const L4 = {
  cordinates: [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  color: 2,
}; // vertical left
const J = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 0],
  ],
  color: 3,
}; // horizontal up

const J2 = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 1],
    [-2, 1],
  ],
  color: 3,
}; // vertical long bottom left
const J3 = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  color: 3,
}; // horizontal down

const J4 = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-2, 0],
    [-2, 1],
  ],
  color: 3,
}; // vertical right
const S = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 1],
    [-1, 2],
  ],
  color: 4,
}; // horizontal
const S2 = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-1, -1],
    [-2, -1],
  ],
  color: 4,
}; // vertical
const Z = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, -1],
    [-1, 0],
  ],
  color: 5,
}; // horizontal
const Z2 = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-1, 1],
    [-2, 1],
  ],
  color: 5,
}; // vertical
const O = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 0],
    [-1, 1],
  ],
  color: 6,
};

const T = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 1],
  ],
  color: 7,
}; // pointing up
const T2 = {
  cordinates: [
    [0, 0],
    [-1, -1],
    [-1, 0],
    [-2, 0],
  ],
  color: 7,
}; // pointing left
const T3 = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-1, 1],
    [-2, 0],
  ],
  color: 7,
}; // pointing right
const T4 = {
  cordinates: [
    [0, 0],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ],
  color: 7,
}; // pointing down
const I = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-2, 0],
    [-3, 0],
  ],
  color: 8,
}; // vertical

const I2 = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  color: 8,
}; // horizontal

// for cordinates: start from bottom of piece and work way up. when droping if undefined because it is off the board don't show. this will give it the look of coming onto the board from somewhere higher. will look cooler

//cordinates: reads from bottom left to top right

export const tetriminos = [
  L,
  L2,
  L3,
  L4,
  J,
  J2,
  J3,
  J4,
  S,
  S2,
  S,
  S2,
  Z,
  Z2,
  Z,
  Z2,
  O,
  O,
  O,
  O,
  T,
  T2,
  T3,
  T4,
  I,
  I2,
  I,
  I2,
];
