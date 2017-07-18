import {
  selection,
  insertion
} from './sorting.js';

test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(selection([3,65,-23,14,55,14,34])).toEqual([-23, 3, 14, 14, 34, 55, 65]);
});

test('[3,65,-23,14,55,14,34] descending order is [65, 55, 43, 34, 23, 14, 3]', () => {
  expect(selection([3,65,-23,14,55,14,34], true)).toEqual([65, 55, 34, 14, 14, 3, -23]);
});


test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(insertion([3,65,-23,14,55,14,34])).toEqual([-23, 3, 14, 14, 34, 55, 65]);
});

test('[3,65,-23,14,55,14,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(insertion([3,65,-23,14,55,14,34], true)).toEqual([65, 55, 34, 14, 14, 3, -23]);
});