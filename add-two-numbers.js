/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *  
 * Constraints:
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */

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

/**
 * l1 = [2,4,3], l2 = [5,6,4]
 * 1. reverseDigit 342, 465
 * 2. add 342 + 465 = 807
 * 3. reverse and to array [7,0,8]
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const addTwoNumbers = function(l1, l2) {
  let sum = new ListNode(0);

  while (l1 !== null && l2 !== null) {
    // sum
    let carry = sum.val;
    const add = carry + l1.val + l2.val;
    sum.val = add % 10;
    // carry
    carry = Math.floor(add / 10);
    sum.next = carry ? new ListNode(carry) : null;

    l1 = l1.next || null;
    l2 = l2.next || null;
    if (sum.next !== null) {
      sum = sum.next;
    }
  }

  return sum;
};

module.exports = {
  ListNode,
  addTwoNumbers,
};
