# dsa-typescript-solutions

## Problem 1 – Flood Fill

### Description

Given a 2D grid `img` representing an image, a starting pixel `(sr, sc)`, and a `newColor`.  
Change the color of the starting pixel and all adjacent (up, down, left, right) pixels that have the same original color.

### Solution Idea

Use DFS or BFS.

- Save the original color.
- Recursively (or using a queue) visit neighbors and change color if they match the original.

### Example

Input:
img = [[1,1,1],
[1,1,0],
[1,0,1]]
sr = 1, sc = 1, newColor = 2

Output:
[[2,2,2],
[2,2,0],
[2,0,1]]

---

## Problem 2 – Trapping Rain Water

### Description

Given an array of bar heights (width = 1), compute how much water can be trapped after rain.

### Solution Idea

Use two pointers.

- Keep `leftMax` and `rightMax`.
- Move the pointer with the smaller height and add the trapped water.

### Example

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

---

## Problem 3 – Climbing Stairs

### Description

Count the number of ways to reach the top of `n` stairs when you can climb 1 or 2 stairs at a time.

### Solution Idea

It's the Fibonacci sequence.  
`ways(n) = ways(n-1) + ways(n-2)` with base `ways(0)=1`, `ways(1)=1`.

### Example

n = 3 → 3 ways
n = 4 → 5 ways

---

## Problem 4 – Jump Game

### Description

Given an array where each element is the maximum jump length from that position, determine if you can reach the last index.

### Solution Idea

Greedy: keep a `maxReach` variable.  
If current index > maxReach → false.  
Otherwise update `maxReach = max(maxReach, i + arr[i])`.

### Example

[2,3,1,1,4] → true
[3,2,1,0,4] → false

---

## Problem 5 – Rod Cutting

### Description

Given a rod of length `n` and a price array `price[i]` (price for a piece of length `i`), find the maximum revenue by cutting the rod.

### Solution Idea

Dynamic Programming:  
`dp[i] = max(dp[i], price[j] + dp[i-j])` for all cuts `j`.

### Example

n = 8
price = [0,1,5,8,9,10,17,17,20]
Maximum revenue = 22

---

## Problem 6 – Largest Rectangle in Histogram

### Description

Find the largest rectangle area in a histogram (bars of width 1, given heights array).

### Solution Idea

Use a stack to keep indices of increasing heights.  
When a smaller height is found, pop and compute area.

### Example

heights = [6,2,5,4,5,1,6]
Largest area = 12

---

## Problem 7 – Maximal Rectangle in Binary Matrix

### Description

Given a binary matrix (0s and 1s), find the area of the largest rectangle containing only 1s.

### Solution Idea

Use Problem 6 solution row by row.  
Maintain a `heights` array that counts consecutive 1s per column.  
For each row, update heights and compute the largest rectangle in histogram.

### Example

matrix = [
[1,0,1,0,0],
[1,0,1,1,1],
[1,1,1,1,1],
[1,0,0,1,0]
]
Largest area = 6

---

## How to Run

1. Install Node.js and TypeScript.
2. Run a solution file:
   ```bash
   ts-node problem1.ts
   ```

Or compile to JavaScript:

tsc problem1.ts
node problem1.js
