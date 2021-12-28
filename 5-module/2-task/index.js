function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  button.addEventListener("click", e => text.hidden = hidden = !hidden);
}
let hidden = false;