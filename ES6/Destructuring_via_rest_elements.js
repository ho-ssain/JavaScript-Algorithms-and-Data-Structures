function removeFirstTwo(list) {
  let [a, b, ...l] = list;

  return l;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
