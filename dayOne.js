const data = require('./dayOneData');

//////////////////////////////////////////////////
// PART 1
let count = 0;
let current = 0;

data.forEach(number => {
  if(current) {
    if(number > current) count++;
  }

  current = number;
});

console.log(count);

// Refactor as function:
const amountOfIncreases = (numbers) => {

  let count = 0;
  let current = numbers[0];

  numbers.forEach(number => {    
    if(number > current) count++;
    current = number;
  });

  return count;
};

console.log(amountOfIncreases(data));


//////////////////////////////////////////////////
// PART 2
// let sumOne = 0;
// let sumTwo = 0;
let tripleCount = 0;

for(let i = 0; i < data.length - 3; i++) {
  const numOne = data[i];
  const numTwo = data[i + 1];
  const numThree = data[i + 2];
  const numFour = data[i + 3];

  const sumOne = numOne + numTwo + numThree;
  const sumTwo = numTwo + numThree + numFour;

  if(sumTwo > sumOne) tripleCount++;
}

console.log(tripleCount)

// Refactor as function:
const moreAccurateAmountOfIncreases = (numbers) => {
  let tripleCount = 0;

  for(let i = 0; i < numbers.length - 3; i++) {
    const numOne = numbers[i];
    const numTwo = numbers[i + 1];
    const numThree = numbers[i + 2];
    const numFour = numbers[i + 3];

    const sumOne = numOne + numTwo + numThree;
    const sumTwo = numTwo + numThree + numFour;

    if(sumTwo > sumOne) tripleCount++;
  }

  return tripleCount;
}

console.log(moreAccurateAmountOfIncreases(data));