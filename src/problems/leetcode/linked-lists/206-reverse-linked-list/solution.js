/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// time: O(n), space: O(1)
export function reverseList(head) {
	let current = head;
	let next = null;
	let prev = null;

	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	return prev;
}

// time: O(n), space: O(1)
function reverseList2(head) {
	let prev = null;

	while (head) {
		const temp = head.next;
		head.next = prev;
		prev = head;
		head = temp;
	}

	return prev;
}

function reverseList3(head) {
	const [prev, curr] = [null, head];

	while (current) {
		[curr.next, prev, curr] = [prev, curr, curr.next];
	}

	return prev;
}
// recursive, time: O(n), space: O(n)
function reverseList4(head) {
	if (head == null || head.next == null) {
		return head;
	}

	const reversedListHead = reverseList(head.next);

	head.next.next = head;
	head.next = null;

	return reversedListHead;
}
