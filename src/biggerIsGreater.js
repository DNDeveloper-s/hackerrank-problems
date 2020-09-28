console.clear();

// const input = "dacb";
// const input = "dcbb";
// const input = "abdc";
// const input = "abcd";
// const input = "fedcbabcd";
// console.log("Expected output - hcdk");
//            "bvulomthrfugqfbaknxginokekugbem"
//            "bvulomthrfugqfbbaeegikonkmugxnk"
// const input = "bvulomthrfugqfbaknxginokekuemgb";
const input = "dcba";

function main(input) {
  const start = 0;
  const end = input.length - 1;
  const strArr = input.split("");

  // some utils var
  let foundInd;
  for (let i = end; i > start; i--) {
    if (strArr[i] > strArr[i - 1]) {
      foundInd = i - 1;
      break;
    }
  }
  console.log(foundInd);
  if (foundInd === undefined) {
    return "no answer";
  }

  // Now its time to sort the remaining part
  let nextGreater;
  const otherPartArr = [...strArr].splice(0, foundInd + 1);
  const partialArr = [...strArr].splice(foundInd + 1);
  console.log(otherPartArr, partialArr);
  const sortedPartialArr = partialArr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  const newStrArr = [...otherPartArr, ...sortedPartialArr];

  for (let i = foundInd + 1; i < newStrArr.length; i++) {
    if (newStrArr[i] > newStrArr[foundInd]) {
      nextGreater = i;
      break;
    }
  }

  console.log(nextGreater);

  const temp = newStrArr[foundInd];
  newStrArr[foundInd] = newStrArr[nextGreater];
  newStrArr[nextGreater] = temp;

  return newStrArr.join("");
}

console.log(main(input));
