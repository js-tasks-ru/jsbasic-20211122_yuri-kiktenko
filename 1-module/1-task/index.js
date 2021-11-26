function factorial(n) {
  let y = 1;
  while (n > 1) {
    y = y * n--;
  }
  return y;
}
