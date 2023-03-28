//                  Q1
function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(10));

//                  Q2

let arr = [1, 2, 3, 4, 5];
let sum = 0;

function arrSum(arr, index) {
  if (index >= arr.length) {
    return;
  }
  sum += arr[index];
  arrSum(arr, index + 1);
}

arrSum(arr, 0);
console.log(sum);

//                  Q3

let string = "Hello";
let nString = "";
let i = string.length - 1;
function reverse(string) {
  if (i < 0) {
    return 1;
  }
  nString += `${string[i--]}`;
  reverse(string);
  return nString;
}

console.log(reverse(string));
