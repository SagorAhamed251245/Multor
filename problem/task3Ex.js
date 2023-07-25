const maxNumber = (array) => {
  const arrayOfObject = [];
  for (let i = 0; i < array.length; i++) {
    const isMaxUsed = array.filter((element) => element === array[i]);
    arrayOfObject.push(isMaxUsed);
  }


  

};

const arr = [3, 5, 13, 13, 3, 3];
const output = maxNumber(arr);
console.log(output);
