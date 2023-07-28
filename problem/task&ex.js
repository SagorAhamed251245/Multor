function romanToInteger(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }


  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentNumeralValue = romanNumerals[roman[i]];
    const nextNumeralValue = romanNumerals[roman[i + 1]];

    if (nextNumeralValue && nextNumeralValue > currentNumeralValue) {
      result += nextNumeralValue - currentNumeralValue;
      i++;
    } else {
      result += currentNumeralValue;
    }
  }

  return result;
}

console.log(romanToInteger("XI"));
