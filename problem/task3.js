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
  /*   console.log(
    "🚀 ~ file: task3.js:7 ~ maxUsedNumber ~ arrayOfObject:",
    arrayOfObject
  ); */
  const highestNumber = arrayOfObject.map((element) => element.lengths);

  /*  console.log(
    "🚀 ~ file: task3.js:19 ~ maxUsedNumber ~ highestNumber:",
    highestNumber
  ); */

  const maxUsedValue = Math.max(...highestNumber);

  // console.log(maxUsedValue);

  const filterArray = arrayOfObject.filter(
    (element) => element.lengths === maxUsedValue
  );

  return filterArray[0].mainNumber;
};

const array = [3, 5, 13, 13, 3, 3, 13];
const output = maxUsedNumber(array);
console.log(output);
