function createHtmlList(item) {
  return `<li>${item}</li>`;
}

export default function createList(itemsList) {
  let menu = '<ul>';

  for (let item of itemsList) {
    menu += createHtmlList(item);
  }

  menu += '</ul>';

  return menu;
}
