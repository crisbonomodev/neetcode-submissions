class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // we need to traverse the array from start and end, using two pointers.

        // Then, we calculate the volume of the container, which will be 
        // (end - start + 1) * height of the lowest value

        // then, we need to move our pointers, moving the lowest one

        let start = 0
        let end = heights.length -1
        let maxVolume = 0

        while (start<end) {
            let base = end - start
            let height = Math.min(heights[start],heights[end])

            let volume = base * height

            maxVolume = Math.max(volume, maxVolume)

            if (heights[start]<heights[end]) {
                start++
            } else {
                end--
            }
        }
        return maxVolume
    }
}
