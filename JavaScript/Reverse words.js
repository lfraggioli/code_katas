//? Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // Go for it
  const words = str.split(" ");
  const revWords = words.map((w) => {
    return w.split("").reverse().join("");
  });

  const revStr = revWords.join(" ");

  return revStr;
}
