//Arrays

const myArr=[0,1,2,3,4,5]
// const myHeroes=["Thor","Hulk","Superman","BatMan"]

// console.log(myArr[0]);
// console.log(myHeroes[0]);

// const myArr2=new Array(56,87,81)
// console.log(myArr2[0]);

//Arrays Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)            //  [ 9,0, 1, 2, 3, 4, 5 ] add value in starting
// myArr.shift()                  //[ 0, 1, 2, 3, 4, 5 ] remove value in starting

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(5));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

console.log("A" , myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);

const myn2=myArr.splice(1,3)
//console.log("C" , myArr);
console.log(myn2);
console.log("C" , myArr);




