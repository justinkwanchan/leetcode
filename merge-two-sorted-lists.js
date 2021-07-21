// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

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

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return l1;
  }

  let head;
  let current1;
  let current2;

  if (l1 && l1.val <= (l2 ? l2.val : l1.val)) {
    head = l1;
    current1 = head.next;
    current2 = l2;
  } else {
    head = l2;
    current1 = l1;
    current2 = head.next;
  }

  let prev = head;

  while (current1 || current2) {
    if (current1 && current1.val <= (current2 ? current2.val : current1.val)) {
      prev.next = current1;
      prev = current1;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = current2;
      current2 = current2.next;
    }
  }

  return head;
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Input: l1 = [1,2,4], l2 = [1,3,4]
const l1c = new ListNode(4);
const l1b = new ListNode(2, l1c);
const l1a = new ListNode(1, l1b);

const l2c = new ListNode(4);
const l2b = new ListNode(3, l2c);
const l2a = new ListNode(1, l2b);

mergeTwoLists(l1a, l2a);

let current = l2a;
while (current) {
  console.log(current.val);
  current = current.next;
}
