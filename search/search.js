/**
 * search algorithm 
 */


/**
 * sequential Search
 * @param {array} arr 
 * @param {*} item 
 * @returns item index or -1
 */
export function sequentialSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) return i
  }
  return -1
}


/**
 * 
 * @param {array} arr 
 * @param {*} item 
 */
export function binarySearch(arr, item) {
  const length = arr.length
  let low = 0
  let high = length - 1
  let middle 
  if (item < arr[low] || item > arr[high]) {
    return -1
  }

  while (low <= high) {
    middle = Math.floor((high + low)/2)
    if (item > arr[middle]) {
      low = middle + 1
    } else if (item < arr[middle]) {
      high = middle - 1
    } else {
      return middle
    }
  }
  return -1
}


export function recursionBinarySearch(arr, item) {
  const length = arr.length
  let low = 0
  let high = length - 1
  let middle 

  function search(l, h) {
    if (l > h) {
      return -1
    }
    middle = Math.floor((l + h)/2)
    if (item > arr[middle]) {
      return search(middle + 1, h)
    } else if (item < arr[middle]) {
      return search(l, middle -1)
    } else {
      return middle
    }
  }
  return search(low, high)
}
