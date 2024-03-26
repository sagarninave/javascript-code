console.time();
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacci(10));

let num1 = 0;
let num2 = 1;
let len = 10;
let result = "0, 1, ";
if(len > 2){
    for(let i=2; i<len; i++){
        let next = num1 + num2;
        result += i !== len - 1 ? `${next}, ` : `${next}`;
        num1 = num2;
        num2 = next;
    }
}
console.log("result : ", result)
