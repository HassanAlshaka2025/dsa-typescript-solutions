function rodCutting(price: number[], n: number): number {

    const dp: number[] = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        let maxVal = -Infinity;
        for (let j = 1; j <= i; j++) {
            maxVal = Math.max(maxVal, price[j] + dp[i - j]);
        }
        dp[i] = maxVal;
    }
    return dp[n];
}

const price = [0, 1, 5, 8, 9]; 
const n = 4;
console.log(rodCutting(price, n));