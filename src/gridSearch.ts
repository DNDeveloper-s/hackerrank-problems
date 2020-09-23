const refArr = [
  "34889246430321978567",
  "58957542800420926643",
  "35502505614464308821",
  "14858224623252492823",
  "72509980920257761017",
  "22842014894387119401",
  "01112950562348692493",
  "16417403478999610594",
  "79426411112116726706",
  "65175742483779283052",
  "89078730337964397201",
  "13765228547239925167",
  "26113704444636815161",
  "25993216162800952044",
  "88796416233981756034",
  "14416627212117283516",
  "15248825304941012863",
  "88460496662793369385",
  "59727291023618867708",
  "19755940017808628326"
];

const patternArr = ["1641", "7942", "6517", "8907", "1376", "2691", "2599"];

/**
 *
 * @param G the grid to search, an array of strings
 * @param P the pattern to search for, an array of strings
 */
function main(G: Array<string>, P: Array<string>): "YES" | "NO" {
  let doesExist = false;

  for (let i = 0; i <= G.length - P.length; i++) {
    let k = 0;
    let initIndex = 0;
    let patternInd = 0;
    doesExist = false;
    while (k <= G[0].length - P[0].length) {
      let notExistInTheLine = false;
      const isExist = G[i].indexOf(P[patternInd], initIndex);
      if (isExist >= 0) {
        let innerInd = isExist;
        for (let j = i + 1; j < i + P.length; j++) {
          patternInd++;
          let index = G[j].indexOf(P[patternInd], innerInd);
          if (index < 0) {
            initIndex = 0;
            patternInd = 0;
            notExistInTheLine = true;
            doesExist = false;
            break;
          } else if (index !== isExist) {
            doesExist = false;
            patternInd = 0;
          } else if (index === isExist) {
            doesExist = true;
          }
        }
      }
      if (notExistInTheLine) {
        break;
      }
      initIndex = isExist + 1;
      k++;
    }
    if (doesExist) {
      break;
    }
  }

  // Defining the result here
  let result: "YES" | "NO" = doesExist ? "YES" : "NO";
  return result;
}

console.log(main(refArr, patternArr));
