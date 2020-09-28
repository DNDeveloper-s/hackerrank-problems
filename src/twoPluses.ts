console.log("------ --- - --- Two Pluses --- - --- ------");

const input = [
  "GGGGGGG",
  "BGBBBBG",
  "BGBBBBG",
  "GGGGGGG",
  "GGGGGGG",
  "BGBBBBG"
];

console.log(findSquare(input, 4, 9));
function findSquare(grid, row, col) {
  if (grid[row][col] === "B") return false;

  // Now here we will start looping through all the directions
  let counter = 1;
  let results = [1],
    indexes = [[`${row}${col}`]],
    refIndexes = [];

  while (
    row - counter >= 0 &&
    row + counter <= grid.length &&
    col - counter >= 0 &&
    col + counter <= grid[0].length
  ) {
    try {
      const condition =
        grid[row - counter][col] === "G" &&
        grid[row + counter][col] === "G" &&
        grid[row][col + counter] === "G" &&
        grid[row][col - counter] === "G";
      if (condition) {
        const indexesArr = [
          `${row - counter}${col}`,
          `${row + counter}${col}`,
          `${row}${col - counter}`,
          `${row}${col + counter}`
        ].sort();
        if (indexes[indexes.length - 1]) {
          indexes.push([...indexes[indexes.length - 1], ...indexesArr]);
        } else indexes.push([...indexesArr]);
        counter++;
        results.push(counter - 1);
        refIndexes.push(`${row}${col}`);
      } else {
        break;
      }
    } catch (e) {
      console.log(e);
      break;
    }
  }
  if (counter === 4) {
    console.log(row, col);
  }
  // if (counter === 1) return false;
  // Return by decrementing 1
  // Cause initially counter is starting from 1
  const resObj = {
    key: `${row}${col}`,
    results,
    indexes,
    arr: results,
    refIndexes
  };
  // console.log(resObj);
  return resObj;
}

function sortArrayWithRefArr(arr, refArr) {
  const thisArr = [...arr];
  const ref = [...refArr];
  for (let i = 0; i < thisArr.length; i++) {
    for (let j = i + 1; j < thisArr.length; j++) {
      if (thisArr[i] > thisArr[j]) {
        let temp = thisArr[i];
        thisArr[i] = thisArr[j];
        thisArr[j] = temp;

        let temp1 = ref[i];
        ref[i] = ref[j];
        ref[j] = temp1;
      }
    }
  }
  return { arr: thisArr, refArr: ref };
}

function someMatchedInArr(arr, refArr) {
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (j < refArr.length) {
      if (+arr[i] === +refArr[j]) return true;
      j++;
    }
  }
  return false;
}

function main(grid) {
  const squares = [];
  const counts = [];
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      let sqrs = findSquare(grid, i, j);
      if (sqrs) {
        squares.push(...sqrs.indexes);
        counts.push(...sqrs.arr);
      }
    }
  }

  console.log(squares, counts);

  const sortedRes = sortArrayWithRefArr(counts, squares);
  // console.log("Sorted Result - ", sortedRes);

  const results = [];

  for (let i = sortedRes.arr.length - 1; i > 0; i--) {
    for (let j = sortedRes.arr.length - 2; j >= 0; j--) {
      const isMatched = someMatchedInArr(
        sortedRes.refArr[i].sort(),
        sortedRes.refArr[j].sort()
      );
      if (!isMatched) {
        results.push(sortedRes.refArr[i].length * sortedRes.refArr[j].length);
      }
      if (sortedRes.refArr[i].length * sortedRes.refArr[j].length === 169) {
        // console.log(sortedRes.refArr[i], sortedRes.refArr[j]);
      }
    }
  }
  console.log(results, counts);
  const res = results.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  if (results.length > 0) return res[res.length - 1];

  if (counts.length > 0) {
    return counts[counts.length - 1] * 4 + 1;
  }
  return 1;
}

// console.log(findSquare(input, 3, 5));
console.log("Main input - ", main(input));
