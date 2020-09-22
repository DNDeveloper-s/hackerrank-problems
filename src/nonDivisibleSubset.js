const input = [
  278,
  576,
  496,
  727,
  410,
  124,
  338,
  149,
  209,
  702,
  282,
  718,
  771,
  575,
  436
];
// const input = [19, 10, 12, 10, 24, 25, 22];

console.clear();

function createNonDivisibleSubset(k, s) {
  const freq = {};
  // Getting the frequency array
  for (let n of s) {
    if (freq[n % k] !== undefined) {
      freq[n % k] += 1;
    } else {
      freq[n % k] = 1;
    }
  }
  console.log(freq);
  let result = freq[0] ? 1 : 0;
  for (let c = 1; c <= k / 2; c++) {
    if (c !== k - c) {
      console.log(c);
      result +=
        Math.max(freq[c] ? freq[c] : 0, freq[k - c] ? freq[k - c] : 0) || 0;
    } else {
      result += 1;
    }
  }
  console.log(result);
}

createNonDivisibleSubset(7, input);
