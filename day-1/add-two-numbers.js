// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = traverseLL(l1);
    let num2 = traverseLL(l2);
    let total = (BigInt(num1) + BigInt(num2)).toString();
    let len = total.length;
    let prevNode = new ListNode();
    let headNode = prevNode;
    for (let i = len - 1; i >= 0; i--) {
        let currNode = new ListNode(total[i]);
        prevNode.next = currNode;
        prevNode = currNode;
    }
    return (headNode.next)

};

function traverseLL(list) {
    let str = '';
    while (list) {
        str = list.val + str;
        list = list.next;
    }
    return (str);
}