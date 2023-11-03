function repeatedNumber(A) {
    let result = []
    let max = Math.max(...A);

    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] === A[j] && !result.includes(A[i])) {
                (result.push(A[i]))
            }

        }
    }
    for (let i = 1; i <= max; i++) {
        if (!A.includes(i)) {
            result.push(i)
        }
    }
    return result;
}
console.log(repeatedNumber([3, 1, 2, 3, 5, 3]))