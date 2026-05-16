const trapRainWater = (arr: number[]): number =>{
    let left = 0;
    let right = arr.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let totalWater = 0;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            if (arr[left] >= maxLeft) {
                maxLeft = arr[left]; 
            } else {
                totalWater += maxLeft - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= maxRight) {
                maxRight = arr[right];
            } else {
                totalWater += maxRight - arr[right];
            }
            right--;
        }
    }

    return totalWater;
}

const heights = [3, 0,  1, 0, 4, 0, 2];
console.log(trapRainWater(heights)); 