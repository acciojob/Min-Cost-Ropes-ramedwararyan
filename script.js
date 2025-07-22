function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Helper: MinHeap implementation using JavaScript array
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }

    extractMin() {
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }

    bubbleUp() {
      let index = this.heap.length - 1;
      const current = this.heap[index];

      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];

        if (parent <= current) break;

        this.heap[parentIndex] = current;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }

    bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      const current = this.heap[0];

      while (true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let left = this.heap[leftIndex];
        let right = this.heap[rightIndex];
        let swap = null;

        if (leftIndex < length && left < current) {
          swap = leftIndex;
        }

        if (rightIndex < length) {
          if (
            (swap === null && right < current) ||
            (swap !== null && right < left)
          ) {
            swap = rightIndex;
          }
        }

        if (swap === null) break;

        this.heap[index] = this.heap[swap];
        this.heap[swap] = current;
        index = swap;
      }
    }

    size() {
      return this.heap.length;
    }
  }

  // Build the min-heap with initial rope lengths
  const heap = new MinHeap();
  for (let length of arr) {
    heap.insert(length);
  }

  let totalCost = 0;

  // Combine ropes until one remains
  while (heap.size() > 1) {
    let first = heap.extractMin();
    let second = heap.extractMin();
    let cost = first + second;
    totalCost += cost;
    heap.insert(cost);
  }

  return totalCost;
}
