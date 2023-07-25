const input = [3, 5, 2, 5, 3, 3, 3, 1, 4, 5];

const maxUseNumber = (array) => {
  const arrayOfObject = [];
  for (let i = 0; i < array.length; i++) {
    const isMaxUsed = array.filter((element) => element == array[i]);
    const objArray = {
      mainNumber: array[i],
      lengths: isMaxUsed.length,
    };
    arrayOfObject.push(objArray);
  }

  let maxObject = 0;
  for (let i = 0; i < arrayOfObject.length; i++) {
    if (arrayOfObject[i].lengths > maxObject) {
      maxObject = arrayOfObject[i].lengths;
    }
  }

  const findResult = arrayOfObject.find(
    (element) => element.lengths == maxObject
  );

  return findResult.mainNumber;
};

const output = maxUseNumber(input);
console.log(output);
