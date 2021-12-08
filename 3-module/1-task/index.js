function namify(users) {
  let names = [];
  for (key of users) {
    names.push(key.name);
  }
  return names;
}
