function subArray(inputArray) {
    let sum = 0;
    let maxSum = inputArray[0];
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
        maxSum = Math.max(maxSum, sum)
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}
console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

