class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map()
        // Contamos los valores
        for (const num of nums) {
            if (counter.has(num)) {
                counter.set(num, counter.get(num) + 1 )
            } else {
                counter.set(num, 1)
            }
        }
        // Ordenamos por frecuencia
        const sorted = [...counter.entries()].sort((a,b)=> b[1] - a[1] )

        // Devolvemos los indices haciendo el corte segun K
        return sorted.slice(0,k).map(entry => entry[0])
    }
}
