import {selection} from './sorting.js';

test('[3,65,43,23,14,55,34] ascending order is [3, 14, 23, 34, 43, 55, 65]', () => {
  expect(selection([3,65,43,23,14,55,34])).toEqual([3, 14, 23, 34, 43, 55, 65]);
});

test('[3,65,43,23,14,55,34] descending order is [65, 55, 43, 34, 23, 14, 3]', () => {
  expect(selection([3,65,43,23,14,55,34], true)).toEqual([65, 55, 43, 34, 23, 14, 3]);
});