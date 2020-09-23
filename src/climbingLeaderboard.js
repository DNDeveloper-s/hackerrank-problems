console.clear();
// const input = [140, 80, 80, 75, 60, 50, 50, 30, 25, 25, 10, 5];
const input = [100, 100, 50, 40, 40, 20, 10];
const alice = [5, 25, 50, 120];

function formRankings(input) {
  const rankings = [];
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      rankings[i] = 1;
      continue;
    }
    if (input[i] !== input[i - 1]) rankings[i] = rankings[i - 1] + 1;
    else rankings[i] = rankings[i - 1];
  }
  return rankings;
}

function binarySearch(input, num, rankings) {
  let k = 0,
    l = input.length - 1;
  // Checking the boundaries first
  if (num >= input[k]) return rankings[0];
  if (num === input[l]) return rankings[input.length - 1];
  if (num < input[l]) return rankings[input.length - 1] + 1;

  // Now starting the actual binary search algo
  let index;
  while (k !== l - 1) {
    let m = Math.floor((k + l) / 2);
    if (input[m] === num) {
      index = m;
      break;
    }
    if (input[m] > num) {
      k = m;
    } else {
      l = m;
    }
  }
  if (k !== l - 1) return rankings[index];
  if (input[k] > num) index = k + 1;
  return rankings[index];
}

function main(scores, alice) {
  const rankings = formRankings(scores);
  console.log(rankings);
  const leaderboard = [];
  for (let a of alice) {
    leaderboard.push(binarySearch(scores, a, rankings));
  }
  console.log(leaderboard);
}

main(input, alice);

// console.log(binarySearch(input, number));
