/* 121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4 */

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Time O(N) | Space O(1)
 * @param {number} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  let [left, right, max] = [0, 1, 0];

  while (right < prices.length) {
      const canSlide = prices[right] <= prices[left];
      if (canSlide) left = right;

      const window = prices[right] - prices[left];

      max = Math.max(max, window);
      right++;
  }

  return max;
};

/**
* Another approach without using sliding window
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
* Time O(N) | Space O(1)
* @param {number} prices
* @return {number}
*/

var maxProfit = function (prices) {
  let min = prices[0];
  let max = min;
  let value = 0;
  for (let i = 0; i < prices.length; i++) {
      if (i != prices.length - 1 && prices[i] <= min) {
          max = min = prices[i];
      } else if (prices[i] > max) {
          max = prices[i];
      }
      value = max - min > value ? max - min : value;
  }
  return value;
};