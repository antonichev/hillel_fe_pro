"use strict;";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function each(arr, modifiers){

  let arrIterator = 0;

  for(let i = 0; i < arr.length; i++) {

    if(arrIterator === modifiers.length) {
      arrIterator = 0;
    }

    let func = modifiers[arrIterator];

    arr[i] = func(arr[i]);

    ++arrIterator;
  }

}

const addTen = function(item) {
  return item + 10;
};

const addTwenty = function(item) {
  return item + 20;
};

const multiplyByTwo = function(item) {
  return item * 2;
};

const arrOfFunc = [addTen, addTwenty, multiplyByTwo];

each(arr, arrOfFunc);

console.log(arr);
