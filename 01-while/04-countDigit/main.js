// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด
//     - รับค่าตัวเลขจากผู้ใช้งาน
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข
//receive number from the users
//show the result as how many digits from the number that user put in
//ike 45677 the result is 5

// let n = +prompt("Enter Number");
// console.log(n);

///PETTERN RECOGNITION//
//what pettern do you see in the below line

// 1150/10 => 115 =>count 1

// 115/10 => 11.5 =>count 2

// 11.5/10 => 1.15 =>count 3

// 1.15/10 => 0.0115 =>count 4
// let count = 0;
// if (n < 0) n = -n;
// while (n > 10) {
//   console.log(n);
//   count++;
//   n = n / 10;
// }

// console.log(count);

//

// (1152 -2) /10 => n'= 115 =>count 1

// (115-5) /10 => n'= 11.5 =>count 2

// (11-2) /10 => n' = 1 =>count 3

// (1-1 )/ 10 =>  n'= 0

// while (n) {
//   let remainder = n % 10;
//   count++;
//   n = (n - remainder) / 10;
// }
// console.log(count);

// //
// while (n) {
//   let remainder = n % 10;
//   n = (n - remainder) / 10;
//   sum += remainder;
//   count++;
// }
// console.log(count);
// //
