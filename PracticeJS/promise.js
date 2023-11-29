const promise1 = () => "sagar1";
console.log("Promise 1 : ", promise1());

const promise2 = async () => "sagar2";
console.log("Promise 2 : ", promise2());

const promise3 = async () => "sagar3";
promise3().then((result) => console.log("Promise 3 : ", result));

const promise4 = async () => "sagar4";
const resultPromise4 = promise4();
console.log("Promise 4 : ", resultPromise4);
