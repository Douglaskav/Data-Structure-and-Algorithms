// Linked List
function LinkedList() {
	let head = null;
	let length = 0;
	const Node = (value) => {
		return {
			value,
			next: null,
		};
	};

	const add = (value) => {
		if (!head) {
			head = Node(value);
			length++;
			return head;
		}

		let node = head;
		while (node.next) {
			node = node.next;
		}

		node.next = Node(value);
		length++;
		return node.next;
	};

	const getByIndex = (index) => {
		if (length === 0 || index >= length) {
			return null;
		}

		let node = head;
		let count = 0;
		while (count < index && node.next) {
			node = node.next;
			count++;
		}
		return node;
	};

	const getByValue = (value) => {
		if (length === 0) {
			return null;
		}

		let node = head;
		if (node.value === value) return node;
		while (node.next) {
			node = node.next;
			if (node.value === value) return node;
		}

		return null;
	};

	return {
		length: () => length,
		add: (value) => add(value),
		print: () => console.log(head),
		getByIndex: (index) => getByIndex(index),
		getByValue: (index) => getByValue(index),
	};
}

const list = LinkedList();
console.log(list.length());
list.add(1);
list.add(2);
list.add(282);
list.add(3);
console.log(list.length());
list.print();
console.log(list.getByIndex(3));
console.log(list.getByValue(2));
