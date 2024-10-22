function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(20,50,70));

const user ={
    course : "JavaScript",
    price :199
}
function handleObject(anyObject){
    console.log(`Course Name is ${anyObject.course} and its price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    course : "Java",
    price : 399
})

const myNewArray=[200,300,500]

function returnSecondValue(getArray){
    // return getArray[1]
    console.log(`Value of Array on Index of 1 is ${getArray[1]}`);
    
}
returnSecondValue([900,8080,7070])
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,800,900]));


