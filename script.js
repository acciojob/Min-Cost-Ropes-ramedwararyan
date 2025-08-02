function mincost(arr) {
  // Edge case: if only one rope, no cost
  if (arr.length <= 1) return 0;

  // Create a min-heap using sort for simplicity (though we update manually)
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  // Combine ropes until only one remains
  while (arr.length > 1) {
    // Take two smallest ropes
    const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;

    // Insert the combined rope back into the correct position (keep array sorted)
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (cost < arr[i]) {
        arr.splice(i, 0, cost);
        inserted = true;
        break;
      }
    }
    if (!inserted) arr.push(cost);
  }

  return totalCost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6]));   // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
