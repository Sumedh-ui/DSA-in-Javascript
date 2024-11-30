// JavaScript Program to find the max profit when multiple
// transactions are allowed

/*
Problem:
Input Array price is the price = [100, 180, 260, 310, 40, 535, 695]
***************Logic******************
Step 1: Traverse price[] from i = 1 to price.size() - 1
Step 2: res = 0
Step 3: if price[i] > price[i - 1]
res = res + price[i] - price[i - 1]
*/

function maximumProfit(prices) {
    let res = 0;

    // Keep on adding the difference between
    // adjacent when the prices a
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) 
            res += prices[i] - prices[i - 1];
    }

    return res;
}

const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maximumProfit(prices));



/*
Another Approach for Better Approach with the Local Maxima and minima.
// Function to calculate the maximum profit
function maximumProfit(prices) {
    let n = prices.length;
    let lMin = prices[0];  // Local Minima
    let lMax = prices[0];  // Local Maxima
    let res = 0;
  
    let i = 0;
    while (i < n - 1) {
      
        // Find local minima
        while (i < n - 1 && prices[i] >= prices[i + 1]) { i++; }
        lMin = prices[i];
       
        // Local Maxima
        while (i < n - 1 && prices[i] <= prices[i + 1]) { i++; }
        lMax = prices[i];
      
        // Add current profit
        res += (lMax - lMin);
    }
  
    return res;
}

const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maximumProfit(prices));
*/