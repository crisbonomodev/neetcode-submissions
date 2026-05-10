class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // necesito recorrer el array con dos punteros e ir almacenando el volumen
        let start = 0
        let end = heights.length -1
        let max = 0

        while (start< end) {
            // necesito obtener la base
            let base = end - start
            let height = Math.min(heights[start],heights[end])

            let area = base * height

            if (area > max) {
                max = area
            }

            if (heights[start] < heights[end]) {
                start++
            } else {
                end--
            }


        }

        return max
    }
}
