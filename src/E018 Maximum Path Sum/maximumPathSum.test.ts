import { maxPathSum } from './maximumPathSum';

const tinyTriangle = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
];

test("Calculates longest path for example triangle", () => {
  expect(maxPathSum(tinyTriangle)).toEqual(23);
})