const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
    
//     return acc+ currval
// },0)

const myTotal = myNums.reduce((acc,currval) => acc+currval,0)


console.log(myTotal);

const shoppingCart= [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "java course",
        price : 5999
    },
    {
        itemName: "python course",
        price : 4999
    },
    {
        itemName: "mobile dev course",
        price : 6999
    },
    {
        itemName: "aws course",
        price : 9999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);
