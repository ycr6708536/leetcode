/*

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
https://leetcode.com/problems/median-of-two-sorted-arrays/description/

*/
var findMedianSortedArrays = function(nums1, nums2) {
  var newAry = nums1.concat(nums2);

//   function sort(arr) {
//     if (arr.length <= 1) { return arr; }

//     var l = Math.floor(arr.lenth / 2);
//     var point = arr.splice(l, 1)[0];
//     var left = [],
//       right = [];

//     for (var i = 0, l = arr.length; i < l; i++) {
//       if (arr[i] >= point) {
//         right.push(arr[i]);
//       } else if (arr[i] < point) {
//         left.push(arr[i]);
//       }
//     }

//     return sort(left).concat([point], sort(right));
//   }

  newAry = newAry.sort(function(a,b){
      return a-b;
  });

  var ll = newAry.length / 2;
  if (ll === parseInt(ll)) {
    return (newAry[ll] + newAry[ll - 1]) / 2;
  } else {
    return newAry[Math.floor(ll)];
  }


};