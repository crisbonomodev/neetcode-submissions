class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0
        let end = numbers.length -1

        while (start < end) {
            let result = numbers[start] + numbers[end]
            if (result === target) {return [start+1, end+1]}
            if (result > target) {
                end--
            } else {
                start++
            }
        }

        return []
    }
}
