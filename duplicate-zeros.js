// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:
// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:
// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // const zeros = arr.map((num, i) => num === 0 && i).filter(num => num);
  const numZeros = arr.reduce((numZeros, num, i) => {
    if (num === 0) {
      numZeros++;
    }

    return numZeros;
  }, 0);

  let overflow = [];
  for (
    let i = arr.length - 1, j = arr.length + numZeros - 1;
    i > -1;
    i--, j--
  ) {
    while (overflow.length < numZeros) {
      if (arr[i] === 0) {
        overflow.push(0);
        j--;
      }

      overflow.push(arr[i]);
      i--;

      if (overflow.length <= numZeros) {
        j--;
      } else {
        arr[j] = overflow.pop();
        j--;
      }
    }

    if (arr[i] === 0) {
      arr[j] = 0;
      j--;
    }

    if (j >= 0) {
      arr[j] = arr[i];
    }
  }

  return arr;
};

console.log(duplicateZeros([1, 0, 0, 2, 3, 0, 0, 4]));
