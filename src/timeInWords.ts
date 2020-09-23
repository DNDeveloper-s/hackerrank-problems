console.clear();

// At minutes = 0; represent as 'o' clock'
// At minutes >= 1 && <= 30; represent as 'past'
// At minutes > 30;represent as 'to'

function isSpecial(num: number): boolean | string {
  const specialNos = {
    15: "quarter",
    30: "half",
    45: "quarter"
  };
  if (!specialNos[num]) return false;
  return specialNos[num];
}

function nextHour(val: number): number {
  if (val === 12) return 1;
  if (val > 12) return val - 11;
  return val + 1;
}

function getPluralS(val: number): string {
  if (val > 1) return "s";
  return "";
}

function convToString(num?: number): string {
  const dg: string[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const tn: string[] = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  // Watching here for the unit digit of the number
  const unit = Math.floor(num / 10);

  if (unit === 0) return dg[num];

  if (unit === 1) return tn[num % 10];

  if (unit === 2) {
    let lastDigit = num % 10;
    if (lastDigit === 0) return "twenty";
    return "twenty " + dg[lastDigit];
  }

  if (unit > 2) return convToString(60 - num);
}

function main(h: number, m: number) {
  const str = convToString(41);

  // Get hour value
  const hourStr = m > 30 ? convToString(nextHour(h)) : convToString(h);

  // three cases
  // Case 1. if minutes === 0
  if (m === 0) {
    return hourStr + " o' clock";
  }

  // Case 2. if minutes >= 1 and minutes <= 30
  if (m >= 1 && m <= 30) {
    const minIsSpecial = isSpecial(m);
    const minStr = minIsSpecial
      ? minIsSpecial
      : convToString(m) + " minute" + getPluralS(m);
    return minStr + " past " + hourStr;
  }

  // Case 3. if minutes > 30
  if (m > 30) {
    const minIsSpecial = isSpecial(m);
    const minStr = minIsSpecial
      ? minIsSpecial
      : convToString(m) + " minute" + getPluralS(60 - m);
    return minStr + " to " + hourStr;
  }

  return str;
}

console.log(main(5, 58));

console.log();
