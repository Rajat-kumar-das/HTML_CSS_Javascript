// // Data Types
// // 1. Number
// let num = 10;
// console.log(num); // 10
// // 2. String
// let str = "Hello, World!";
// console.log(str); // Hello, World!
// // 3. Boolean
// let bool = true;
// console.log(bool); // true
// // 4. Undefined
// let und;
// console.log(und); // undefined
// // 5. Null
// let nul = null;
// console.log(nul); // null
// // 6. Symbol
// let sym = Symbol("unique");
// console.log(sym); // Symbol(unique)
// // 7. BigInt
// let bigInt = BigInt(123456789012345678901234567890);
// console.log(bigInt); // 123456789012345678901234567890n

// // Non Primitive Data Types

// // 1. Object
// let obj = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(obj); // { name: 'John', age: 30, city: 'New York' }
// //  another way to create an object
// let obj2 = new Object();
// obj2.name = "John";
// obj2.age = 30;
// obj2.city = "New York";
// console.log(obj2); // { name: 'John', age: 30, city: 'New York' }

// // 2. Array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]    
// //  another way to create an array
// let arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2); // [ 1, 2, 3, 4, 5 ]


// 3. Function
// function myFunction() {
//   console.log("Hello, World!");
// }
// myFunction(); // Hello, World!
// //  another way to create a function
// let myFunction2 = function() {
//   console.log("Hello, World!");
// };
// myFunction2(); // Hello, World!

// aerow function
// let myFunction3 = () => {
//   console.log("Aerrow Function");
// };
// myFunction3(); // Hello, World!

// 3. Date
// let date = new Date();
// console.log(date); // current date and time

// 4. Object
// let obj3 = new Object();
// obj3.name = "John";
// obj3.age = 30;
// obj3.city = "New York";
// console.log(obj3); // { name: 'John', age: 30, city: 'New York' }


// // -----------------------------------------------------------------------
// // concatenation
// let str="Rajat"+" "+"Kumar";
// console.log(str); // Rajat Kumar

// // another way to concatenate
// let str2="Rajat";
// str2 +="";
// str2 +="Kumar";
// console.log(str2); // Rajat Kumar

// // another way to concatenate
// let str3="Values: ";
// str3 += 10;
// str3 += "";
// str3 += {
//   name: "Rajat",
//   age: 25
// };
// str3 += ["mango", "apple "];
// str3 += true;
// str3 += null;
// str3 += undefined;
// console.log(str3); // Values: 10[object Object][object Object]truenullundefined

// -----------------------------------------------------------------------------------------------------

//------------------------------- Operators----------------------------------------------------------
// 1. Arithmetic Operators
// let a = 10;
// let b = 5;
// let c = a + b;
// console.log(c); // 15

// 2.subtraction
// let a=10;
// let b=5;
// let c=a-b;
// console.log(c);

// 3. multiplication
// let a=10;
// let b=5;
// let c=a*b;
// console.log(c);//50

// 4. division
// let a = 10;
// let b = 5;
// let c = a / b;
// console.log(c); // 2

// 5. modulus
// let a = 10;
// let b = 5;
// let c = a % b;
// console.log(c); // 0

// 6. exponentiation (Power of)
// let a = 10;
// let b = 2;
// let c = a ** b;
// console.log(c); // 100

// 7. increment
// 7.i pre-increment
let a = 10;
let b = ++a; // a is incremented first
console.log(a); // 11
console.log(b); // 11

// 7.ii post-increment
let c = 10;
let d = c++; // c is incremented after
console.log(c); // 11
console.log(d); // 10

// 8. decrement 
// 8.i pre-decrement
let e = 10;
let f = --e; // e is decremented first
console.log(e); // 9
console.log(f); // 9
// 8.ii post-decrement
let g = 10;
let h = g--; // g is decremented after
console.log(g); // 9
console.log(h); // 10

// 9. unary negation
let i = 10;
let j = -i; // negation
console.log(i); // 10
console.log(j); // -10
// 9.i unary plus
let k = "10";
let l = +k; // converts to number
console.log(k); // "10"
console.log(l); // 10
// 9.ii unary negation
let m = "10";
let n = -m; // converts to number and negates
console.log(m); // "10"
console.log(n); // -10
// 9.iii unary negation
let o = -10;
let p = -o; // negates again
console.log(o); // -10
console.log(p); // 10

// 10. typeof operator
let q = 10;
let r = "Hello";
let s = true;
let t = null;
let u = undefined;
let v = Symbol("unique");
let w = BigInt(123456789012345678901234567890);
let x = [1, 2, 3];
let y = { name: "John", age: 30 };
let z = function() { console.log("Hello, World!"); };
console.log(typeof q); // number
console.log(typeof r); // string            
console.log(typeof s); // boolean
console.log(typeof t); // object
console.log(typeof u); // undefined
console.log(typeof v); // symbol
console.log(typeof w); // bigint
console.log(typeof x); // object
console.log(typeof y); // object
console.log(typeof z); // function
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof Symbol("unique")); // symbol

// --------------------------Types Conversing--------------------------------
// 1. Number to String
let num = 10;
let str = num.toString();//variable.toString() method
console.log(str); // "10"

// 2. String to Number
let str2 = "10";    
let num2 = Number(str2); // Number(variable name) 
console.log(num2); // 10

// 3. String to Boolean
let str3 = "true";
let bool = (str3 === "true"); // comparison operator
console.log(bool); // true

// 4. Boolean to String
let bool2 = true;
let str4 = bool2.toString(); // variable.toString() method
console.log(str4); // "true"

// 5. Boolean to Number
let bool3 = true;
let num3 = Number(bool3); // Number(variable name)
console.log(num3); // 1

// 6. Number to Boolean
let num4 = 1;
let bool4 = Boolean(num4); // Boolean(variable name)
console.log(bool4); // true

// 7. String to Object
let str5 = "Hello, World!";
let obj = new String(str5); // new String(variable name)    
console.log(obj); // [String: 'Hello, World!']

// 8. Object to String
let obj2 = new String("Hello, World!");
let str6 = obj2.toString(); // variable.toString() method
console.log(str6); // "Hello, World!"

// 9. Object to Number
let obj3 = new String("10");
let num5 = Number(obj3); // Number(variable name)
console.log(num5); // 10

// 10. Number to Object
let num6 = 10;
let obj4 = new Number(num6); // new Number(variable name)
console.log(obj4); // [Number: 10]


