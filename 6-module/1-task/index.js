export default class UserTable {
  constructor(rows) {
    this.elem = this.render(rows);
  }
  render(rows) {
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
        ${rows.map((row) => {return `
        <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button>X</button></td>
        </tr>`;}).join("")}
    </tbody>`;
    table.addEventListener("click", this.onClick);
    return table;
  }

  onClick(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.closest("tr").remove();
    }
  }
}
