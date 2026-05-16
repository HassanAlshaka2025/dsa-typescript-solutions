"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const floodFill = (image, sr, sc, newColor) => {
    if (!image || image.length === 0 || !image[0]) {
        return image;
    }
    const rows = image.length;
    const cols = image[0].length;
    if (sr < 0 || sr >= rows || sc < 0 || sc >= cols) {
        return image;
    }
    const originalColor = image[sr][sc];
    if (originalColor === newColor) {
        return image;
    }
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }
        if (image[r][c] !== originalColor) {
            return;
        }
        image[r][c] = newColor;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    dfs(sr, sc);
    return image;
};
const image = [
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
];
console.log(floodFill(image, 1, 2, 2));
