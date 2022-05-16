
var str = prompt('Введите строку с тегами:');

var posOpen = 0;
var posClose = 0;
var tags = [];

while (true) {
  var foundPosOpen = str.indexOf('<', posOpen);
  var foundPosClose = str.indexOf('>', posClose);

  if (foundPosOpen == -1) break;

  tags.push(str.substring(foundPosOpen, foundPosClose + 1));

  posOpen = ++foundPosOpen;
  posClose = ++foundPosClose;
}

for (var item of tags) {
  str = str.replace(item, '');
}

console.log(str);