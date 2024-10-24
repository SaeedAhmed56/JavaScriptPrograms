const email=[]

if (email) {
    console.log("Got User Email");
    
}
else {
    console.log("Don't Have User Email");
    
}

//falsy value

// false,0,-0, BigInt 0n, "", null ,undefined,NaN

//thruthy value
// "0" ,'false', " ",[],{},function(){}

// if (email.length === 0) {
//     console.log("Array is Empty");
    
// }

// const emptyObject ={}
// if (Object.keys(emptyObject).length ===0) {
//     console.log("Object is Empty");
// }

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


//Turnary Operator

// condition ? true : false

const coldCoffe =100
coldCoffe <= 80 ? console.log("less than 80") : console.log("more than 80");

