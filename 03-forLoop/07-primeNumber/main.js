// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
let n = 5; //if prime number is 5
let isPrime = true; //using flag //everyone is true or prime

for (let n = 2; n <= 100; n++) {
  let isPrime = true; //using flag //everyone is true or prime
  for (let divider = 2; diviver < n; divider++) {
    //divider 2,3,4,...n-1
    if (n % divider == 0) {
      isPrime = false;
      break;
    }

    //n = 2 5/2 = 2.5 =>isPrime = true
    //n = 3 5/3 = 1.6 =>isPrime = true
    //n = 2 5/4 = 1.2 =>isPrime = true
    //n=5
  }
  if (isPrime) console.log(n);
}

//if (isPrime) console.log(`number ${n} is prime number`);
//else console.log (`number ${n} is NOT prime number`);
