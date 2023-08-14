//-- A Loop is sequence of instruction
/*that is continually repeated until a certein condition is reacher*/

//heading towards until you meet a condition
//Loop allows the programmers to work
//No knowledge about Loop, you will always repeat yourself

// 3 different types of Loops

//1) Condition Loop
//deciding base on Boolean (will keep runing or not from Boolean)

//2) Counting Loop
//keep running or not, will decide using Number

//3) List Loop
//keep running or not, will decide  using lists

//While Loop : condition Loop
// while (condition) {
//if this condition is true, the code in the bracket (loop body)will keep running
// }

/*let i = 1;
while( i <= 10) {
    //loop block //as long as i <= 100, keep running
    console.log(i);
    i++;

}

console.log("end..."); */

// Example
/*let i = 0;
while (++ i <= 10) {
    console.log (i)
}
console.log("end...");*/

//applying if else to while loop

// let i =
// while (i <= 20) {
//     if (i % 3 == 0){
//         console.log(i);
//     }
//     i++;

// }

// console.log(end...);

//

// let i =
// while (i <= 20) {
//     if (i % 3 == !0){
//         console.log(i);
//     }
//     i++;

// }

// console.log(end...);

//
// this loop will print out

// let i =
// while (i <= 20) {
//     if (i % 5 == 0){
//         console.log(`${i} : HighFive`);
//     } else if (i % 3 == 0) {
//         console.log (i);
//     }
//     i++;

// }

// console.log(end...);

let i = 1;
while (i <= 20) {
  if (i % 3 === 0 && i % 5 == 0) {
    console.log(`${i} : FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i}:Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i}:Buzz`);
  } else {
    console.log(i);
  }
  i++;
}
console.log("end...");
