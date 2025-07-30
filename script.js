class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper methods
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  // Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Add element
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Remove smallest element
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  size() {
    return this.heap.length;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

// Main mincost function
function mincost(arr) {
  const minHeap = new MinHeap();

  // Step 1: Add all elements to heap
  for (let num of arr) {
    minHeap.push(num);
  }

  let totalCost = 0;

  // Step 2: Combine ropes until one remains
  while (minHeap.size() > 1) {
    const first = minHeap.pop();
    const second = minHeap.pop();

    const cost = first + second;
    totalCost += cost;

    // Add new rope length back to heap
    minHeap.push(cost);
  }

  return totalCost;
}

// Test
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
