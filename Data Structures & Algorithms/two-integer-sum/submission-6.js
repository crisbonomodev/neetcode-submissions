class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length <=1) {return [-1,-1]}

        const counter = new Map()

        for (let i = 0; i< nums.length; i++) {
            const complement = target - nums[i]

            if (counter.has(complement)) {
                return [counter.get(complement),i ]
            }

            counter.set(nums[i], i)
        }

        return [-1,-1]

    }
}
