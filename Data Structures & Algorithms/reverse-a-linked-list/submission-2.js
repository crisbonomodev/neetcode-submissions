/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null
        let current = head

        while (current) {
            const next = current.next // guardamos el siguiente
            current.next = previous // reapuntamos el next del actual al previo
            previous = current // avanzamos el puntero del nodo previo al nodo actual
            current = next // avanzamos el puntero del nodo actual al nodo siguiente
        }
        return previous // si current es null ya salimos del loop y devolvemos el previo que es el head
    }
}
