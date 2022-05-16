//Создадим два примитива
var a = 10;
var b = a;

//Выведем в консоль
console.log(`a = ${a}, b = ${b}`);

//Назначим b другое значение
b = 15;

//Выведем в консоль
console.log(`a = ${a}, b = ${b}`);

//Изменилось значение второй переменной (предсказуемо)

//Создадим объект
var fiz = {
  name: 'obj1',
  data: 'some data'
}
var baz = fiz;

console.log('fiz', fiz);
console.log('baz', baz);

//Назначим baz другое значение
baz.name = 'obj2';
baz.data = 'some OTHER data';

//Выведем в консоль
console.log('fiz', fiz);
console.log('baz', baz);

//Изменились оба объекта (не предсказуемо), т.к. переменная хранит не значение а ссылку на объект