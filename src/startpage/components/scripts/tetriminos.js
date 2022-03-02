const L = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 2],
  ],
  color: 2,
};
const J = {
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 0],
  ],
  color: 3,
};
const S = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 1],
    [-1, 2],
  ],
  color: 4,
};
const Z = {
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, -1],
    [-1, 0],
  ],
  color: 5,
};
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
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ],
  color: 7,
};
const I = {
  cordinates: [
    [0, 0],
    [-1, 0],
    [-2, 0],
    [-3, 0],
  ],
  color: 8,
}; // vertical
//might can delete alperties

// for cordinates: start from bottom of piece and work way up. when droping if undefined because it is off the board don't show. this will give it the look of coming onto the board from somewhere higher. will look cooler

//cordinates: reads from bottom left to top right

export const tetriminos = [L, J, S, Z, O, T, I];
