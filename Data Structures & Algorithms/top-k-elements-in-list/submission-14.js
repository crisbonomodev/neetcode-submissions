class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map()

        for (const num of nums) {
            counter.set(num, (counter.get(num)??0)+1)
        }

        const buckets = Array.from({length: nums.length + 1},() => [])

        for (const [key, value] of counter) {
            buckets[value].push(key)
        }

        const result = new Array()

        for ( let i = buckets.length - 1; i >= 0; i--) {
            for (const key of buckets[i]) {
                result.push(key)

                if (result.length === k) {
                    return result
                }
            }
        }
            return result
    }
}
