class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length <= 1) {return 0}

        let min = 100
        let profit = 0

        for (let fast = 0; fast < prices.length; fast++) {
            if (prices[fast] < min) {
                min = prices[fast]
            }
            if (prices[fast] - min > profit) {
                profit = prices[fast] - min
            }
        }

        return profit
    }
}
