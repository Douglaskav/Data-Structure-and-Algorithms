function Node(data, next = null) {
	return { data, next };
}

function printNode() {
	while (head != null) {
		console.log(head.data);
		head = head.next;
	}
}

function insertAtStart(value) {
	let new_node = Node(value);
	new_node.next = head;
	head = new_node;
}

function insertAfter(value, prev_node) {
	if (prev_node === false) console.log("Valor nulo");

	let new_node = Node(value);
	new_node.next = prev_node.next;
	prev_node.next = new_node;
}

function insertAtEnd(value) {
	let new_node = Node(value);

	// Caso a lista esteja vazia.
	if (head === null) head = new_node;

	new_node.next = null;

	let last = head;
	while (last.next != null) last = last.next;

	last.next = new_node;
}

function searchAtList(node) {
	let temp = head;
	while (temp.next != null) {

		if (temp === node) {
			console.log(temp);
		}

		temp = temp.next;
	}
}

function deleteFromListByValue(node_value) {
	let temp = head,
		prev = null;

	if (temp != null && temp.data == node_value) {
		head = temp.next; // Changed head
		return;
	}

	while (temp != null && temp.data != node_value) {
		prev = temp;
		temp = temp.next;
	}

	if (temp === null) return;

	prev.next = temp.next;
}

function deleteFromListByPosition(position) {
	let temp = head,
		prev = null;

	let i = 0;

	if (position === i) {
		head = temp.next;
		return;
	}

	while (temp.next != null && position != i) {
		prev = temp;
		temp = temp.next;
		i = i + 1;
	}

	if (temp === null) return;

	prev.next = temp.next;
}

let head = Node(1);
let node2 = Node(2);

head.next = node2;

insertAtEnd(3);
insertAtEnd(8);
insertAtEnd(11);

searchAtList(node2);

deleteFromListByValue(2);
deleteFromListByPosition(1);
printNode();
