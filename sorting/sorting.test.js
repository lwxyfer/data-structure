import {
  selection,
  insertion,
  mergeSort,
  mergeSortBU,
  bubble,
  bubbleReverse,
  quickSort
} from './sorting.js'

const originArray = [3, 65, -23, 14, 55, 14, 34]
const ascendArray = [-23, 3, 14, 14, 34, 55, 65]
const decentArray = [65, 55, 34, 14, 14, 3, -23]


// bubble 
test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(bubble(originArray)).toEqual(ascendArray);
});
test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(bubbleReverse(originArray)).toEqual(decentArray);
});



// selection
test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(selection(originArray)).toEqual(ascendArray);
});

test('[3,65,-23,14,55,14,34] descending order is [65, 55, 43, 34, 23, 14, 3]', () => {
  expect(selection(originArray, true)).toEqual(decentArray);
});

// insertion
test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(insertion(originArray)).toEqual(ascendArray);
});

test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(insertion(originArray, true)).toEqual(decentArray);
});

// merge
test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(mergeSort(originArray)).toEqual(ascendArray);
});

test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(mergeSortBU([3, 65, -23, 14, 55, 14, 34])).toEqual([-23, 3, 14, 14, 34, 55, 65]);
});


// merge
test('qucik sort: [3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(quickSort(originArray)).toEqual(ascendArray);
});
