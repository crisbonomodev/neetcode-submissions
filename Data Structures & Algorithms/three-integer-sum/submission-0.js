class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        const sorted = nums.sort((a,b) => a - b)
        for (let i = 0; i < sorted.length - 2; i++) {
            if ( i > 0 && sorted[i] === sorted[i-1]) {
                continue
            }
            let start = i + 1
            let end = sorted.length - 1
            while (start < end) {
                let sum = sorted[i]+sorted[start]+sorted[end]
            if (sum === 0) {
                result.push([sorted[i],sorted[start],sorted[end]])
                start++
                end--
                while (start < end && sorted[start] === sorted[start - 1]) {
                    start++
                }
                while (start < end && sorted[end] === sorted[end+1]) {
                    end--
                }
            } else if( sum > 0) {
                    end--
            } else {
                start++
            }
            }
        }
        return result
    }
}
