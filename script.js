function mincost(arr) {
  if (arr.length <= 1) return 0; // No cost if 0 or 1 rope

  // Create a min-heap by sorting the array
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    // Take the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let newRope = first + second;
    cost += newRope;

    // Insert the new rope back into sorted order
    arr.push(newRope);
    arr.sort((a, b) => a - b); // Keep it sorted for the next smallest pick
  }

  return cost;
}

