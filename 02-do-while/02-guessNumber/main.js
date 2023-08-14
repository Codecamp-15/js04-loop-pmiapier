// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย
// ///How to solve the problem step by step from what the clients want
// //1) Input 1 , users giving number from 1-99
// let ansNumber = prompt('Enter your magic number')//=> could get null,string, "", "   ", "qwere", "12"

//now checking, because we dont want this gang to be input
// creating variable

// let isNull = ansNumber == null;
// let isEmpty = ansNumber.trim() === '';
// let isNan = isNaN(ansNumber);
// these above does not work because it is checking all
// so we will change to check all

// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let inRange = Number(ansNumber) >= 1 || Number(ansNumber) <= 99;

// if(isValid) {
//     alert();
// } else if (outRange) {
//     alert();
// } else if (inRange) {
//     alert();
// }

//Then down below is another version using do While loop
//1) receiving input until the user guess it right or ESC to cancel/end the game

let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;

do {
  ansNumber = prompt('Enter your number'); //null || ""
  (isEmpty = ansNumber.trim() === ''), (isNan = isNaN(ansNumber));
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
  if (isEmpty || isNan) {
    alert('Invalid Input. Try 1-99');
  } else if (outOfRange) {
    alert('Invalid Range. Try 1-99');
  }
} while (ansNumber == null || isEmpty || isNan);

//Now looking to deal with the guessing users
//guess over and over again
//Hint OutOfRange
//Hint Invalid Range
// to high
let guessNumber;
let notInRange;
let emptyInput;

do {
  guessNumber = prompt('Enter your answer');

  outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
  if (isEmpty || isNan) {
    alert('Invalid Input. Try 1-99');
  } else if (outOfRange) {
    alert('Invalid Range. Try 1-99');
  } else if (+guessNumber > +ansNumber) {
    alert('Too high');
  } else if (+guessNumber < +ansNumber) {
    alert('Too low');
  } else if (+guessNumber == +ansNumber) {
    alert('Congratulation!!!');
  }
  //do all of these in the bracket while +guessNumber is not equal +ansNumber
} while (+guessNumber != +ansNumber);
