var mySqrt = require('../src/83.remove-duplicates-from-sorted-list')
function ListNode(val) {
    this.val = val;
    this.next = null;
}
test('sprt 8 equal 2', () => {
    // 1 1 2
    var t = new ListNode(1)
    t.next = new ListNode(1)
    t.next = new ListNode(2)
    
    expect(mySqrt(t)).toEqual(2);
});

test('sprt 4 equal 2', () => {
    expect(mySqrt(3)).toEqual(3);
});

test('sprt 9 equal 3', () => {
    expect(mySqrt(5)).toEqual(8);
});