"use strict;";

const btnList = ['btn-1', 'btn-2'];

function setInnerText (elementId, text){
  const element = document.querySelector(`#${elementId}`);
  element.innerText = text;
}

function counter(elementId) {
  let count = 0;

  const result = function() {
    count += 1;
    setInnerText(elementId, count);
    return count;
  };

  return result;
}

for(let item of btnList) {
  const element = document.querySelector(`#${item}`);
  element.onclick = counter(item);
}