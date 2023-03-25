'use strict';

class LinkedList {
  doubleList = [];

  length() {
    return this.doubleList.length;
  }

  append(value) {
    if (typeof value === 'string') {
      this.doubleList.push(value);
    } else return null;
    return this;
  }

  delete(number) {
    if (number < 0 || number >= this.doubleList.length) return null;
    return this.doubleList.splice(number, 1)[0];
  }

  deleteAll(value) {
    if (typeof value !== 'string' || this.doubleList.indexOf(value) === -1)
      return null;
    this.doubleList = this.doubleList.filter((el) => el !== value);
  }

  reverse() {
    this.doubleList.reverse();
  }

  clear() {
    this.doubleList = [];
  }

  findFirst(value) {
    return this.doubleList.indexOf(value);
  }

  findLast(value) {
    return this.doubleList.lastIndexOf(value);
  }

  insert(value, number) {
    if (typeof value === 'string') {
      if (number < 0 || number >= this.doubleList.length) return null;
      this.doubleList.splice(number, 0, value);
    }
    return null;
  }

  get(number) {
    return number >= 0 && this.doubleList[number] !== undefined
      ? this.doubleList[number]
      : null;
  }

  clone() {
    let cloneList = new LinkedList();
    for (const key of this.doubleList) {
      cloneList.append(key);
    }
    return cloneList;
  }

  extend(listAdd) {
    this.doubleList.push(...listAdd.getStorage);
  }

  get getStorage() {
    return this.doubleList;
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

module.exports = LinkedList;
