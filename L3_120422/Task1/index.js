
//var list = prompt('Вставьте список имен: (Name1, Name2, ...)').split(', ');

var list = prompt('Вставьте список имен: (Name1, Name2, ...)');

var names = [];

var firstPlace = 0;

for (var i = 0; i < list.length; i++) {
  if (list[i] === ',') {
    var userName = list.slice(firstPlace, i);
    firstPlace = i;

    userName = userName.replace(',', '');
    userName = userName.trim();

    names.push(userName);
  }
}

var count = 0;

for (var item of names) {
  count++;
  console.log(`<li>${count} ${item}</li>`);
}