// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// // brainstorm/sudo code
// // loop over the array
// // calculate the profit of buying and selling at each day
// // if the profit is higher, store it in a variable
// // return the highest profit variable

// time limit exceeded
const maxProfit = function(prices, largestProfit = 0) {
    if(prices.length === 1){
        return largestProfit;
    }
    
    const currentBuy = prices[0];
    prices.shift();
    const highestSell = Math.max(...prices);
    const currentProfit = highestSell - currentBuy;
    if(largestProfit < currentProfit) largestProfit = currentProfit;
    return maxProfit(prices, largestProfit)
};

// [3,4,5,0,4] fails since it searches for the highest number and disregards everything to the right (expected 4 - 0 = 0 instead gets 5 - 3 = 2)
const maxProfit = function(prices) {
    let currentBuy = prices[0];
    prices.shift();
    const highestSell = Math.max(...prices);
    console.log(highestSell)
    const index = prices.lastIndexOf(highestSell);
    prices = prices.slice(0, index);
    if(!prices.length){
        return highestSell - currentBuy <= 0 ? 0 : highestSell - currentBuy
    }
    const lowestBuy = Math.min(...prices);
    if(lowestBuy < currentBuy) currentBuy = lowestBuy;
    return highestSell - currentBuy
};

// brain is too fried atm to continue, but version 3 idea: use left and right loop

// other solutions

const maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    
    for(let i = 1; i < prices.length; i++) { 
        if(min > prices[i]) {
            min = prices[i];
        } else if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    
    return profit;
};

//

const maxProfit = function(prices) {
    let maxProfit = 0, buy = prices[0];
    
    for(let value of prices) {
        if(buy < value) maxProfit = Math.max(maxProfit, value - buy);
        else buy = value;
    }
    return maxProfit;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/1987099/JavaScript-solution-with-explanation-and-comments
const maxProfit = function(prices) {
    let max = 0
    let left = 0
    let right = 1
    
    while (right < prices.length) {
        const profit = prices[right] - prices[left]
        
        if (profit > max) {
            max = profit
        }
        
        if (profit < 0) {
            left = right
        }

        right += 1
    }

    return max
};

//

function maxProfit(prices) { 
    let max = 0, min = Infinity;
    prices.forEach(price => price < min ? min = price : max = Math.max(max, price - min));
    return max;
};
