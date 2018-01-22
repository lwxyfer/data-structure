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

  get size() {
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

  get front() {
    return this.queue[0];
  }

  clear() {
    this.queue = [];
  }

  get isEmpty() {
    return !this.queue.length ? true : false;
  }

  get size() {
    return this.queue.length
  }
}


/**
 * stack
 */
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

  get isEmpty() {
    return !this.stack.length ? true : false;
  }

  get size() {
    return this.stack.length
  }
}

/**
 * arithmetic expression
 * @desc stack practical application
 */


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

  remove(position) {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } 
      else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return current.element
    } else {
      return false;
    }
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

  get isEmpty() {
    return !this.head ? true : false;
  }

  get size() {
    return this.length;
  }
}


/**
 * Priority queue
 * array LinkedList Heap
 */
class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(element, priority = 0){
    const queueElement = { element, priority }
    if (this.isEmpty) {
        this.items.push(queueElement)
    } else {
        const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
        if (preIndex > -1) {
            this.items.splice(preIndex, 0, queueElement)
        } else {
            this.items.push(queueElement)
        }
    }
  }

  dequeue() {
    return this.items.pop()
  }

  front(){
    return this.items[this.items.length - 1]
  }

  clear(){
    this.items = []
  }

  get size() {
    return this.items.length
  }

  get isEmpty() {
    return !this.items.length
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

  // TODO: handle different data-type
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
    return Object.values(this.items).length
  }

  get values() {
    return Object.values(this.items)
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
// It's just like JS Object, so do not implement it here



/**
 * HashTable, HashMap
 * Wiki: https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97
 */
class HashTable {
  constructor() {
    this.table = [];
  }

  // lose-lose hash function
  static loseloseHashCode(key) {
    let hash = 0;
    for (let codepoint of key) {
      hash += codepoint.charCodeAt();
    }
    // decrease the probability of hash repeat
    return hash % 37
  }

  /**
   * @param {string} key 
   * @param {*} value 
   */
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
    const position = this.loseloseHashCode(key);
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append({ key, value })
  }

  get(key) {
    const position = this.loseloseHashCode(key);
    if (this.table[position] === undefined) return;
    const getElementValue = node => {
      if (!node && !node.element.key) return undefined
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


/**
 * HashTable, HashMap: Collision resolution 
 * 2. Linear Probing
 */
class HashTable2 {
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
    let position = HashTable.loseloseHashCode(key)
    while (table[position] !== undefined) {
      position++;
    }
    this.table[position] = {key, value};
  }

  get(key) {
    let position = HashTable.loseloseHashCode(key)
    while(thih.table[position]) {
      if (Object.is(this.table[position].key, key)) {
        return this.table[position].value
      }
      position++
    }
    return undefined
  }

  remove(key) {
    let position = HashTable.loseloseHashCode(key)
    while (thih.table[position]) {
      if (Object.is(this.table[position].key, key)) {
        this.table[position] = undefined;
        return true;
      }
      position++
    }
    return false
  }
}


/**
 * different hash function
 */
function djb2HashCode(key) { 
  let hash = 5381
  for (let codePoint of key) {
    hash = hash * 33 + codePoint.charCodeAt()
  }
  return hash % 1013
}


/**
 * Tree Node
 */
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

/**
 * BinarySearchTree
 */
class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(key) {
    const newNode = new Node(key)
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverseNode(this.root, callback)
  }

  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }
    postOrderTraverseNode(this.root, callback)
  }
}


export {
  Bag,
  Queue,
  Stack,
  PriorityQueue,
  LinkedList,
  Set,
  HashTable,
  BinarySearchTree,
}
