// ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

// ```
// *
// *	*
// *	*	*
// *	*	*	*
// ```

// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n
//star pattern
// for (i = 1; i <= 5; i++) {
//     // console.log('*');
//     let str = "";
//     for (j = 1; j<= 5; j++){
//         console.log('#')
//     }
//     console.log(str)
// }

for (i = 1; i <= 4; i++) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}



//DONE!
