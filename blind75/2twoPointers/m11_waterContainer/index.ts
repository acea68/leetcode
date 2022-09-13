/* 11. Container With Most Water
Medium

You are given an integer array, height, of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49. (height[1] = 8 & height[8] = 7; i1 - i8 = 7 => 7 * 7 = 49)

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 10^5
0 <= height[i] <= 10^4 */

// i: array of numbers
// o: number (length * height) representing area of 2D container
// e: all same height, tallest 2 next to each other n = large, just two inputs
function maxArea(height: number[]): number {
  // create two pointers, create maxArea
  // squish the area
  // at each step, check if currArea >= maxArea and record if so
  // at each step, move the shorter of the two posts
  let lInd: number = 0;
  let rInd: number = height.length - 1;
  let left: number = height[lInd];
  let right: number = height[rInd];
  let base: number = rInd - lInd;
  let tall: number = Math.min(left, right);
  let currArea: number = base * tall;
  let maxAr: number = currArea;
  while (rInd > lInd) {
    left = height[lInd];
    right = height[rInd];
    base = rInd - lInd;
    tall = Math.min(left, right);
    currArea = base * tall;
    maxAr = Math.max(maxAr, currArea);
    if (left > right) {
      rInd--;
    } else {
      lInd++;
    }
  }
  return maxAr;
};

var input: number[];
var result: number;
input = [1,8,6,2,5,4,8,3,7];
// input = [1,1];
result = maxArea(input);
console.log(result);