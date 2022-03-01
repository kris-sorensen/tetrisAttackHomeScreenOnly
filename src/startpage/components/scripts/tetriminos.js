const L = {
  length: 3,
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 2],
  ],
  color: "#ba74fc",
};
const J = {
  length: 3,
  cordinates: [
    [0, 0],
    [0, 1],
    [0, 2],
    [-1, 0],
  ],
  color: "#ec64da",
};
const S = {
  length: 2,
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 1],
    [-1, 2],
  ],
  color: "#6bb9a2",
};
const Z = {
  length: 2,
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, -1],
    [-1, 0],
  ],
  color: "#ff6ca6",
};
const O = {
  length: 2,
  cordinates: [
    [0, 0],
    [0, 1],
    [-1, 0],
    [-1, 1],
  ],
  color: "#ff9677",
};
const T = {
  length: 1,
  cordinates: [
    [0, 0],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ],
  color: "#f9f871",
};
const I = {
  length: 1,
  cordinates: [
    [0, 0],
    [-1, 0],
    [-2, 0],
    [-3, 0],
  ],
  color: "#00aeef",
}; // vertical

// for cordinates: start from bottom of piece and work way up. when droping if undefined because it is off the board don't show. this will give it the look of coming onto the board from somewhere higher. will look cooler

//cordinates: reads from bottom left to top right

export const tetriminos = [L, J, S, Z, O, T, I];
