// var c=300

let a = 300

if (true) {
    let a= 10
    const b = 20
    // console.log("INNER :",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name ="Saeed"

    function two() {    
        const website = "youtube"
        // console.log(name);          
    }
    // console.log(website);        //shows error because it is outofscope of func two 
    two()
    
}
one()


if (true){
    const name = "Saeed"
    if(name === "Saeed"){
        const website = " youtube"
        // console.log(name + website);
    }
    // console.log(website); //shows error because website is not defined (outofscope)
}
// console.log(name);  //shows error because name is not defined (outofscope)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num +1
}


addtwo(7)           //Cannot access 'addtwo' before initialization  
const addtwo = function(num){
    return num +2
}