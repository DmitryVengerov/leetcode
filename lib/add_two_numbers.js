/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

// Your input
         // [2,4,3]
         // [5,6,4]
// Output   [NaN]
// Expected [7,0,8]

let addTwoNumbers = (l1, l2) => {
  const root = new ListNode(null);
  let carry = 0;
  let lastNode = root;
  while(l1||l2||carry){
    let sum=carry;
    if(l1){
      sum+=l1.val;
      l1=l1.next;
    }
    if(l2){
      sum+=l2.val;
      l2=l2.next;
      }
    if(sum>9){
      carry=1;
      sum=sum%10;
    } else {
      carry=0;
    }
    const node = new ListNode(sum);
    lastNode.next=node;
    lastNode=node;
  }
  return root.next;
};

module.exports = addTwoNumbers
