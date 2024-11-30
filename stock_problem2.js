// JavaScript Program to solve stock buy and sell
// using one traversal

/*

Problem: Given an array prices[] of length N, representing the prices of the stocks on different days, 
the task is to find the maximum profit possible by buying and selling the stocks on different days
when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.

input Array Price is the price = [7, 10, 1, 3, 6, 9, 2]
******************Logic***********************
Step 1: we need to minimize the cost price and maximize the selling price.
Step 2: at every step, we keep track of the minimum buy price of stock encountered so far.
Step 3: we subtract with the minimum so far and if we get more profit than the current result, we update the result.

*/

function maxProfit(prices) {
  let minSoFar = prices[0];
  let res = 0;

  // Update the minimum value seen so far
  // if we see smaller
  for (let i = 1; i < prices.length; i++) {
    minSoFar = Math.min(minSoFar, prices[i]);

    // Update result if we get more profit
    res = Math.max(res, prices[i] - minSoFar);
  }
  return res;
}

const prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));
