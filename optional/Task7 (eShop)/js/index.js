
const shop = [];

const container = document.querySelector('.container');
const info = document.querySelector('.info');
const form = document.querySelector('#add-product');

info.innerText = 'Товары не добавлены';
info.classList.add('warning');

form.onsubmit = (e) => {
  e.preventDefault();

  const id = shop.length;
  const name = e.target.querySelector('#name').value;
  const article = e.target.querySelector('#article').value;
  const price = e.target.querySelector('#price').value;
  const discount = e.target.querySelector('#discount').value;
  const inStock = e.target.querySelector('#inStock').checked;

  const product = new Product({
    id, name, article, price, discount, inStock
  });

  shop.push(product);

  form.reset();

  mount();
};

const format = function(number) {
  return Number(number).toFixed(2);
};

const removeItem = function() {
  const answer = confirm(`Удалить ${this.name} из списка товаров?`);

  if(answer) {
    shop.splice(this.id, 1);
    mount();
  }
};

class Product {
  constructor(parameters) {
    this.id = parameters.id;
    this.name = parameters.name;
    this.article = parameters.article;
    this.price = parameters.price;
    this.discount = parameters.discount;
    this.inStock = parameters.inStock;
  }

  priceWithDiscount() {
    return this.price - this.price * this.discount / 100;
  }

  render(){
    return `
      <h3>${this.name}</h3>
      <h4>${this.article}</h4>
      <img src="./img/product.png" alt="${this.name}" />
      <p class="full-price">
        <span>Цена:</span>${format(this.price)} USD
      </p>
      <p class="discount-price">
        <span>Цена со скидкой:</span>${format(this.priceWithDiscount())} USD
      </p>
      <p class="${this.inStock ? 'in-stock' : 'not-in-stock'}">${this.inStock ? 'Есть на складе' : 'Нет на складе'}</p>
      <button class="remove-item">Удалить товар</button>
    `;
  }
}

function mount() {
  container.innerHTML = '';

  for(let item of shop) {
    const card = document.createElement('div');
    card.className = 'prod-card';
    card.innerHTML = item.render();

    btn = card.querySelector('.remove-item');
    btn.onclick = removeItem.bind(item);

    container.appendChild(card);
  }

  if(shop.length){
    info.innerText = `Список товаров (${shop.length} шт.)`;
    info.classList.remove('warning');
  } else {
    info.innerText = 'Товары не добавлены';
    info.classList.add('warning');
  }
}