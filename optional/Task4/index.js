"use strict;";

const colors = ['black', 'red', 'green', 'blue', 'yellow'];

function changeColors(element) {
  let idx = 0;

  const currentColor = function() {
    if (idx === colors.length - 1) {
      idx = 0;
    } else {
      idx++;
    }

    element.style.color = colors[idx];

    return colors[idx];
  };

  return currentColor;
}

const elements = document.querySelectorAll('p');

for (let p of elements) {
  const color = changeColors(p);
  p.onclick = color;
}