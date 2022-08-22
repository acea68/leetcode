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

// function moveZeros(arr) {
//   if (!arr.length || arr.length === 1) return arr;
//   // iterate thru arr
//   // if elem === 0, start 2nd iteration at currInd
//   // look for first non-0 elem, swap indexes with 0 from 1st loop encountered
//   // if none found (nested/2nd interation) return arr
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (Number.isInteger(arr[j]) && arr[j] !== 0) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//           break;
//         }
//       }
//     }
//   }
//   return arr
// }

// function moveZeros(arr) {
//   if (!arr.length || arr.length === 1) return arr;
//   let indexes = [];
//   let index = 0;
//   while (arr[index] !== 0 && index < arr.length){
//     index++;
//   }
//   for (let i = index; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       indexes.push(i);
//     }
//   }
//   if (indexes.length === arr.length) return arr;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === 0) {
//       if (!indexes.length) return arr;
//       let ind = indexes.shift();
//       if (j > ind) continue;
//       arr[j] = arr[ind];
//       arr[ind] = 0;
//     }
//   }
//   return arr
// }

//two pointers
function moveZeros(nums) {
  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
      console.log('🚀 ~ pos', pos);
    }
  }
  if (!pos) return nums;
  for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums
}

// let result = moveZeros([1, 2]); //[1,3,12,0,0]
let result = moveZeros([0, 1, 0, 3, 12]); //[1,3,12,0,0]
console.log('🚀 ~ result', result);
