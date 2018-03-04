import {
  sequentialSearch,
  binarySearch,
  recursionBinarySearch,
  lastBinarySearch,
  firstBinarySearch
} from './search.js'


const testArray = [-23, 3, 14, 14, 34, 55, 65, 70, 78, 90, 99,100]

// sequentialSearch
test('sequentialSearch 1', () => {
  expect(sequentialSearch(testArray, 23)).toBe(-1);
});
test('sequentialSearch 2', () => {
  expect(sequentialSearch(testArray, 3)).toBe(1);
});


// binarySearch
test('binarySearch 1', () => {
  expect(binarySearch(testArray, -33)).toBe(-1);
});
test('binarySearch 2', () => {
  expect(binarySearch(testArray, 10)).toBe(-1);
});
test('binarySearch 2', () => {
  expect(binarySearch(testArray, 3)).toBe(1);
});


// recursionBinarySearch
test('recursionBinarySearch 3', () => {
  expect(recursionBinarySearch(testArray, 34)).toBe(4);
});

// lastBinarySearch
test('lastBinarySearch 3', () => {
  expect(lastBinarySearch(testArray, 14)).toBe(3);
});

// firstBinarySearch
test('firstBinarySearch 3', () => {
  expect(firstBinarySearch(testArray, 14)).toBe(2);
});
