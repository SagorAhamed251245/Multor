var merge = function (nums1, m, nums2, n) {
  const result = [...nums1, m, ...nums2, n];
  return result.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
