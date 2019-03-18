/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 判断空数组
  if(nums.length === 0)return 0
  // 判断小于第一个数字直接返回
  if(target<nums[0])return 0
  // 判断大于最后一个数字直接返回
  if(target>nums[nums.length-1])return nums.length

  var start = 0;
  var end= nums.length-1;

  while(start<end){
    var mid = Math.floor((start+end)/2)
    if(nums[mid]===target){
      return mid
    }else if(nums[mid]>target){
      end = mid-1;
    }else {
      start = mid+1;
    }
  }
  // 没有找到情况只有两种 
  if(nums[start]>=target){
        return start;
    }
    else{
        return start+1;
    }
};

console.log(searchInsert([1,3,5,6]
  ,2)) 