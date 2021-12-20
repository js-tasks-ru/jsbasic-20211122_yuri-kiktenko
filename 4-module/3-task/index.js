function highlight(table) {
  const rows = table.querySelectorAll("tbody tr");
  for (let row of rows) {
    if (row.cells[3].dataset.available == "true") {
      row.classList.add("available");
    }
    if (row.cells[3].dataset.available == "false") {
      row.classList.add("unavailable");
    }
    if (row.cells[3].dataset.available == undefined) {
      row.hidden = "true";
    }
    if (row.cells[1].textContent < 18) {
      row.style = "text-decoration: line-through";
    }
    if (row.cells[2].textContent == "m") {
      row.classList.add("male");
    }
    if (row.cells[2].textContent == "f") {
      row.classList.add("female");
    }
  }
}
