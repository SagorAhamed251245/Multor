/* 
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */
function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input should be an array with at least two elements.");
  }

  // Sort the array in ascending order
  const sortedArray = arr.slice().sort((a, b) => a - b);

  // Return the element at index 1 (the second smallest)
  return sortedArray[1];
}
const numbers = [5, 2, 8, 1, 9, 3];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest:", secondSmallest); // Output: Second Smallest: 2
