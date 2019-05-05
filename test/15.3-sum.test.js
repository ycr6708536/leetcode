var mySqrt = require('../src/15.3-sum')

test('Given array nums = [-1, 0, 1, 2, -1, -4],', () => {
  expect(mySqrt([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, 0, 1],
    [-1, -1, 2]
  ]);
});

test('Given array nums = [0,0,0,0],', () => {
  expect(mySqrt([0, 0, 0, 0])).toEqual([
    [0, 0, 0]
  ]);
});

test('Given array nums = [3,0,-2,-1,1,2]', () => {
  expect(mySqrt([3, 0, -2, -1, 1, 2])).toEqual([
    [-2, -1, 3],
    [-2, 0, 2],
    [-1, 0, 1]
  ]);
});