/* 238. Product of Array Except Self
Medium

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.) */
// i: int array
// o: results arr containing elems of product of rest of elems except self
// e: all 30s, contains 0, contains 2 zeros, contains all 1s
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // keep track of prodFwd, starts at 1
  // loop fwd
  // traverse to elem2,
  // update prodFwd = elem-1*prod
  // push prodFwd to results2
  let prodFwd = prodRev = 1;
  let products = [];
  for (let i = 0; i < nums.length; i++) {
    products.push(prodFwd);
    prodFwd *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    products[j] *= prodRev;
    prodRev *= nums[j];
  }
  return products;
};

var nums;
// nums = [1, 2, 3, 4]; // [24,12,8,6]
nums = [-1, 1, 0, -3, 3]; // [0,0,9,0,0]
let result = productExceptSelf(nums);
console.log('🚀 ~ result', result);
