const nestedObjectGenerator = (input) => {
  if (input.length === 0) return null;
  let output = {};
  const len = input.length - 1;
  for (let i = len; i >= 0; i--) {
    let tempOutput = {};
    tempOutput.name = input[i];
    tempOutput.children = i === len ? null : [output];
    output = tempOutput;
  }
  return output;
};

// console.log(JSON.stringify(nestedObjectGenerator([1, 2, 3, 4, 5]), null, 2));

function createNestedStructure(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const rootNode = { name: arr[0], children: [] };
  let currentNode = rootNode;

  for (let i = 1; i < arr.length; i++) {
    const newNode = { name: arr[i], children: [] };
    currentNode.children.push(newNode);
    currentNode = newNode;
  }

  return rootNode;
}

const inputArray = [1, 2, 3, 4, 5];
const outputObject = createNestedStructure(inputArray);

console.log(JSON.stringify(outputObject, null, 2));
