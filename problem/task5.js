/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */

function calc(a, b, operator) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    operator !== "+" ||
    operator !== "-" ||
    operator !== "*" ||
    operator !== "/"
  ) {
    return "invalid";
  }
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  }
}
console.log(calc(5, 5, "+"));
