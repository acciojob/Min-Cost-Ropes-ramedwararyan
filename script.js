function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Create a min-heap by sorting initially
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    // Insert the new rope length into the sorted array
    arr.push(cost);
    arr.sort((a, b) => a - b); // maintain min-heap property using sort
  }

  return totalCost;
}

