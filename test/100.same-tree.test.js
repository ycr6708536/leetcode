var mySqrt = require('../src/100.same-tree')

function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

test('sprt 8 equal 2', () => {
   var a =new TreeNode(1)
   a.left = new TreeNode(2)
   var b =new TreeNode(1)
   b.left = new TreeNode(2)
    expect(mySqrt(a,b)).toEqual(true);
});

test('sprt 4 equal 2', () => {
    var a =new TreeNode(1)
    a.left = new TreeNode(2)
    var b =new TreeNode(1)
    b.right = new TreeNode(2)
    expect(mySqrt(a,b)).toEqual(false);
});

test('sprt 4 equal 2', () => {
    var a =new TreeNode(1)
    a.left = new TreeNode(2)
    a.right = new TreeNode(3)
    var b =new TreeNode(1)
    b.left = new TreeNode(2)
    b.right = new TreeNode(3)
    expect(mySqrt(a,b)).toEqual(true);
});

test('sprt 4 equal 2', () => {
    var a =new TreeNode(1)
    a.left = new TreeNode(2)
    a.right = new TreeNode(3)
    var b =new TreeNode(1)
    b.left = new TreeNode(2)
    b.right = new TreeNode(3)
    expect(mySqrt(null,null)).toEqual(true);
});

test('sprt 4 equal 2', () => {
    var a =new TreeNode(1)
    a.left = new TreeNode(2)
    a.right = new TreeNode(3)
    var b =new TreeNode(1)
    b.left = new TreeNode(2)
    b.right = new TreeNode(3)
    expect(mySqrt(null,b)).toEqual(false);
});
