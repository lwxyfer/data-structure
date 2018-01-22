const structure = require('./index.js')

const {
  Bag,
  Queue,
  PriorityQueue,
  Stack,
  LinkedList,
  Set,
  HashTable,
  BinarySearchTree
} = structure;

// Bag test
const bagIns = new Bag([1,2,3,4])

test('Bag init', () => {
  expect(bagIns.bag).toEqual([1,2,3,4]);
})

test('Bag add', () => {
  expect(bagIns.add(5)).toEqual([1,2,3,4,5]);
})

test('Bag length', () => {
  expect(bagIns.size).toBe(5);
})


// Queue
const queueIns = new Queue([1,2,3,4,])

test('queue init', () => {
  expect(queueIns.queue).toEqual([1,2,3,4]);
})

test('queue enqueue', () => {
  expect(queueIns.enqueue(5)).toEqual([1,2,3,4,5]);
})

test('queue dequeue', () => {
  expect(queueIns.dequeue()).toBe(1);
})

test('queue front', () => {
  expect(queueIns.front).toBe(2);
})

test('queue isEmpty', () => {
  queueIns.clear()
  expect(queueIns.isEmpty).toBe(true)
})

// PriorityQueue
const priorityQueueIns = new PriorityQueue()

test('PriorityQueue init', () => {
  priorityQueueIns.enqueue(1)
  priorityQueueIns.enqueue(2, 10)
  priorityQueueIns.enqueue(3, 5)
  expect(priorityQueueIns.items).toEqual([
    {
      element: 1,
      priority: 0
    },
    {
      element: 3,
      priority: 5
    },
    {
      element: 2,
      priority: 10
    }
  ]);
})

test('PriorityQueue dequeue', () => {
  expect(priorityQueueIns.dequeue()).toEqual({element: 2, priority: 10});
})



// Stack
const stackIns = new Stack([1,2,3,4])

test('stack init', () => {
  expect(stackIns.stack).toEqual([1,2,3,4])
})
test('stack push', () => {
  expect(stackIns.push(5)).toEqual([1,2,3,4,5])
})
test('stack pop', () => {
  expect(stackIns.pop()).toBe(5)
})
test('stack isEmpty', () => {
  expect(stackIns.isEmpty).toBe(false)
})
test('stack pop', () => {
  expect(stackIns.size).toBe(4)
})


// LinkedList
const LinkedListIns = new LinkedList()

test('LinkedListIns append', () => {
  LinkedListIns.append(1)
  expect(LinkedListIns.head.element).toBe(1)
})

test('LinkedListIns prepend', () => {
  LinkedListIns.prepend(3)
  expect(LinkedListIns.head.element).toBe(3)
})

test('LinkedListIns insert', () => {
  LinkedListIns.insert(1, 2)
  
  expect(LinkedListIns.remove(1)).toBe(2)
  expect(LinkedListIns.head.element).toBe(3)
  expect(LinkedListIns.size).toBe(2)
})



// Set
const setIns = new Set()
setIns.add(1)
setIns.add(2)
setIns.add(3)
setIns.add(4)
setIns.add('hello')
setIns.add(3)

const setIns2 = new Set()
setIns2.add(2)
setIns2.add(3)
setIns2.add(5)
setIns2.add('world')

test('setIns values', () => {
  expect(setIns.size).toBe(5)
  expect(setIns.has(3)).toBe(true)
  expect(setIns.values).toEqual([1,2,3,4,'hello'])
})

test('setIns remove 2', () => {
  expect(setIns.remove(2)).toBe(true)
})

test('setIns union', () => {
  expect(setIns.union(setIns2).values).toEqual([1,2,3,4,5,'hello', 'world'])
})
test('setIns intersection', () => {
  expect(setIns.intersection(setIns2).values).toEqual([3])
})
test('setIns difference', () => {
  expect(setIns.difference(setIns2).values).toEqual([1,4,'hello'])
})
test('setIns subset', () => {
  expect(setIns.subset(setIns2)).toBe(false)
})


// HashTable
const hashTableIns = new HashTable()
test('hashTableIns', () => {
  hashTableIns.put('name', 12412)
  expect(hashTableIns.get('name')).toBe(12412)
  hashTableIns.remove('name')
  expect(hashTableIns.get('name')).toBe(undefined)
})



const tree = new BinarySearchTree();

tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// tree.inOrderTraverse(value => { console.log(value) })
