import './styles/main.scss';
import { data } from './data/data';
import list from './components/list';

const app = document.querySelector('#app');

data().then((value) => {
  app.appendChild(list(value.users));
});
