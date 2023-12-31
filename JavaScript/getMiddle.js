function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    // si la longitud es par
    return s[middle - 1] + s[middle];
  } else {
    // si la longitud es impar
    return s[middle];
  }
}
