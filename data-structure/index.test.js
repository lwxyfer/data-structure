const structure = require('./index.js')

const {
  Bag,
  Queue,
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
