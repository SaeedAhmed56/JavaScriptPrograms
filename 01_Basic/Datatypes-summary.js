/*
//Primitive (call by value)

//7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt


//Non-Primitive (call by refence)

//  Arrays, Object, Functions

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp = null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id == anotherId);

const bigNumber= 35345252323n

const heros = ["Thor","IronMan","Hulk"]

let myObj={
    name:"Saeed",
    age: 21,
    Stuid:1         
}
for (let i =0; i<3 ; i++)
{
console.log(myObj[i])
}

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive) , Heap (Non-Primitive)

let myFunction="Saeed Ahmed"

let anothername=myFunction
anothername="Saeed Shaikh"

console.log(myFunction);
console.log(anothername);


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="saeed@google"

console.log(userOne.email);
console.log(userTwo.email);
