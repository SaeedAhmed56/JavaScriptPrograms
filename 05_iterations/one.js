// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is best number");
        
//     }
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`OuterLoop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop Value : ${j} and Outer Loop Value :${i}`);
//         console.log(i +"*"+ j +"=" + i*j);
        
        
        
//     }    
// }

// let myArray = ["Thor","IronMan","BatMan"]

// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue

// for (let  index= 0;  index<=20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let  index= 0;  index<=20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}