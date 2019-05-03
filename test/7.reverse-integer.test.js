var mySqrt = require('../src/7.reverse-integer')

test('reverse 123', () => {
    expect(mySqrt(123)).toEqual(321);
});

test('reverse -321', () => {
    expect(mySqrt(-321)).toEqual(-123);
});

test('reverse 120', () => {
    expect(mySqrt(120)).toEqual(21);
});


