let vowelsCount = 0;
let constantsCount = 0;

const getVowels = (string) => {
  let vowel = ["a", "e", "i", "o", "u"];
  for (const i of string) {
    if (vowel.includes(i)) {
      vowelsCount++;
    } else {
      constantsCount++;
    }
  }
};

getVowels("vowelsCount");
console.log({
  vowelsCount: vowelsCount,
  constantsCount: constantsCount,
});
/*output => { vowelsCount: 4, constantsCount: 7 } */
