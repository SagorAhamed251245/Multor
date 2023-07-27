/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */

function romanToInteger(roman) {
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] == "I") {
      result += 1;
    } else if (roman[i] == "V") {
      result += 5;
    } else if (roman[i] == "X") {
      result += 10;
    } else if (roman[i] === "L") {
      result += 50;
    } else if (roman[i] === "C") {
      result += 100;
    } else if (roman[i] === "D") {
      result += 500;
    } else if (roman[i] === "M") {
      result += 1000;
    }
  }
  return result;
}
console.log(romanToInteger("XI"));
