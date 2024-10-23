//Immediately Invoked Function Expression (IIFE)

(function one()
{
    //named iife
    console.log(`DB Connencted`);
})();                               //context ko rokne k liye ";" lagana padega (code end karne k liye)

//()()          //first '()' isme function ki defination dusre '()' me function call hoga immedialy invoked

((name) =>{
    //unnamed iife (simple iife)
    console.log(`DB Connected Two${name}`);
    
})("saeed")