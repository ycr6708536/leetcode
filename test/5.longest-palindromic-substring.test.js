var mySqrt = require('../src/5.longest-palindromic-substring')

test('sprt 8 equal 2', () => {
    expect(mySqrt('cbbd')).toEqual('bb');
});

test('sprt 4 equal 2', () => {
    expect(mySqrt('babad')).toEqual('bab');
});

test('sprt 4 equal 2', () => {
    expect(mySqrt('dvdf')).toEqual('dvd');
});

test('bb', () => {
    expect(mySqrt('bb')).toEqual('bb');
});
// test('sprt 9 equal 3', () => {
//     expect(mySqrt(9)).toEqual(3);
// });