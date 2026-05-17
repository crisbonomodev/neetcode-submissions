class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        // Necesito ordenar el array
        const sorted = nums.sort((a,b) => a - b)

        // una vez que tengo el array ordenado
        // [-4,-1,-1,0,1,2]
        // tengo recorrer el array y setear los punteros

        let triplets = []
        // Fijamos el valor del primer puntero
        // Tenemos que ir hasta sorted.length - 2 para dejar lugar a los punteros
        for (let i = 0; i < sorted.length - 2; i++) {
        // Como el array esta ordenado, si no validamos valores duplicados, podemos repetir el triplet
        if (i > 0 && sorted[i] === sorted[i-1]) {
            continue
        }
        // Si nums[i] ya es > 0, no hay forma de sumar 0
        if (nums[i] > 0) {
            break
        }
        // Two pointers para buscar los otros numeros
            let start = i + 1
            let end = sorted.length -1

            while (start < end) {
                const sum = sorted[i] + sorted[start] + sorted[end]

                // Si el resultado es menor a 0, necesito un numero mas grande, muevo left
                if (sum < 0) {
                    start++
                } else if (sum > 0) {
                    end--
                } else {
                    result.push([sorted[i], sorted[start], sorted[end]])
                    start++
                    end--

                                    // Ahora necesito validar si los valores de start o end son duplicados, para evitarlos
                while (start < end && sorted[start] === sorted[start -1]) {
                    start++
                }
                while (start < end && sorted[end] === sorted[end + 1]) {
                    end--
                }
            }
            
        }
    }
    return result
}
}