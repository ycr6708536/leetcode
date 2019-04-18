var mySqrt = require('../src/3.longest-substring-without-repeating-characters')

test('sprt 8 equal 2', () => {
    expect(mySqrt('pwwkew')).toEqual(3);
});

test('sprt 4 equal 2', () => {
    expect(mySqrt('bbbbb')).toEqual(1);
});

test('sprt 4 equal 2', () => {
    expect(mySqrt('dvdf')).toEqual(3);
});

// test('sprt 9 equal 3', () => {
//     expect(mySqrt(9)).toEqual(3);
// });