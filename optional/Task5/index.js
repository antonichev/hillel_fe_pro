"use strict;";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const divider = 2;

function getNumbers(numArr, divider) {
  const newArr = [];

  for(let item of numArr) {

    if(item % divider === 0) {
      newArr.push(item);
    }

  }

  return newArr;
}

const result = getNumbers(arr, divider);

console.log(result);