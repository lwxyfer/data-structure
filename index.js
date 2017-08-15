/*
 * Data stucture 
 * Inspired By Algorithms(Fourth Edition)
 */


class Bag {
  constructor(initial = []) {
    this.bag = initial;
  }

  add(item) {
    this.bag.push(item);
    return this.bag
  }

  isEmpty() {
    return !this.bag.length ? true : false;
  }

  size() {
    return this.bag.length
  }
}


/*
 * FIFO
 */
class Queue {
  constructor(initial = []) {
    this.queue = initial;
  }

  enqueue(item) {
    this.queue.push(item);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  clear() {
    this.queue = [];
  }

  isEmpty() {
    return !this.queue.length ? true : false;
  }

  size() {
    return this.queue.length
  }
}



class Stack {
  constructor(initial = []) {
    this.stack = initial;
  }

  push(item) {
    this.stack.push(item);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return !this.stack.length ? true : false;
  }

  size() {
    return this.stack.length
  }
}

/*
 * Reference API: https://courses.edx.org/c4x/PekingX/04830050x/asset/2-3.pdf 
 */
class LinkedListNode {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element) {
    const node = new LinkedListNode(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  prepend(element) {
    const oldHead = this.head;
    const node = new LinkedListNode(element);
    node.next = oldHead;
    this.head = node;
    this.length++;
  }

  insert(position, element) {
    if (position === 0) {
      this.prepend(element)
    }
    if (position === this.length) {
      this.append(element)
    }
    if (position > 0 && position < this.length) {
      const node = new LinkedListNode(element);
      let index = 0;
      let current = this.head;
      let previous = null;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.next = current;
    }
    this.length++;
  }

  remove(index) {
    if (position > -1 && position < length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
        return current.element
    }
    return true;
  }

  toString() {
    let current = this.head
    let string = ''
    while (current) {
      string += ` ${current.element}`
      current = current.next
    }
    return string
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return !this.head ? true : false;
  }

  size() {
    return this.length;
  }
}


/**
 * Set
 */
class Set {
  constructor() {
    this.items = {}
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }

  get size() {
    return Object.keys(this.items).length
  }

  get values() {
    return Object.keys(this.items)
  }

  union(otherSet) {
    const unionSet = new Set()
    this.values.forEach((v, i) => unionSet.add(this.values[i]))
    otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()
    this.values.forEach((v, i) => {
      if (otherSet.has(v)) {
        intersectionSet.add(v)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()
    this.values.forEach((v, i) => {
      if (!otherSet.has(v)) {
        differenceSet.add(v)
      }
    })
    return differenceSet
  }

  subset(otherSet) {
    if (this.size > otherSet.size) {
      return false
    } else {
      return !this.values.some(v => !otherSet.has(v))
    }
  }
}

/**
 * Dictionary, Associative Array, Map
 * { key: value }
 */
// JS Object


/**
 * Priority queue
 * array LinkedList Heap
 */


/**
 * HashTable, HashMap
 * right translation: https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97
 */
class HashTable {
  constructor() {
    this.table = [];
  }

  // lose lose hash function
  static loseloseHashCode(key) {
    let hash = 0;
    for (let codepoint of key) {
      hash += codepoint.charCodeAt();
    }
    // decrease the probability of hash repeat
    return hash % 37
  }

  put(key, value) {
    const position = HashTable.loseloseHashCode(key)
    this.table[position] = value
  }

  get(key) {
    return this.table[HashTable.loseloseHashCode(key)]
  }

  remove(key) {
    this.table[HashTable.loseloseHashCode(key)] = undefined
  }
}


/**
 * HashTable, HashMap: Collision resolution
 * 1. Separate chaining with linked lists
 * https://en.wikipedia.org/wiki/Hash_table
 */
class HashTableLinkedlists {
  constructor() {
    this.table = [];
  }

  static loseloseHashCode(key) {
    let hash = 0;
    for (let codepoint of key) {
      hash += codepoint.charCodeAt();
    }
    return hash % 37
  }

  put(key, value) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append({ key, value })
  }

  get(key) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) return undefined
    const getElementValue = node => {
      if (!node && !node.element) return undefined
      if (Object.is(node.element.key, key)) {
        return node.element.value
      } else {
        return getElementValue(node.next)
      }
    }
    return getElementValue(this.table[position].head)
  }

  remove(key) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) return undefined
    const getElementValue = node => {
      if (!node && !node.element) return false
      if (Object.is(node.element.key, key)) {
        this.table[position].remove(node.element)
        if (this.table[position].isEmpty) {
          this.table[position] = undefined
        }
        return true
      } else {
        return getElementValue(node.next)
      }
    }
    return getElementValue(this.table[position].head)
  }
}