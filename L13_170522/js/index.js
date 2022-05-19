import header from './components/header.js';
import card from './components/card.js';
import data from './data.js';

const app = document.querySelector('#app');

app.appendChild(header('Personnel Card Holder'));

for(let user of data) {
  app.appendChild(card(user));
}