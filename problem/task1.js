let result = [];
const rev = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    result.push(element);
  }
};
rev("string");

console.log(result.join(""));
