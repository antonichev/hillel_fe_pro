"use strict;";

const btn = document.querySelector("#check");

const firstString = document.querySelector("#first-value");
const secondString = document.querySelector("#second-value");

const result = document.querySelector("#result");

const sorting = function sort(a, b) {
  if(a > b) return 1;
  if (a < b) return -1;
  return 0;
};

btn.onclick = function() {

  result.classList.remove('correct');
  result.classList.remove('incorrect');
  result.innerText = '';

  let first = firstString.value.toLowerCase();
  let second = secondString.value.toLowerCase();

  if(first && second) {
    first = first.split('').sort(sorting).join('');
    second = second.split('').sort(sorting).join('');

    console.log(first, second);

    if(first === second) {
      result.classList.add('correct');
      result.innerText = 'Значения являются анаграммой';
    } else {
      result.classList.add('incorrect');
      result.innerText = 'Значения не являются анаграммой';
    }

  } else {
    result.classList.add('incorrect');
    result.innerText = 'Введены не все значения!';
  }

};