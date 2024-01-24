function duplicateEncode(word) {
  let strNew = "";
  let cadena = word.toLowerCase();

  for (let i = 0; i < cadena.length; i++) {
    if (cadena.indexOf(cadena[i]) !== cadena.lastIndexOf(cadena[i])) {
      strNew += ")";
    } else {
      strNew += "(";
    }
  }
  return strNew;
}
