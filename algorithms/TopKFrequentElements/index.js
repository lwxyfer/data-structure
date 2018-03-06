/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

 /**
 * @param {array} nums
 * @param {number} k
 * @return {array}
 */
function topKFrequent(nums, k) {
  const obj = {};
  nums.forEach((item) => {
    if (!obj[item])
      obj[item] = 1;
    else 
      obj[item]++;
  });

  const arr = [];

  for (var key in obj) {
    arr.push({key, value: obj[key]});
  }

  // quick sort
  arr.sort((a, b) => b.value - a.value);

  const ans = [];
  for (var i = 0; i < k; i++) {
    ans.push(+arr[i].key);
  }

  return ans;
};
