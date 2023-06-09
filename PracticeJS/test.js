const nestedObjectGenerator = (input) => {
  let output = {};
  for (let i = input.length - 1; i >= 0; i--) {
    let tempOutput = {}
    if (i === input.length - 1) {
      tempOutput.name = input[i];
      tempOutput.children = null;
      output = tempOutput;
    } else {
      tempOutput.name = input[i];
      tempOutput.children = [output];
      output = tempOutput;
    }
  }
  return output;
}

console.log(nestedObjectGenerator([1, 2, 3, 4]))

// {
//   name: 1,
//   children: [
//     {
//       name: 2,
//       children: [
//         {
//           name: 3,
//           children: [
//             {
//               name: 4,
//               children: null
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }