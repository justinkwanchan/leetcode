/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the
 * value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 */

const reverseInteger = num => {
  const length = Math.floor(Math.log10(Math.abs(num))) + 1;

  let reverseNum = 0;

  for (let i = 0; i < length; i++) {
    if (num >= 0) {
      reverseNum +=
        Math.floor((num % 10 ** (i + 1)) / 10 ** i) * 10 ** (length - i - 1);
    } else {
      reverseNum +=
        Math.ceil((num % 10 ** (i + 1)) / 10 ** i) * 10 ** (length - i - 1);
    }
  }

  if (reverseNum < -(2 ** 31) || reverseNum > 2 ** 31 - 1) {
    return 0;
  }

  return reverseNum;
};

console.log(reverseInteger(-3));
console.log(reverseInteger(34));
console.log(reverseInteger(0));
console.log(reverseInteger(-1234));
