// My solution that didn't work
var reverseList = function(head) {
    function reverse(node) {
        if (node.next.next) {
            reverse(node.next);
        }
        node.next.next = node;
        node.next = null;
    }
    reverse(head);
    return head;
};


// Correct solutution
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    var res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
};