var mySqrt = require('../src/70.climbing-stairs')

test('sprt 8 equal 2', () => {
    expect(mySqrt(2)).toEqual(2);
});

test('sprt 4 equal 2', () => {
    expect(mySqrt(3)).toEqual(3);
});

test('sprt 9 equal 3', () => {
    expect(mySqrt(5)).toEqual(8);
});