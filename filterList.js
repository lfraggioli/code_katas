function filter_list(l) {
  let arr = [];

  // Return a new array with the strings filtered out

  //   for (let i = 0; i < l.length; i++) {
  //     if (typeof l[i] === "number") {
  //       arr.push(l[i]);
  //     }
  //   }

  //   return arr;

  return l.filter((element) => typeof element === "number");
}

console.log(filter_list([1, 2, "r", 5, "hola"]));

