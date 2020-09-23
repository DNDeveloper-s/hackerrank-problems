/**
 *
 * @param n Money to spend
 * @param c Cost of single chocolate
 * @param m Number of wrappers to convert it into a new chocolate
 */
function main(n: number, c: number, m: number): number {
  let chocolatesEaten = Math.floor(n / c);
  let leftWrappers = chocolatesEaten;

  while (leftWrappers >= m) {
    chocolatesEaten += Math.floor(leftWrappers / m);
    leftWrappers = (leftWrappers % m) + Math.floor(leftWrappers / m);
  }

  return chocolatesEaten;
}

console.log(main(15, 3, 2));
