var mySqrt = require('../src/69.sqrt-x')

test('sprt 8 equal 2', () => {
    expect(mySqrt(8)).toEqual(2);
});

test('sprt 4 equal 2', () => {
    expect(mySqrt(4)).toEqual(2);
});

test('sprt 9 equal 3', () => {
    expect(mySqrt(9)).toEqual(3);
});