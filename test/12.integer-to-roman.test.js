var mySqrt = require('../src/12.integer-to-roman')

test('reverse 123', () => {
    expect(mySqrt(3)).toEqual('III');
});

test('4', () => {
    expect(mySqrt(4)).toEqual('IV')
})

test('9', () => {
    expect(mySqrt(9)).toEqual('IX')
})

test('58', () => {
    expect(mySqrt(58)).toEqual('LVIII')
})


test('58', () => {
    expect(mySqrt(1994)).toEqual('MCMXCIV')
})

test('58', () => {
    expect(mySqrt(999)).toEqual('CMXCIX')
})

test('58', () => {
    expect(mySqrt(400)).toEqual('CD')
})