// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...)
//ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

// let sum = 0;
// let sum2 = 0;
// let sum3 = 0;
// let sum4 = 0;
// let sum5 = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;

//   if (i % 2 === 0) sum2 += i;
//   else sum3 += i;

//   if (i % 2 === 0) sum4 += i*i;
//   if (i % 3 === 0) sum5 += i*i;
// }
// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);

///The answer from the class
//1)
// let sum = 0;
// for (i = 1; i <= 10; i++){
//     // console.log(i);
//     sum = sum + 1;
//     // sum = 0 + 1 => 1;
//     // sum = 1 + 2 => 3;
//     // sum = 3+ 3 => 6;
//     //
// }
// console.log (sum)

//2)
// let sumEven = 0;
// let sumOdd = 0;
// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) sumEven = +1;
//     else sumOdd += i;
// }
// console.log (sunEven, sum- sumEven, sumOdd);

//3)
let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    // console.log(`${i}^2`);
    sumEvenSquare = sumEvenSquare + 1 ** 2;
  }
  if (i % 3 == 0) {
    sumThirdSquare = sumThirdSquare + 1 ** 2;
  }
}
console.log(`sumEvenSquare: ${sumEvenSquare}`);
console.log(`sumThirdSquare: ${sumThirdSquare}`);
