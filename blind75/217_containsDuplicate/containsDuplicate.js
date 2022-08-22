/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// e: singe elem, two distinct elems, two same elems, include negs,
// var containsDuplicate = function(nums) {
//   // iterate thru nums
//   // create map obj containing count = # encounters
//   // if # encounters > 1, return false
//   // return true
//   let map = {};
//   for (let num of nums) {
//     if (!map[num]) {
//       map[num] = 1;
//     } else {
//       map[num]++;
//     }
//     if (map[num] > 1) return true
//   }
//   return false;
// };
var containsDuplicate = function(nums) {
  let set = new Set(nums);
  return (set.size < nums.length);
};

let result = containsDuplicate([1,2,3,1]);
console.log('🚀 ~ result', result);
