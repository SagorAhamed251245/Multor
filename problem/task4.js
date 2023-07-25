/* Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9) */

function findTwoNumbersWithSum(array, target) {
  /* let left = 0;
  let right = arr.length - 1; */

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return [i, j];
      }
    }
  }
  return "No sun funding available";
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

const result = findTwoNumbersWithSum(inputArray, targetValue);
console.log(result);
