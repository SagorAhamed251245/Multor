/* 
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */

function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return "Input should be an array with at least two elements.";
  }

  const sortedArray = arr.sort((a, b) => a - b);

  return sortedArray[1];
}
const numbers = [5, 0, 8, 1, 2, 9, 3];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest:", secondSmallest);
