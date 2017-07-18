// no use of native JS array API

function exchange(arr, i, j) {
  const x = arr[i];
  const y = arr[j];
  arr[i] = y;
  arr[j] = x;
}

/**
 * Selection sort
 * @param {array} array to sort
 * @param {boolean}  ascending order or descending order
 */
export function selection(arr, reverse) {
  const length = arr.length;
  let i = null;
  let j = null;
  let min = null;
  for(i = 0; i < length; i++) {
    min = i;

    for(j = i + 1; j < length; j++) {
      if (reverse ? arr[j] > arr[min] : arr[j] < arr[min]) {
        min = j;
      }
    }
    exchange(arr, i, min)
  }
  return arr
}