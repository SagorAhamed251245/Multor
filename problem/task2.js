/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19 */

const positiveNumbers = (arr) => {
  let result = 0;
  for (const i of arr) {
    if (i >= 0) {
      result = result + i;
    }
  }

  return result;
};

console.log(positiveNumbers([1, 3, 5, -4, -6, 8, 22]));
