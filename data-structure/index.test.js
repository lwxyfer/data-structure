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


// BST
const tree = new BinarySearchTree();
const arr = [52,12,45,67,3,5,7,56,35,78,34,67,95,23]
const orderArr = [...arr].sort((a,b) => a - b)

arr.forEach(item => {
  tree.insert(item)
})

const inOrder = []
const preOrder = []
const postOrder = []
tree.inOrderTraverse(value => { inOrder.push(value) })
tree.preOrderTraverse(value => { preOrder.push(value) })
tree.postOrderTraverse(value => { postOrder.push(value) })
console.log('postOrder',inOrder)
console.log('preOrder',preOrder)
console.log('postOrder',postOrder)

test('tree inOrderTraverse', () => {
  expect(inOrder).toEqual(orderArr)
})

test('tree min', () => {
  expect(tree.min().key).toBe(3)
})

test('tree search', () => {
  expect(tree.search(101)).toBe(false)
  expect(tree.search(12).key).toBe(12)
  expect(tree.search(78).key).toBe(78)
})

test('tree remove', () => {
  expect(tree.remove(12)).toBe(true)

  const nowTree = []
  tree.preOrderTraverse(value => { nowTree.push(value) })
  console.log(nowTree)
  
  expect(tree.remove(111)).toBe(false)
  expect(tree.remove(7)).toBe(true)
  
  const nowTree1 = []
  tree.preOrderTraverse(value => { nowTree1.push(value) })
  console.log(nowTree1)
})



