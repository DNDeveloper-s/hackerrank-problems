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

// function oldMain(input) {
//   const start = 0;
//   const end = input.length - 1;
//   const strArr = input.split("");
//   let breakIt = false;
//   // let brokeInd;
//   let threshold = { indexFound: start, indexToSwap: null };
//   for (let i = end; i > threshold.indexFound; i--) {
//     const holder = strArr[i];
//     breakIt = false;
//     for (let j = i - 1; j >= threshold.indexFound; j--) {
//       const interVal = strArr[j];
//       if (holder > interVal) {
//         // strArr[i] = strArr[j];
//         // strArr[j] = holder;
//         breakIt = true;
//         let toSwap = i;
//         // and checking if the threshold is equals to old one
//         // then we will decide by comparing those two
//         if (threshold.indexFound === j) {
//           if (input[threshold.indexToSwap] < input[toSwap]) {
//             toSwap = threshold.indexToSwap;
//           }
//         }
//         threshold = {
//           indexFound: Math.max(j, threshold.indexFound),
//           indexToSwap: toSwap
//         };
//         // brokeInd = j;
//       }
//       if (breakIt) break;
//     }
//   }
//   const temp = strArr[threshold.indexToSwap];
//   strArr[threshold.indexToSwap] = strArr[threshold.indexFound];
//   strArr[threshold.indexFound] = temp;
//   let brokeInd = threshold.indexFound;
//   // console.log(strArr.join(""), threshold);
//   if (!breakIt) return "no answer";
//   if (brokeInd + 1 === end) return strArr.join("");
//   breakIt = false;
//   for (let i = end; i > brokeInd; i--) {
//     const holder = strArr[i];
//     let foundInd = undefined;
//     for (let j = i - 1; j > brokeInd; j--) {
//       const interVal = strArr[j];
//       if (holder < interVal) {
//         foundInd = j;
//       }
//     }
//     if (foundInd !== undefined) {
//       strArr[i] = strArr[foundInd];
//       strArr[foundInd] = holder;
//     }
//     if (breakIt) break;
//   }
//   return strArr.join("");
// }
