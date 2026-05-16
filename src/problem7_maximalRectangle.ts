const largestRectangleInHistogram= (heights: number[]): number =>  {
    let maxArea = 0;
    const n = heights.length;
    for (let i = 0; i < n; i++) {
        let h = heights[i];
        let left = i, right = i;
        while (left >= 0 && heights[left] >= h) left--;
        while (right < n && heights[right] >= h) right++;
        const width = right - left - 1;
        maxArea = Math.max(maxArea, h * width);
    }
    return maxArea;
}

function maximalRectangle(matrix: number[][]): number {
    if (matrix.length === 0) return 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) heights[j]++;
            else heights[j] = 0;
        }
        const area = largestRectangleInHistogram(heights);
        if (area > maxArea) maxArea = area;
    }
    return maxArea;
}

const mat = [
    [0,1,1,0],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,0,0]
];
console.log(maximalRectangle(mat));