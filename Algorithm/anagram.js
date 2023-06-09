const anagram = (string1, string2) => {

  let string1_obj = {};
  
  for (let i of string1) {
    string1_obj[i] = (string1_obj[i] || 0) + 1;
  }

  for (let j of string2) {
    if(!string1_obj[j]){
      return false;
    }
    string1_obj[j] -= 1;  
  }

  return true;
}

console.log(anagram("hello", "hello"));