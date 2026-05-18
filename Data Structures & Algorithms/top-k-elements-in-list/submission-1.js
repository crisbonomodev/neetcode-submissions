class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = new Map()

        for (const num of nums) {
            counter.set(num, (counter.get(num) ?? 0) + 1)
        }

        // convertir a array ordenado por valores
        let result = Array.from(counter)
        .sort((a,b) => b[1]-a[1])
        .map(item => item[0])
        .slice(0,k)
        

        

        return result
    }
}
