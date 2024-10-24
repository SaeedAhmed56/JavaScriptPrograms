//if

// < , > , <= , >= , == , != , === , !==

// const temperature = 51
// if(temperature < 50){
//     console.log("Temperature is less than 50");
//     // console.log(`Temperature is ${temperature}`);
    
    
// }else{
//     console.log("Temperature is Greater than 50");
//     // console.log(`Temperature is ${temperature}`);
   
// }


// const score=200
// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power : ${power}`);
    
// }
// console.log(`User Power : ${power}`);

// const balance = 1000
// // if (balance) console.log("Test"),console.log("Test2");
// if (balance < 500) {
//     console.log("Less than 500");
// }else if (balance < 750){
//     console.log("Less than 750");
// }else if (balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow User to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
    
}