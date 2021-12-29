export default class UserTable {
  constructor(rows) {
    this.elem = render(rows);
  }
}
function render(rows) {
  const table = document.createElement("table");
  table.innerHTML = `
  <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        ${rows.map((row) => {
            return `<tr>
  <td>${row.name}</td>
  <td>${row.age}</td>
  <td>${row.salary}</td>
  <td>${row.city}</td>
  <td><button>X</button></td>
</tr>`;}).join("")}
    </tbody>`;
  const buttons = table.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener('click', (event) =>
      event.target.closest("tr").remove());
  }
  return table;
}
// let q = this.render();
// get elem() {
//   return this.render();
// }
