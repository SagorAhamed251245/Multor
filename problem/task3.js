/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 */

const maxUsedNumber = (array) => {
  const arrayOfObject = [];

  for (let i = 0; i < array.length; i++) {
    const isMaxUsed = array.filter((element) => element === array[i]);
    const objArray = {
      mainNumber: array[i],
      lengths: isMaxUsed.length,
    };

    arrayOfObject.push(objArray);
  }

  const highestNumber = arrayOfObject.map((element) => element.lengths);

  const maxUsedValue = Math.max(...highestNumber);

  const filterArray = arrayOfObject.find(
    (element) => element.lengths === maxUsedValue
  );

  return filterArray.mainNumber;
};

const array = [3, 5, 13, 13, 3, 3, 23, 23, 23, 23, 23];
const output = maxUsedNumber(array);
console.log(output);
