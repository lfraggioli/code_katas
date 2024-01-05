function sortArray(array) {
  // Extraer los números impares y ordenarlos
  let oddNumbers = array.filter((n) => n % 2).sort((a, b) => a - b);

  // Reemplazar los números impares en el array original con los números ordenados
  return array.map((n) => (n % 2 ? oddNumbers.shift() : n));
}
