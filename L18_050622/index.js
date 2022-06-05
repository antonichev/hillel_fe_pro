import { add, multiply } from './src/calculator.js';
import makeList from './src/menumaker.js';
import options from './connector/options.js';

console.log('MULTIPLY 1, 2 and 3 >>> ', multiply(1, 2, 3));
console.log('ADD 4, 5 and 6 >>> ', add(4, 5, 6));

const menu = ['Home', 'About', 'Contacts', 'Mission'];

const menuList = makeList(menu);

console.log('MENU >>> ', menuList);

console.log('CONN OPTS >>> ', options);
