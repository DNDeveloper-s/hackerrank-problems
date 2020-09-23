console.log("------ --- - --- Absolute Permutation --- - --- ------");

/**
 * Logic discussion
 *
 *
 */

let n = 12,
  k = 3;

/**
 *
 * @param n the upper bound of natural numbers to consider, inclusive
 * @param k the integer difference between each element and its index
 */
function main(n, k): -1 | Array<number> {
  // Here, indexing will start from 1

  let permutatedArray = [null];
  for (let i = 1; i <= n; i++) {
    // if the current iterated value is less than or equal to k
    if (i <= k) {
      if (isEmptyOrValid(k + i)) {
        permutatedArray[k + i] = i;
      }
    } else {
      if (isEmptyOrValid(i - k)) {
        permutatedArray[i - k] = i;
      } else if (isEmptyOrValid(k + i)) {
        permutatedArray[k + i] = i;
      }
    }
  }

  function isEmptyOrValid(ind) {
    if (ind === 0 || ind > n || permutatedArray[ind] !== undefined)
      return false;
    return true;
  }

  permutatedArray.splice(0, 1);
  return permutatedArray;
}

console.log(main(n, k));
