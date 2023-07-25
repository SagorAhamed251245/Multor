// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"


let result = [];
const rev = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    result.push(element);
  }
};
rev("string");

console.log(result.join(""));
