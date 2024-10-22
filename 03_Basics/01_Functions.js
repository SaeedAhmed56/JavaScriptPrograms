//Functions

function SayMyName(){
    console.log("S");
    console.log("A");
    console.log("E");
    console.log("E");
    console.log("D");

}
// SayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // // console.log("Saeed");
    // return result
    
    return number1+number2
    
}
const result = addTwoNumbers(5,7)
// console.log("Result",result);

function loginUser(username="xyz"){
    if(!username){
        console.log("Please Enter a Username");
    }
    else if(username === "")
    {
        console.log("Enter a UserName"); 
    }
    return  `${username} just Logged In`
}
console.log(loginUser("abc"));
