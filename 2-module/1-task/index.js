function sumSalary(obj) {
  let s = 0;
  for (key in obj) {
    if (typeof obj[key] == "number" && isFinite(obj[key])) {
      s = s + obj[key];
    }
  }
  return s;
}