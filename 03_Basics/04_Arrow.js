const User ={
    userName : "Saeed",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.userName} , Welcome to Website`);
        console.log(this);
        
        
    }
}
// User.welcomeMessage()
// User.userName= "Ahmed"
// User.welcomeMessage()

// console.log(this);

// function chai(){
//     let userName="Saeed"
//     console.log(this.userName);          //undefined
    
// }
// chai()

// const chai= function(){
//     let userName="Saeed Ahmed"
//     console.log(this.userName);             //undefined 
// }
// chai()

// const chai = () => {
//     let userName="Ahmed"
//     console.log(userName);
    
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({userName : "Shaikh"})

console.log(addTwo(3,7));
// console.log(addTwo(12,7));

// const myArray =[2,45,67,78,96,3,81]  
// myArray.forEach(() => ())
