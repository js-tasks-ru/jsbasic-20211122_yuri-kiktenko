function makeFriendsList(friends) {
  let d = document.createElement("ul");
  d.innerHTML = friends.map((item) => `<li>${item.firstName} ${item.lastName}</li>`).join("");
  return d;
}
