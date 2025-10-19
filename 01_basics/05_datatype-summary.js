// Primitive Data Types Summary
// 7 primitive data types in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (ES6)
// 7. BigInt (ES2020)

// const score=33;
// const scoreValue=100.3;
// const isLoggedIn=true;
// const outsideTemp=37;
// let userEmail; // undefined

// const id= Symbol("12345");
// const anotherId= Symbol("12345");

// console.log(id===anotherId); // false

// const bigNumber= 1234567890123456789012345678901234567890n;
// console.log(bigNumber);

// Non-Primitive Data Type or Reference Data Type
// 1. Object
// 2. Array
// 3. Functions


// const heros=["shaktiman","naagraj","doga"];
// let myObj={
//     name:"Mobeen",
//     age:22,
//     isLoggedIn:false
// }

// const myfunction= function(){
//     console.log("Hello World");
// }

// console.log(typeof heros); // object
// console.log(typeof myObj); // object
// console.log(typeof myfunction); // function


// ******** Stack (Primitive) and Heap (Non-Primitive) Memory ********
let myname= "mobeenkhan";
let anotherName=myname;

console.log(anotherName); // mobeenkhan
anotherName="khanmobeen";

console.log(myname); // mobeenkhan
console.log(anotherName); // 


let userOne={
    email:"mobeen@example.com",
    upi:"mobeen@oksbi",
}

let userTwo=userOne;
console.log(userTwo);

/*
Stack Memory:
It uses to store primitive data types (Number, String, Boolean, Undefined, Null, Symbol, BigInt).
and it stores the actual values.
It sends a copy of the value when assigned to another variable.

Heap Memory:
It uses to store non-primitive data types (Object, Array, Functions).
It stores the reference(address) of the object.
It sends the reference(address) when assigned to another variable.

*/
