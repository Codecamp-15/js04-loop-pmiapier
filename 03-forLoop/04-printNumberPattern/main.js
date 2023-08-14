// ```
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8

// ```
// console ให้ใช้ \n

let arr = [];
for (let i = 1; i <= 8; i++) {
  arr.push(i);
  console.log(arr.toString().replace(/,/g, " "));
}
