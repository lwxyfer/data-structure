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
    return !this.bag.length ?  true : false;
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
    return !this.queue.length ?  true : false;
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
    return !this.stack.length ?  true : false;
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
    if (this.head  === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
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

      while(index++ < position) {
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