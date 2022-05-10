
(function () {

  const container = document.querySelector('.container');

  const htmlConstructor = function(user) {

    const malePerson = 'Male.png';
    const femalePerson = 'Female.png';
    const unknown = 'unknown.png';
    const person = 'person.png';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h1>${user.firstName} ${user.lastName}</h1>
        <img src="${person}" alt="${user.firstName}" class="photo">
        <table>
          <tr>
            <td class="text-bold">ID:</td>
            <td>${user.id}</td>
          </tr>
          <tr>
            <td class="text-bold">DEPT:</td>
            <td>${user.department}</td>
          </tr>
          <tr>
            <td class="text-bold">EMAIL:</td>
            <td>${user.email}</td>
          </tr>
          <tr>
            <td class="text-bold">PHONE:</td>
            <td>${user.phone}</td>
          </tr>
          <tr class="gender">
            <td class="text-bold">GENDER:</td>
            <td class="hidden">${user.gender}</td>
          </tr>
          <tr>
            <td class="text-bold">CAR:</td>
            <td>${user.car ? user.car : 'None'}</td>
          </tr>
        </table>
    `;

    const gender = card.querySelector('.gender');
    const hidden = card.querySelector('.hidden');
    const photo = card.querySelector('.photo');

    gender.onclick = function(e) {
      hidden.classList.toggle('hidden');

      if (!hidden.classList.contains('hidden')) {
        switch(user.gender.toLowerCase()){
          case 'male':
            photo.src = malePerson;
            break;
          case 'female':
            photo.src = femalePerson;
            break;
          default:
            photo.src = unknown;
        }
      } else {
        photo.src = person;
      }

    };

    return card;
  };

  for(let user of data) {
    container.appendChild(htmlConstructor(user));
  }

})();