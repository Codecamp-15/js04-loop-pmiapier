โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่;

// ```js
// let i = 0;
// while (++i < 5) alert(i);
// ```

// ```js
// let i = 0;
// while (i++ < 5) alert(i);
// ```

//1)
let i = 0;
while (++i < 5) {
  alert(i);
}

//The alert starting from 1 then continue with 2,3,4,5

//which is going to be different from the second loop

//2)
let i = 0;
while (i++ < 5) {
  alert(i);
}

//
