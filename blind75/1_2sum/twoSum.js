/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let prevMap = {};
  for (let i = 0; i < nums.length; i++) {
    let delta = target - nums[i];
    if (Number.isInteger(prevMap[delta])) return [prevMap[delta], i]
    prevMap[nums[i]] = i;
  }
}
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length + 1; j++) {
//       // console.log(nums[i] + nums[j])
//       if (nums[i] + nums[j] === target) return [i,j]
//     }
//   }
// };

var desc = 'first two indexes';
var actual = twoSum([2, 7, 11, 15], 9);
var expected = [0, 1];
assertDeepEqual(actual, expected, desc);

var desc = 'last two indexes';
var actual = twoSum([3,2,4], 6);
var expected = [1,2];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}