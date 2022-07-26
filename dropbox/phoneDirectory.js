/* 379. Design Phone Directory
Medium

Design a phone directory that initially has maxNumbers empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

Implement the PhoneDirectory class:

PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
int get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
bool check(int number) Returns true if the slot number is available and false otherwise.
void release(int number) Recycles or releases the slot number.


Example 1:

Input
["PhoneDirectory", "get", "get", "check", "get", "check", "release", "check"]
[[3], [], [], [2], [], [2], [2], [2]]
Output
[null, 0, 1, true, 2, false, null, true]

Explanation
PhoneDirectory phoneDirectory = new PhoneDirectory(3);
phoneDirectory.get();      // It can return any available phone number. Here we assume it returns 0.
phoneDirectory.get();      // Assume it returns 1.
phoneDirectory.check(2);   // The number 2 is available, so return true.
phoneDirectory.get();      // It returns 2, the only number that is left.
phoneDirectory.check(2);   // The number 2 is no longer available, so return false.
phoneDirectory.release(2); // Release number 2 back to the pool.
phoneDirectory.check(2);   // Number 2 is available again, return true.


Constraints:

1 <= maxNumbers <= 104
0 <= number < maxNumbers
At most 2 * 104 calls will be made to get, check, and release. */

/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  if (maxNumbers > 104 || maxNumbers < 1) return null;
  this.pool = new Array(maxNumbers);
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  let idx = 0;
  while (!this.pool[idx] && idx < 105) {
    if (!!this.pool[idx]) {
      idx++;
    } else {
      // console.log('🚀 ~ idx', idx);
      return this.pool[idx];
    }
  }
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  if (number < 0 || number > 104 || !!this.pool[number]) return false;
  return true;
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  this.pool[number] = undefined;
  return null;
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
var maxNumbers = 10;
var number = 2;
var obj = new PhoneDirectory(maxNumbers)
// console.log('🚀 ~ obj', obj, obj[0]);
var param_1 = obj.get()
// console.log('🚀 ~ param_1', param_1);
var param_2 = obj.check(number)
console.log('🚀 ~ param_2', param_2);
// obj.release(number)