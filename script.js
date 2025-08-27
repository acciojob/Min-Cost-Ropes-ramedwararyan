function mincost(arr) { 
  if (arr.length <= 1) return 0;

  let cost = 0;

  while (arr.length > 1) {
    // sort ascending
    arr.sort((a, b) => a - b);

    // take two smallest
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // push back the new rope
    arr.push(sum);
  }

  return cost;
}

module.exports = mincost;
