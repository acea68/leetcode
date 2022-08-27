/* 347. Top K Frequent Elements
Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size. */
// i: array of ints
// o: array of k elems with most frequent encounters
// e: only repeating nums, same num of nums for all ints, k = 1,
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function (nums, k) {
  let results = [];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = [1, nums[i]];
    } else {
      map[nums[i]][0]++;
    }
  }
  console.log('🚀 ~ map', map);
  let uniqueNums = Object.values(map);
  uniqueNums.sort((a,b) => {
    return b[0] - a[0];
  })
  console.log('🚀 ~ uniqueNums', uniqueNums);
  for (let i = 0; i < k; i++) {
    results.push(uniqueNums[i][1])
  }
  return results;
}

var nums, result, k;
// nums = [1,1,1,2,2,3];
// k = 2; // [1,2]
// nums = [1];
// k = 1; // [1]
nums = [4,1,-1,2,-1,2,3];
k = 2; // [-1,2]
result = topKFrequent(nums, k);
console.log('🚀 ~ result', result);