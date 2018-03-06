/**
 * shuffle
 * Get item from the rest of arr to replace current item
 * WIKI: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 随机数测试: https://www.w3cplus.com/javascript/shuffling-array-js.html
 */


export default function shuffle(arr){
  let n = arr.length, random
  while(0 != n){
      random =  (Math.random() * n--) >>> 0
      [arr[n], arr[random]] = [arr[random], arr[n]]
  }
  return arr;
}
