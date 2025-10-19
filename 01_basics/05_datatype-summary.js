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


const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"Mobeen",
    age:22,
    isLoggedIn:false
}

const myfunction= function(){
    console.log("Hello World");
}

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myfunction); // function
