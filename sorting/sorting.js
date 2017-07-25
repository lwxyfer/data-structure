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

/**
 * insertion sort
 * @param {array} arr 
 * @param {boolean} reverse 
 */
export function insertion(arr, reverse) {
  const length = arr.length;
  for(let i = 1; i < length; i++) {
    for(let j = i; j > 0; j-- ) {
      if (reverse ? arr[j] > arr[j-1] : arr[j] < arr[j-1]) {
        exchange(arr, j-1, j)
      }
    }
  }
  return arr 
}


/**
 * Merge sort
 */
function merge(arr, low, middle, high) {
  const aux = [];
  const i = low;
  const j = middle + 1;
  for (let k = low; k <= high; k++) {
    aux[k] = arr[k]
  }
  for (let k = low; k <= high; k++) {
    if (i > middle) {
      arr[k] = aux[j++]
    } else if (j > high) {
      arr[k] = aux[i++]
    } else if (aux[j] > aux[i]) {
      arr[k] = aux[i++]
    } else {
      arr[k] = aux[j++]
    }
  }
}


export function mergeSort(arr) {
  const aux = [];
  function sort(arr, low, high) {
    if (low > high) {
      return
    }
    const middle = Math.floor((high + low)/2);
    sort(arr, middle + 1, high);
    sort(arr, low, mid);
    merge(arr, low, middle, high)
  }
  sort(arr, 0, arr.length-1)
  return arr;
}