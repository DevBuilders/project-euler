import { countWays } from './coinSums';

test("Very small amounts", () => {
  expect(countWays(1)).toEqual(1);
  expect(countWays(2)).toEqual(2); // 2*1p, 1*2p
  expect(countWays(4)).toEqual(3); // 4*1p, 2*1p + 1*2p, 2*2p
})

test("£2", () => {
  const result = countWays(200);
  expect(result).toBeTruthy();
  console.log(result);
})