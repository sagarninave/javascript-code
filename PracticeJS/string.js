console.log(`\n
 /* 
  * charAt - character at the place
  * if presents then returns a character 
  * if not then returns empty string
  */`);
const charAtString = "Hello World";
console.log("charAt :", charAtString.charAt(0));
console.log("charAt :", charAtString.charAt(2));
console.log("charAt :", charAtString.charAt(100));

console.log(`\n
/* 
 * charCodeAt - return character code of the string
 * if not then returns empty string
 */`);
const charCodeAtString = "Hello World";
console.log("charCodeAt :", charCodeAtString.charCodeAt(0));
console.log("charCodeAt :", charCodeAtString.charCodeAt(2));
console.log("charCodeAt :", charCodeAtString.charAt(100));

console.log(`\n
 /* 
  * concat - Concatenate the string
  */`);
const concatString1 = "Hello";
const concatString2 = "World";
console.log("concat :", concatString1.concat(concatString2));
console.log("concat :", concatString1.concat(" ").concat(concatString2));

console.log(`\n
 /* 
  * It returns character from the code
  * It static method of string
  * No string return in case of invalid code
  */`);
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(66));
console.log(String.fromCharCode(67));
console.log(String.fromCharCode(68));
console.log(String.fromCharCode(69));

console.log(`\n
 /* 
  * startsWith - check string available at start
  * returns true or false base on input
  * returns true when it does not provide input string
  */`);
const startsWithString = "Hello, I am Sagar";
console.log("startsWith :", startsWithString.startsWith("Hello"));
console.log("startsWith :", startsWithString.startsWith("sagar"));
console.log("startsWith :", startsWithString.startsWith(""));

console.log(`\n
 /* 
  * endsWith - check ending string
  * returns true or false base on input
  */`);
const endsWithString = "Hello, I am Sagar";
console.log("endsWith :", endsWithString.endsWith("Sagar"));
console.log("endsWith :", endsWithString.endsWith("sagar"));

console.log(`\n
 /* 
  * substr - extracts parts of a string
  * first parameter indicates position and second parameter as limit of words
  * if nothing is returning then its type will be string
  */`);
const substrString = "Hello, I am Sagar";
console.log("substr :", substrString.substr(0, 2));
console.log("substr :", substrString.substr(1, 4));
console.log("substr :", substrString.substr(2, 8));
console.log("substr type :", typeof substrString.substr(-1, 0));
console.log("substr type :", typeof substrString.substr(20, 22));

console.log(`\n
 /* 
  * substring - extracts parts of a string from first index to second
  * Parameters takes as start and end position or index 
  * value of second parameter is exclusive 
  * if nothing is returning then its type will be string 
  */`);
const substringString = "Hello, I am Sagar";
console.log("substring :", substringString.substring(0, 2));
console.log("substring :", substringString.substring(1, 4));
console.log("substring :", substringString.substring(2, 8));
console.log("substring type :", typeof substringString.substring(-1, 0));
console.log("substring type :", typeof substringString.substring(20, 22)); // console.log("substr :", substrString.substr("sagar"));

console.log(`\n
 /* 
  * indexOf - get the index of the substring presented
  * It is case sensitive and match with the case 
  * It take two argument substring and position to start from
  * if no value is provided return 0
  * in case of no match return -1 
  */`);
const indexOfString = "Hello, I am Sagar, Hello";
console.log("indexOf : ", indexOfString.indexOf("hello"));
console.log("indexOf : ", indexOfString.indexOf("Hello"));
console.log("indexOf : ", indexOfString.indexOf("Sagar"));
console.log("indexOf : ", indexOfString.indexOf("Sagar", 10));
console.log("indexOf : ", indexOfString.indexOf("Sagar", 18));
console.log("indexOf : ", indexOfString.indexOf(""));

