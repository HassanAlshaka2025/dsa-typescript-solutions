"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function largestRectangleArea(heights) {
    let maxArea = 0;
    const n = heights.length;
    for (let i = 0; i < n; i++) {
        let height = heights[i];
        let left = i, right = i;
        while (left >= 0 && heights[left] >= height)
            left--;
        while (right < n && heights[right] >= height)
            right++;
        const width = right - left - 1;
        const area = height * width;
        if (area > maxArea)
            maxArea = area;
    }
    return maxArea;
}
const heights = [6, 2, 5, 4, 5, 1, 6];
console.log(largestRectangleArea(heights));
