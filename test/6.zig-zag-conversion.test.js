var mySqrt = require('../src/6.zig-zag-conversion')

test('sprt 8 equal 2', () => {
    expect(mySqrt('PAYPALISHIRING',3)).toEqual('PAHNAPLSIIGYIR');
});

test('sprt 4 equal 2', () => {
    expect(mySqrt('PAYPALISHIRING',4)).toEqual('PINALSIGYAHRPI');
});

test('sprt 4 equal 2', () => {
    expect(mySqrt('A',1)).toEqual('A');
});


