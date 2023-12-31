function countBy(x, n) {
  var multiples = [];
  for (var i = 1; i <= n; i++) {
    multiples.push(x * i);
  }
  return multiples;
}
