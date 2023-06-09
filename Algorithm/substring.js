const substring1 = (input, output) => {
  for (let i in input) {
    let previous = i == 0 ? 0 : i - 1;
    let tempString = input[previous] + input[i];
    if (tempString === output) {
      return i - 1;
    }
  }
};

const substring2 = (input, output) => {
  for (let i in input) {
    let previous2 = i == 0 ? 0 : i - 2;
    let previous1 = i == 0 ? 0 : i - 1;
    let tempString = input[previous2] + input[previous1] + input[i];
    if (tempString === output) {
      return i - 2;
    }
  }
};

console.log(substring1("konvergeai", "ai"));
console.log(substring2("simplecrm", "crm"));
