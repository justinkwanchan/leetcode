const removeDuplicates = nums => {
  let repeatCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      repeatCount++;

      if (i === nums.length - 1) {
        nums.splice(i - repeatCount, repeatCount);
      }
    } else if (repeatCount > 0) {
      nums.splice(i - repeatCount, repeatCount);
      i = i - repeatCount;
      repeatCount = 0;
    }
  }

  return nums.length;
};

const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4];

removeDuplicates(nums1);
removeDuplicates(nums2);

console.log(`${nums1.length}, nums = [${nums1}]`);
console.log(`${nums2.length}, nums = [${nums2}]`);

/* Sample input code */

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
