console.clear();

const input = "chillout";

function main(input) {
  const noWhiteSpaceInput = input.replaceAll(" ", "");
  let col = Math.ceil(Math.sqrt(noWhiteSpaceInput.length));
  let row = Math.floor(Math.sqrt(noWhiteSpaceInput.length));

  if (col * row < noWhiteSpaceInput.length) {
    row++;
  }

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
}

main(input);
