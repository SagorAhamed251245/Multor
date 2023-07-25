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

  const maxUsedValue = Math.max(
    ...arrayOfObject.map((element) => element.lengths)
  );

  console.log(maxUsedValue);

  const filterArray = arrayOfObject.filter(
    (element) => element.lengths === maxUsedValue
  );

  return filterArray[0].mainNumber;
};

const array = [3, 5, 13, 13, 3, 3, 13, 100, 100, 100, 100, 100];
const output = maxUsedNumber(array);
console.log(output);
