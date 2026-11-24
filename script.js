function showMessage() {
    const message = "Hello, welcome to the JavaScript world!";
    console.log(message);
}
let a=10;
var b=20;//we can reassign the value of b since we used "var"
const c=30;//we cannot reassign or redeclare the value of c since we used "const"
console.log(a);
b=30;
// let can reassign but cannot redeclare the variable in the same scope
console.log(b);//now b is reassigned to 30
//js is a dynamically typed language, so we can change the type of variable and we no need to declare the type of variable
console.log(typeof a);
showMessage();
//1.primitive data types: number, string, boolean, null, undefined, symbol
//2.non primitive data types: objects, arrays,functions
let str = 'Hello World';
let Str1= "Hello World";
let Str2= `Hello World`;
console.log(str);
console.log(Str1);
console.log(Str2);
let n=null;
console.log(n);
console.log(typeof n);//null is an object in js
let u;
console.log(u);
console.log(typeof u);//undefined is a type in js

//symbol
let sym=Symbol('sym');
console.log(sym);
console.log(typeof sym);
//symbols are unique and immutable data types that can be used as keys for object properties

//bigint
let bigInt=9007199254740991n;
console.log(bigInt);
console.log(typeof bigInt);

//object
let obj={
    name:"John",
    age:30
};
console.log(obj);
console.log(typeof obj);

//non-primitive data types: array
//1.push() - adds an element to the end of the array
let arr=[1,2,3];
arr.push(4);
console.log(arr);

//2.pop() - removes the last element from the array
arr.pop();
console.log(arr);

//3.shift() - removes the first element from the array
arr.shift();
console.log(arr);

//4.unshift() - adds an element to the beginning of the array
arr.unshift(0);
console.log(arr);

arr.includes(2);//returns true if the array contains the element, otherwise false
console.log(arr.includes(2));

arr.indexOf(2);//returns the index of the element in the array, if not found returns -1
console.log(arr.indexOf(2));

arr.slice(1,3);//returns a new array containing the elements from index 1 to 3 (not including 3)
console.log(arr.slice(1,3));

function add(a,b){
    return a+b;
}
console.log(add(2,3));
function printName(name){
    console.log("Hello, " + name);
}
name="John";
printName(name);
