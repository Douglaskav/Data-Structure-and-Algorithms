let top;

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

function isEmpty() {
	return top ? false : true;
}

function peek() {
	if (isEmpty()) {
		return null;
	}

	return console.log(top.data);
}

function push(data) {
	let newNode = new Node(data);

	// Se a lista estiver vazia ele irar colocar o primeiro nó
	if (top == null) {
		top = newNode;
		return;
	}

	let temp = top;
	top = newNode;
	newNode.next = temp;
}

function pop() {
	if (isEmpty()) {
		return null;
	}

	let temp = top.data;
	top = top.next;

	return temp;

}

push(4);
push(6);
push(15);

pop();
peek();

console.log(top);
console.log(isEmpty());
