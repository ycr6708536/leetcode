const mySqrt = require('../src/16.3-sum-closest')

test('Given array nums = [-1, 2, 1, -4], and target = 1.', () => {
  expect(mySqrt([-1, 2, 1, -4], 1)).toEqual(2);
})