class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length <= 1) return false 
                const seen = new Set([...nums])

        return nums.length != seen.size
    }
}
