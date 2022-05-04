"use strict;";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function each(arr, modifier){

  for(let i = 0; i < arr.length; i++) {
    arr[i] = modifier(arr[i]);
  }

}

const addTen = function(item) {
  return item + 10;
};

const addTwenty = function(item) {
  return item + 20;
};

each(arr, addTen);
each(arr2, addTwenty);

console.log('arr', arr);
console.log('arr2', arr2);