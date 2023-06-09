
/* dataset intitialised */
const dataSet1 = [
  { a: 3 },
  { b: 4 },
  { c: 5 },
  { d: 6 },
  { e: 7 },
  { f: 0 },
  { g: "sagar" },
  { h: {} },
  { i: null },
  { j: undefined },
  { k: true },
  {},
  "data",
  7,
  null,
  undefined,
];

const result = dataSet1.reduce((previous, current) => {
  if (typeof current === "object" && current !== null) {
    const objectKeys = Object.keys(current);
    if (objectKeys.length > 0) {
      const key = objectKeys[0];
      const value = Object.values(current)[0];
      if (typeof value === "number") {
        previous.push({ [key]: value > 3 ? value * 10 : value });
      }
    }
  }
  return previous;
}, []);

console.log("Result : ", result);
