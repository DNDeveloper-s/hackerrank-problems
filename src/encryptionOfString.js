console.clear();

const input = "chillout";

function main(input) {
  // Get the row and column of the grid
  const noWhiteSpaceInput = input.replaceAll(" ", "");
  const col = Math.ceil(Math.sqrt(noWhiteSpaceInput.length));
  const row = Math.floor(Math.sqrt(noWhiteSpaceInput.length));

  console.log(row, col);
  let newStringMatrix = [];
  let counter = 0;
  let str = "";
  for (let i = 0; i < row; i++) {
    newStringMatrix[i] = [];
    for (let j = 0; j < col; j++) {
      newStringMatrix[i][j] = noWhiteSpaceInput.split("")[counter] || "";
      counter++;
    }
  }

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      str += newStringMatrix[i][j];
    }
    str += " ";
  }
  return str;
  // And then form the string in the column with separated spaces
}

main(input);
