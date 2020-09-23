// const G = ["123412", "561212", "123634", "781288"];

// const P = ["12", "34"];

// /**
//  *
//  * @param G the grid to search, an array of strings
//  * @param P the pattern to search for, an array of strings
//  */
// function main(G: Array<string>, P: Array<string>): "YES" | "NO" {
//   let doesExist = false;
//   let patternInd = 0;
//   let strInd: number;
//   for (let i = 0; i < G.length; i++) {
//     if (
//       G[i].includes(P[patternInd]) &&
//       // Checking the string index
//       (strInd === undefined || strInd === G[i].indexOf(P[patternInd]))
//     ) {
//       doesExist = true;

//       // Setting the stringIndex
//       strInd = G[i].indexOf(P[patternInd]);

//       // Increasing patternInd if everything goes well in condition
//       if (patternInd < P.length - 1) {
//         patternInd++;
//       } else if (patternInd === P.length - 1) {
//         // If we have reached to the last in patternInd then break the loop
//         // Cause here we are truly confident that we have found the pattern in the grid
//         break;
//       }
//     } else if (
//       patternInd > 0 &&
//       !G[i].includes(P[patternInd]) &&
//       strInd !== G[i].indexOf(P[patternInd])
//     ) {
//       doesExist = false;
//       patternInd = 0;
//       strInd = undefined;
//     }
//   }

//   // Defining the result here
//   let result: "YES" | "NO" = doesExist ? "YES" : "NO";
//   return result;
// }

// function getIntersectOf(refArr: Array<number>, arr: Array<number>): number[] {
//   const resArr: number[] = [];
//   arr.forEach((item: number) => {
//     if (refArr.includes(item)) resArr.push(item);
//   });
//   return resArr;
// }

// function getIndexesOf(refStr: string, str: string) {
//   let indexesArr = [];
//   let i = 0;
//   while (i <= refStr.length - str.length) {
//     let indexOfStr = refStr.indexOf(str, i);
//     indexesArr.push(indexOfStr);
//     i = indexOfStr + 1;
//   }
//   return indexesArr;
// }

// console.log(getIndexesOf("12345612366763612334123", "12"));

// console.log(main(G, P));