console.log(`\n
 /* 
  * lastIndexOf - get last occurrence pf specified element
  * It is case sensitive and match with the case 
  * It take two argument substring and position to start from
  * if no value is provided return length of the string
  * in case of no match return -1 
  */`);
const lastIndexOfString = "Hello, I am Sagar, Hello";
console.log("lastIndexOf : ", lastIndexOfString.lastIndexOf("hello"));
console.log("lastIndexOf : ", lastIndexOfString.lastIndexOf("Hello"));
console.log("lastIndexOf : ", lastIndexOfString.lastIndexOf("Sagar"));
console.log("lastIndexOf : ", lastIndexOfString.lastIndexOf("Sagar", 10));
console.log("lastIndexOf : ", lastIndexOfString.lastIndexOf("Sagar", 18));
console.log("lastIndexOf : ", lastIndexOfString.lastIndexOf(""));

console.log(`\n
 /* 
  * search - get the index of the substring presented
  * similar to indexOf but it takes regex
  * It is case sensitive in case of plain text
  * It is not case sensitive in case of regex pattern 
  * if no value is provided return 0
  * in case of no match return -1 
  */`);
const searchString = "Hello, I am Sagar, Hello";
console.log("search : ", searchString.search("hello"));
console.log("search : ", searchString.search(/hello/i));
console.log("search : ", searchString.search("Hello"));
console.log("search : ", searchString.search("Sagar"));
console.log("search : ", searchString.search(""));

console.log(`\n
 /* 
  * match - it matches a substring using regex and return array of string
  */`);
const matchString = "Hello, I am Sagar, Hello";
console.log(matchString.match(/Sa/g));
console.log(matchString.match(/He/g));
console.log(matchString.match(/he/g));
console.log(matchString.match(/he/i));
console.log(matchString.match(/sa/i));

console.log(`\n
 /* 
  * includes - return true or false in case of substring present
  */`);
const includesString = "Hello, I am Sagar, Hello";
console.log("includes :", includesString.includes("Sagar"));
console.log("includes :", includesString.includes("sagar"));
console.log("includes :", includesString.includes("agar"));

console.log(`\n
 /* 
  * toLowerCase - return a value in an all lower case
  * toUpperCase - return a value in an all upper case
  * does not change the original string
  */`);
const caseSting = "Hello, I am Sagar, Hello";
console.log("toLowerCase :", caseSting.toLowerCase());
console.log("toUpperCase :", caseSting.toUpperCase());

console.log(`\n
 /* 
  * trim - removes whitespace from both sides of a string.
  * does not change the original string
  */`);
const trimSting = "   Hello World     ";
console.log("trim :", trimSting.trim());

console.log(`\n
 /* 
  * split - it returns an array of string according to substring.
  * does not change the original string
  */`);
const splitSting = "Hello, I am Sagar, Hello";
console.log("split :", splitSting.split(" "));

console.log(`\n
 /* 
  * slice - it extracted and return string.
  * it takes two parameters as indexes start and end
  * start index is inclusive and end index is exclusive
  * return empty string in case of no substring  
  * does not change the original string
  */`);
const sliceSting = "Hello, I am Sagar, Hello";
console.log("slice :", sliceSting.slice(2, 6));
console.log("slice :", sliceSting.slice(8, 6));

console.log(`\n
 /* 
  * replace - searches a string specified value returns new string where values are replaced.
  * It is a case sensitive  
  * if replaceable string is not available then original string returns 
  * does not change the original string
  */`);
const replaceSting = "Hello, I am Sagar, Hello";
console.log("replace :", replaceSting.replace('Sagar', "Ninave"));
console.log("replace :", replaceSting.replace('sagar', "Ninave"));
console.log("replace :", replaceSting.replace('X', "Ninave"));


console.log(`\n
 /* 
  * repeat - returns a new string with specified number of copies of the string.
  * does not change the original string
  */`);
const repeatSting = "Hello World";
console.log("repeat :", repeatSting.repeat(2));
console.log("repeat :", repeatSting.repeat(3));
