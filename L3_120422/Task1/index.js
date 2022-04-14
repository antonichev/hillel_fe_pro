
var list = prompt('Вставьте список имен: (Name1, Name2, ...)').split(', ');

var i = 0;

for (var item of list) {
  i++;
  console.log(`<li>${i} ${item}</li>`);
}