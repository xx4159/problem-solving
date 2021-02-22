const twoSum = require('./two-sum');

test('Input: nums = [2,7,11,15], target = 9, Output: [0,1]', () => {
  const nums = [2,7,11,15];
  const target = 9;
  const [i, j] = twoSum(nums, target);
  expect(twoSum(nums, target)).toStrictEqual([0,1]);
});


test('Input: nums = [3,2,4], target = 6, Output: [1,2]', () => {
  const nums = [3,2,4];
  const target = 6;
  expect(twoSum(nums, target)).toStrictEqual([1,2]);
});


test('Input: nums = [3,3], target = 6, Output: [0, 1]', () => {
  const nums = [3,3];
  const target = 6;
  expect(twoSum(nums, target)).toStrictEqual([0, 1]);
});
