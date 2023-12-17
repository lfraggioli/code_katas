decodeMorse = function (morseCode) {
  // Your code here
  // You can use MORSE_CODE[morse]

  return morseCode
    .trim()
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((character) => MORSE_CODE[character])
        .join("")
    )
    .join(" ");
};
