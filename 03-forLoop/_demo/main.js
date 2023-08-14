console.log('learn counting Loop')

console.log('strarting....')
// () 
//{}
//[]

for (let i = 0; i < 3; i++) { 
    // i starting from 0, i will run as long as is less than 3, 
    // after it done one loop, add 1 to i
    console.log('Hello');
    console.log('>>>Codecamp');
}
console.log('end');

//Another example
for (i = 2; i <= 20; i+2){
    console.log(i);
}
console.log('end...');

//another example 
//EX2:FizBuzz
for (let i = 1; i <= 20 ; i + 1){
    if (i % 3 === 0 && i % 5 === 0)
    console.log ('FizzBuzz');
    else if ('i % 5 == 0'); console.log('Buzz');
    else if ('i % 3 == 0'); continue;
    else console.log(i)
}


//EX3
for (let i = 1; )


//Ex4 Concat String
let str = '';
for (let i = 1; i <= 10; i++) {
    str += i;
   
}
console.log(str);
console.log('end');

//Ex4.1
let str = '';
for (let i = 1; i <= 10; i++) {
    if(i % 3 == 0) continue;
    str += i;  
}
console.log(str);
console.log('end');


//EX5: remove vowels (a,e,i,o,u)
let src = 'codecamp'
let res = '';
let (i = 0; i < src.length; i++) {
    console.log(i, src[i]);
}

console.log(str);
console.log('end');
//
//EX6: remove vowels (a,e,i,o,u)
let src = 'codecamp'
let res = '';
let (i = 0; i < src.length; i++) {
    // console.log(i, src[i]);
    if (src[i] == 'a' || src[i] == 'e' || src[i] == 'i' || src[i] == 'o' || src[i] == 'u' ||)
    res = res + src[i];
}

console.log(str);
console.log('end');

// Make the code more clean
let src = 'codecamp'
let res = '';
for (let i = 0; i < src.length; i++) {
    let c = src[i];
    // console.log(i, src[i]);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
    res = res + src[i];
}
console.log(str);
console.log('end');

// Another 

let src = 'codecamp'
let res = '';
for (let i = 0; i < src.length; i++) {
    let c = src[i];
    // console.log(i, src[i]);
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
    res = res + src[i];
}
console.log(str);
console.log('end');

//  Another one is set another variable 
let isVowel = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');


//ADVANCE: Nested Loop
//Multiplication Table

for (let i = 2; i <= 12; i++){ //12 is the highest number we want the loop to run
    console.log(`start multiply by ${i}`)
    for (let j = 1; j <= 12; j++) {
        console.log (`${i} * ${j} = ${i*j}`)
    }
    console.log(\n)
}
console.log('end');
//
    


