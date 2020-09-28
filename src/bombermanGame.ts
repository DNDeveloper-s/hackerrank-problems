console.log("------ --- - --- BomberMan Game --- - --- ------");

const n = 3,
  // grid = [".......", "...O...", "....O..", ".......", "OO.....", "OO....."];
  // grid = ["..OO", "..O.", "...O", "O..."];
  grid = [".......", "...O.O.", "....O..", "..O....", "OO...OO", "OO.O..."];

/**
 *
 * @param n an integer, the number of seconds to simulate
 * @param grid an array of strings that represents the grid
 */

function main(n, grid) {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;
  // console.log(n, grid);

  function formgrid(height, width, withZeros?) {
    let sets = [];
    let withZerosArr = [];
    for (let i = 0; i < height; i++) {
      sets[i] = [];
      withZerosArr[i] = [];
      for (let j = 0; j < width; j++) {
        if (withZeros) withZerosArr[i].push("O");
        else sets[i].push(j);
      }
      withZerosArr[i] = withZerosArr[i].join("");
    }
    if (withZeros) return withZerosArr;
    return sets;
  }

  function formState(sets) {
    // const withDotsGrid = formgrid(gridHeight, gridWidth, true);
    // console.log(withDotsGrid);
    const newGrid = [];
    for (let i = 0; i < gridHeight; i++) {
      newGrid[i] = [];
      for (let j = 0; j < gridWidth; j++) {
        if (sets[i].includes(j)) {
          newGrid[i].push("O");
        } else {
          newGrid[i].push(".");
        }
      }
      newGrid[i] = newGrid[i].join("");
    }

    return newGrid;
  }

  let occur = [];
  // for (let i = 1; i <= 7; i = i + 2) {
  // Loop through the grid rows
  for (let j = 0; j < grid.length; j++) {
    // Finding the bombs on each iteration
    occur.push(getOccurences(grid[j]));
  }

  function genSets(occur) {
    const sets = formgrid(gridHeight, gridWidth);
    occur.forEach((occ, ind) => {
      let row = ind;
      occ.forEach((col, ind) => {
        // eg, [0, 1], [0, 3]
        // console.log([row, col]);
        // Check if the row is already removed
        sets[row] = removeFromArr(sets[row], col);
        if (col > 0) sets[row] = removeFromArr(sets[row], col - 1);
        if (col < grid[row].length - 1)
          sets[row] = removeFromArr(sets[row], col + 1);

        // Handling the removal by the last row as well
        if (row > 0) sets[row - 1] = removeFromArr(sets[row - 1], col);
        if (row < gridHeight - 1)
          sets[row + 1] = removeFromArr(sets[row + 1], col);
      });
    });
    return sets;
  }

  function getOccurences(str: string): number[] {
    let i = 0;
    const occurances: number[] = [];
    while (i < str.length) {
      let strIndex = str.indexOf("O", i);
      if (strIndex < 0) break;
      occurances.push(strIndex);
      i = strIndex + 1;
    }
    return occurances;
  }

  if (n === 1) return grid;
  if (n % 4 === 3) {
    const firstSet = genSets(occur);
    return formState(firstSet);
  } else if (n % 4 === 1) {
    const firstSet = genSets(occur);
    const secondSet = genSets(firstSet);
    return formState(secondSet);
  } else {
    return formgrid(gridHeight, gridWidth, true);
  }
}

function removeFromArr(arr, val) {
  if (arr === undefined) return [];
  const newArr = [...arr];
  const index = newArr.findIndex((c) => c === val);
  if (index >= 0) newArr.splice(index, 1);
  return newArr;
}

console.log(main(n, grid));
