const removeCharacterFromString = (string, index) => {
  console.log("------------------------------------------------------------------------------");
  if (index > string.length) {
    return console.log("Index number should be less than string length")
  } else if (index < 0) {
    return console.log("Index number should be greater than 0")
  }
  let data = string.split("");
  delete data[index];
  console.log("Input String :", string)
  console.log("Output String :", data.join(""))
}

// Write a JavaScript program to remove a character at the specified position of a given string and return the new string
removeCharacterFromString("sagar.ninave@konverge.ai", 9);