//for of

// [""],[""],[""]
// [{},{},{}]

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "Hello World!"

// for (const greet of greeting) {
//     console.log(`Each Char is ${greet}`);
    
// }

//Map

const map =new Map()
map.set('IND',"India")
map.set('AUS',"Australia")
map.set('USA',"United State Of America")
map.set('IND',"India")                  //this will not print bcz map uses unique value 

// console.log(map);

for (const [key, value]of map) {
    // console.log(key, ":-", value);
    
}


// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'COD',
//     'game3' : 'COC'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }