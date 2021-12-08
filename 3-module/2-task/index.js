function filterRange(arr, a, b) {
  let names = [];
  for (key of arr) {
    if (key >= a && key <= b) {
      names.push(key);
    }
  }
  return names;
}