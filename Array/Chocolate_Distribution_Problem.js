function chocolate(N, M, A) {
    if (M > N) {
        return -1;
    }
    A.sort((a, b) => a - b);
    let minDiff = A[M - 1] - A[0];

    for (let i = 1; i <= N - M; i++) {
        minDiff = Math.min(minDiff, A[i + M- 1] - A[i]);
    }

    return minDiff;
}

console.log(chocolate(8, 5, [3, 4, 1, 9, 56, 7, 9, 12]));
