/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1

Follow up: Could you minimize the total number of operations done?
*/
// i: array of integers
// o: same array of integers sorted with all zeros at end & remaining elements in order with respect to each other
// c:
// e: single zero, single non-zero, all zeros, many zeros and one int, many ints and 1 0
function moveZeros(arr) {
  if (!arr.length || arr.length === 1) return arr;
  // iterate thru arr
  // if elem === 0, start 2nd iteration at currInd
  // look for first non-0 elem, swap indexes with 0 from 1st loop encountered
  // if none found (nested/2nd interation) return arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Number.isInteger(arr[j]) && arr[j] !== 0) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          break;
        }
      }
    }
  }
  return arr
}

let result = moveZeros([0,1,0,3,12]); //[1,3,12,0,0]
console.log('🚀 ~ result', result);
