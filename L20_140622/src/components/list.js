import card from './card';

export default (data) => {
  const cardList = document.createElement('div');
  cardList.className = 'card-list';

  for (let val of data) {
    cardList.appendChild(card(val));
  }

  return cardList;
};
