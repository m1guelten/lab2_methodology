'use strict';

class linkedListNode {
  constructor(value, numb, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    this.numb = numb;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    let Integer = 0;
    if (!this.head) return Integer;
    let currentNode = this.head;
    while (currentNode) {
      Integer++;
      currentNode = currentNode.next;
    }
    return Integer;
  }

  append(value) {
    const newNode = new linkedListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    newNode.prev = this.tail;
    this.tail = newNode;
    this.tail.numb = this.length() - 1;

    if (!this.head) {
      this.head = newNode;
      this.tail.numb = 0;
    }

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}

// const list = new LinkedList();
// console.log(`length0 = ${list.length()}`);

// list.append('a');
// console.log(`length1 = ${list.length()}`);
// console.log(list.head);
// console.log(list.tail, '\n');

// list.append('b');
// console.log(`length1 = ${list.length()}`);
// console.log(list.head);
// console.log(list.tail, '\n');

// list.append('c');
// console.log(`length1 = ${list.length()}`);
// console.log(list.head);
// console.log('!!!', list.tail.prev);

// console.log(list.tail, '\n');
// console.log(list.toArray());
// console.log(list.toString());
module.exports = LinkedList;
