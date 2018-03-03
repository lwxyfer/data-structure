import {
  sequentialSearch,
  binarySearch,
  recursionBinarySearch
} from './search.js'


const testArray = [-23, 3, 14, 14, 34, 55, 65, 70, 78, 90, 99,100]

// sequentialSearch
test('sequentialSearch 1', () => {
  expect(sequentialSearch(testArray, 23)).toBe(-1);
});
test('sequentialSearch 2', () => {
  expect(sequentialSearch(testArray, 3)).toBe(1);
});
test('sequentialSearch 3', () => {
  expect(sequentialSearch(testArray, 14)).toBe(2);
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
test('binarySearch 3', () => {
  expect(binarySearch(testArray, 14)).toBe(3);
});

// recursionBinarySearch
test('binarySearch 3', () => {
  expect(binarySearch(testArray, 14)).toBe(3);
});
