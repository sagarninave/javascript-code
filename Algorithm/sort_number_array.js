var tempNumArray = [...new Set(Array.from({ length: 5 }, (_, i) => Math.ceil(Math.random() * 100)))];

const sortNumberArray = (myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    let outer = myArray[i];
    for (let j = i+1; j < myArray.length; j++) {
      inner = myArray[j];
      if (outer > inner) {
        myArray[i] = inner;
        myArray[j] = outer;
        inner = myArray[j];
        outer = myArray[i];
      }
    }
  }
  console.log("Sorted", tempNumArray)
}
console.log("Unsorted", tempNumArray)
sortNumberArray(tempNumArray);