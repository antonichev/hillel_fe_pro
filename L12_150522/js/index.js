
const app = document.querySelector('#app');

class TableRow {
  constructor(payload) {
    this.id = payload.id;
    this.firstName = payload.first_name;
    this.lastName = payload.last_name;
    this.email = payload.email;
    this.tr = document.createElement('tr');
  }

  showName() {
    alert(`${this.firstName} ${this.lastName}`);
  }

  changeColor() {
    this.classList.toggle('clicked');
  }

  render() {
    this.tr.innerHTML = `<td>${this.id}</td>
                    <td>${this.firstName}</td>
                    <td>${this.lastName}</td>
                    <td>${this.email}</td>
                   `;

    this.tr.onclick = this.changeColor;
    this.tr.ondblclick = this.showName.bind(this);

    return this.tr;
  }
}

const tbodyConstructor = function() {
  const tbody = document.createElement('tbody');

  for(let user of users) {

    const tr = new TableRow(user);
    tbody.appendChild(tr.render());

  }

  return tbody;
};

const table = document.createElement('table');
const thead = document.createElement('thead');

thead.innerHTML = `<tr>
                      <th>Номер</th>
                      <th>Имя</th>
                      <th>Фамилия</th>
                      <th>Почта</th>
                   </tr>`;
table.appendChild(thead);
table.appendChild(tbodyConstructor());

app.appendChild(table);