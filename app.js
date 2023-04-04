// //                  Q1
// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log(fibonacci(10));

// //                  Q2

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// function arrSum(arr, index) {
//   if (index >= arr.length) {
//     return;
//   }
//   sum += arr[index];
//   arrSum(arr, index + 1);
// }

// arrSum(arr, 0);
// console.log(sum);

// //                  Q3

// let string = "Hello";
// let nString = "";
// let i = string.length - 1;
// function reverse(string) {
//   if (i < 0) {
//     return 1;
//   }
//   nString += `${string[i--]}`;
//   reverse(string);
//   return nString;
// }

// console.log(reverse(string));

//                        DataStructure                      

// -------------Q1--------------------

let arr = [1, 2, -5, 1, 2, 3, 1, 2, -1, -1, -1, -1, 1, 2];

function min(arr) {
  if (arr.length > 1) {
    let min = arr.pop();
    for (let i = 0; i < arr.length;) {
      let submin = arr.pop();
      if (min > submin) {
        min = submin;
      }
    }
    return min;
  } else if (arr.length == 0) {
    return "stack is empty.";
  } else {
    return arr.pop();
  }
}

console.log(min(arr));



// -------------Q2--------------------

let arr2 = [1, 2, 3, 4, 5];
function revers(arr) {
  let reversArray = [];
  for (let i = 0; i < arr.length;) {
    reversArray.push(arr.pop());
  }
  return reversArray;
}
console.log(revers(arr2));



// -------------Q3--------------------

class StackQ3 {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // add element to top of the stack
  push(element) {
    this.items[this.count] = element;
    this.count++;
    console.log(`${element} added to ${this.count}`);
    return this.count - 1;
  }

  // print elements
  print() {
    return this.items;
  }
}

const stack1 = new StackQ3();
const stack2 = new StackQ3();

stack1.push(100);
stack1.push(200);
stack1.push(300);
let s1 = stack1.print();

stack2.push(400);
stack2.push(500);
stack2.push(600);
let s2 = stack2.print();

// queue elements
class QueueQ3 {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  queue(item) {
    this.items.push.apply(this.items, item);
    this.backIndex++;
    return item + " inserted";
  }

  printQueue() {
    return this.items;
  }
}
const queueQ3 = new QueueQ3();

console.log(queueQ3.queue(s1));
console.log(queueQ3.queue(s2));

console.log(queueQ3.printQueue());

//                           Q4          Q5            


class Node {

  constructor(value, loction) {
      this.value = value;
      this.next = null
      this.loction = loction
  }
}

class Linkedlist {
  constructor() {
      this.head = null
      this.tail = null
      this.size = 0
  }

  add(value) {
      let newNode = new Node(value)
      if (this.head == null) {
          this.head = newNode
          this.tail = newNode
          newNode.loction = 1

      } else {
          newNode.loction = this.tail.loction + 1
          this.tail.next = newNode
          this.tail = newNode
      }
      this.size++
  }

  delete() {
      let position = parseInt(this.size / 2) + 1
      let preNode = this.head
      let valueDelet
      while (preNode) {
          if (preNode.loction == position - 1) { 
              valueDelet = preNode.next.value 
              preNode.next = preNode.next.next 
              this.size--
              return valueDelet
          }
          preNode = preNode.next 
      }
  }

  revers() {
      let firstNode = this.head
      let arr = []
      let i = 0
      while (firstNode) {
          arr[i++] = firstNode.value
          firstNode = firstNode.next
      }
      let reNode = this.head
      while (reNode) {
          reNode.value = arr.pop()
          reNode = reNode.next
      }
  }
}


let list = new Linkedlist()
list.add(7)
list.add(8)
list.add(9)
list.add(10)
list.add(11)
list.add(12)
console.log(list);
console.log(list.delete());
list.revers()
console.log(list);