var mySqrt = require('../src/11.container-with-most-water')

test('reverse 123', () => {
    expect(mySqrt([1,8,6,2,5,4,8,3,7])).toEqual(49);
});


test('[1,3,2,5,25,24,5]', () => {
    expect(mySqrt([1,3,2,5,25,24,5])).toEqual(24)
})