console.clear();

const containers = [
  [997612619, 934920795, 998879231, 999926463],
  [960369681, 997828120, 999792735, 979622676],
  [999013654, 998634077, 997988323, 958769423],
  [997409523, 999301350, 940952923, 993020546]
];

function main(containers) {
  let constants = "POSSIBLE";
  // storing # of balls in container
  let a = Array.from(containers[0]).fill(0);
  let b = Array.from(containers[0]).fill(0);
  for (let j = 0; j < containers.length; j++) {
    const container = containers[j];
    for (let i = 0; i < container.length; i++) {
      a[i] += container[i];
    }
    b[j] = container.reduce((p, q) => p + q);
    // console.log(a, b);
  }
  if (JSON.stringify(a.sort()) !== JSON.stringify(b.sort())) {
    constants = "IMPOSSIBLE";
  }
  console.log(a, b, constants);
  // storing # of types in a container
}

main(containers);
