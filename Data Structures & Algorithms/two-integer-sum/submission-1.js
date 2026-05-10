class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
          const numbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement =  target - nums[i]
    if (numbers.has(complement)) return [i, numbers.get(complement)]
    
    numbers.set(nums[i], i)
  }

  return [];
    }
}
