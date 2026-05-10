class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // recorrer el array con dos punteros

        let left = 0
        let right = 1
        let max = 0

        
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right]-prices[left]

                max = Math.max(max,profit)
            } else {
                left = right
            }
            right++
        }

        // si el valor de left < valor de right, significa que conviene mover el pointer left para comprar

        // Si el valor de  left > right, podemos vender a mayor valor, movemos right
        return max
    }
}
