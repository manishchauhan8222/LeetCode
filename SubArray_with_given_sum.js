function subArray(N, S, A) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
       
        for (let j = i; j < A.length; j++) {
            sum += A[j];
            if (sum === S) {
                result.push(i + 1, j + 1);
                break;
            }
            if (result.length > 0) {
                break;
            }
        } 
        sum = 0;
        if (result.length > 0) {
            break;
        }
    }

    if (result.length > 0) {
        return result;
    } else {
        return [-1];
    }
}

console.log(subArray(5, 12, [1, 2, 3, 7, 5])); // Output: [2, 4]
