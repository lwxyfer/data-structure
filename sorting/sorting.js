// no use of native JS array API

function exchange(arr, i, j) {
  const x = arr[i];
  const y = arr[j];
  arr[i] = y;
  arr[j] = x;
}


/**
 * bubble sort
 */
export function bubble(array) {
  const arr = [...array]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return arr
}

export function bubbleReverse(array) {
  const arr = [...array]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j+1]) {
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return arr
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
  for (i = 0; i < length; i++) {
    min = i;

    for (j = i + 1; j < length; j++) {
      // FIXME: Performance. So how to reverse?
      if (reverse ? arr[j] > arr[min] : arr[j] < arr[min]) {
        min = j;
      }
    }
    min !== i ? exchange(arr, i, min) : null
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
  let i = low;
  let j = middle + 1;
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

/**
 * top to bottom
 * @param {array} arr 
 */
export function mergeSort(arr) {
  function sort(arr, low, high) {
    if (low >= high) {
      return
    }
    const middle = Math.floor((high + low)/2);
    sort(arr, middle + 1, high);
    sort(arr, low, middle);
    merge(arr, low, middle, high)
  }
  sort(arr, 0, arr.length-1)
  return arr;
}

export function mergeSortBU(arr) {
  const length = arr.length;
  for(let i = 1; i < length; i = i + i) {
    for(let j = 0; j < length - i; j += i + i) {
      merge(arr, j, j + i - 1, Math.min(j + i + i -1, length - 1))
    }
  }
  return arr
}


/**
 * quick sort
 */

function partition(arr, low, high) {
  let i = low
  let j = high
  const item = arr[low]

  while(true) {
    while( item > arr[++i] ) {
      if (i == high) {
        break
      }
    }
    while( item < arr[--j]) {
      if (j == low) {
        break
      }
    }
    if (i >= j) { 
      break
    }
    exchange(arr, i, j)
  }
  exchange(arr, low, j)
  return j
}

export function quickSort(arr) {
  const tmp = [...arr]
  function sort(arg, l, h) {
    if (l >= h) {
      return
    }
    const j = partition(arg, l, h);
    sort(arg, l, j-1)
    sort(arg, j+1, h)
  }
  sort(tmp, 0, tmp.length - 1)
  return tmp
}
