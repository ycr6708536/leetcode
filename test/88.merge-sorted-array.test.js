var mySqrt = require('../src/88.merge-sorted-array')

test('sprt 8 equal 2', () => {
    var a= [1, 2, 3,0,0,0]
    var b = [2, 5, 6]
    expect(mySqrt(a,3,b,3)).toEqual([1,2,2,3,5,6]);
});

test('sprt 4 equal 2', () => {
    var a= [0]
    var b = [1]
    expect(mySqrt(a,0,b,1)).toEqual([1]);
});

test('sprt 4 equal 2', () => {
    var a= [1]
    var b = [1]
    expect(mySqrt(a,1,b,1)).toEqual([1,1]);
});
