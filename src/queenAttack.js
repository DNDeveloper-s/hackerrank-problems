console.clear();

let n = 5,
  k = 3,
  r_q = 4,
  c_q = 3,
  obstacles = [
    [5, 5],
    [4, 2],
    [2, 3]
  ];

function main(n, k, r_q, c_q, obstacles) {
  const distances = {
    up: n - r_q,
    down: r_q - 1,
    left: c_q - 1,
    right: n - c_q,
    up_left: Math.min(n - r_q, c_q - 1),
    up_right: Math.min(n - r_q, n - c_q),
    down_right: Math.min(r_q - 1, n - c_q),
    down_left: Math.min(r_q - 1, c_q - 1)
  };

  for (const [r, c] of obstacles) {
    // up and down
    if (c === c_q) {
      const distancesVertical = Math.abs(r_q - r);
      if (r > r_q) {
        // Up
        distances.up = Math.min(distances.up, distancesVertical - 1);
      } else if (r < r_q) {
        // Down
        distances.down = Math.min(distances.down, distancesVertical - 1);
      }
    }

    // left and right
    if (r === r_q) {
      const distancesHorizontal = Math.abs(c_q - c);
      if (c > c_q) {
        // Right
        distances.right = Math.min(distances.right, distancesHorizontal - 1);
      } else if (c < c_q) {
        // Left
        distances.left = Math.min(distances.left, distancesHorizontal - 1);
      }
    }

    // topLeft to bottomRight
    if (r - r_q === -(c - c_q)) {
      const distancesDiagonal = Math.abs(r - r_q);
      if (r > r_q) {
        distances.up_left = Math.min(distances.up_left, distancesDiagonal - 1);
      } else {
        distances.down_right = Math.min(
          distances.down_right,
          distancesDiagonal - 1
        );
      }
    }

    // bottomLeft to topRight
    if (r - r_q === c - c_q) {
      const distancesDiagonal = Math.abs(r - r_q);
      if (r > r_q) {
        distances.up_right = Math.min(
          distances.up_right,
          distancesDiagonal - 1
        );
      } else {
        distances.down_left = Math.min(
          distances.down_left,
          distancesDiagonal - 1
        );
      }
    }
  }
  return Object.values(distances).reduce((p, q) => p + q);
}

console.log(main(n, k, r_q, c_q, obstacles));
