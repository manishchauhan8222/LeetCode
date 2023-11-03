function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
  
    if (i <= 0) {
        return nums.reverse();
    }
    else {
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i],nums[j]]=[nums[j],nums[i]]
    }
  return   nums.splice(i+1, n-i-1, ...nums.slice(i+1).reverse());
}
console.log(nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1]))
console.log(nextPermutation([1,3,2]))


