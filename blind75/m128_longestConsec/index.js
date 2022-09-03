/* 128. Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9 */
// i: array of unsorted integers
// o: number of longest consecutive count of nums in arr
// c: O(n) time (no nested loops, no sorting algo)
// e: empty arr, single num, repeated num, negative nums, no consec nums, all consec nums
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // make set from nums
  // obtain min and max
  // iterate thru set
  // take first entry, if set has (entry + 1), count+1, otherwise next
  if (!nums.length) return 0;
  if (nums.length === 1) return 1;
  let store = new Set(nums);
  let count = potential = 1;
  let min = max = nums[0];
  for (let i = 1; i < nums.length; i++){
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
    if (store.has(nums[i] + 1)) {
      potential++;
      count = Math.max(count, potential)
    } else {
      potential = 1;
    }
  }

};

var nums, results;
nums = [100,4,200,1,3,2]; // 4
results = longestConsecutive(nums);
console.log('🚀 ~ results', results);

//////////////////////////////////////////////////////////////////////////////
// Linear Search With A Hash Map
// Time: O(n)
// Space: O(n)
// This solution only makes one pass over the `nums` array and is the highest
// performing solution.
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
 function longestConsecutive(nums) {
  if (!nums.length) {
      return 0;
  }

  const map = Object.create(null);
  let max = 0;

  for (const num of nums) {
      if (num in map) {
          continue;
      }

      const prev = num - 1;
      const next = num + 1;
      let len = 1;

      if (prev in map) {
          if (next in map) {
              len += map[prev] + map[next];
              map[prev - map[prev] + 1] = len;
              map[next + map[next] - 1] = len;
          } else {
              len += map[prev];
              ++map[prev - map[prev] + 1];
          }
      } else if (next in map) {
          len += map[next];
          ++map[next + map[next] - 1];
      }
      map[num] = len;
      max = Math.max(max, len);
  }

  return max;
}

//////////////////////////////////////////////////////////////////////////////
// Linear Search With A Hash Set
// Time: O(n)
// Space: O(n)
// This solution does three passes over the `nums` array. A first pass to
// setup the hash set. A second pass to find the numbers that mark the
// beginning of a sequence. A third pass to calculate the length of each
// sequence. The nested `while` loop does not cause quadratic calculations as
// it is only initiated on the first number of each sequence.
//////////////////////////////////////////////////////////////////////////////

/**
* @param {number[]} nums
* @return {number}
*/
function longestConsecutive(nums) {
  let len = nums.length;
  if (!len) {
      return 0;
  }
  const set = new Set(nums);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if (set.has(num - 1)) {
          continue;
      }

      let currentMax = 1;
      while (set.has(num + currentMax)) {
          currentMax++;
      }

      if (currentMax > max) {
          max = currentMax;
      }
      if(max > len/2){
          break;
      }
  }

  return max;
}