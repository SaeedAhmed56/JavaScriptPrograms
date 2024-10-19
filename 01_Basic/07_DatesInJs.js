//Dates

// let myDate = new Date()
// console.log(myDate.toString());                    // Sat Oct 19 2024 11:12:50 GMT+0530 (India Standard Time
// console.log(myDate.toDateString());                // Sat Oct 19 2024
// console.log(myDate.toISOString());                 // 2024-10-19T05:42:50.153Z
// console.log(myDate.toJSON());                       //2024-10-19T05:42:50.153Z
// console.log(myDate.toLocaleDateString());           //10/19/2024
// console.log(myDate.toLocaleString());               //10/19/2024, 11:12:50 AM

// console.log(typeof myDate);                        //object

// let myCreatedDate = new Date(2024,0,30)          //TUE Jan 30 2024 
// let myCreatedDate = new Date(2024,0,30,5,56)             //TUE Jan 30 2024 05:56:00 
let myCreatedDate = new Date("08-19-2024")             //MON Aug 19 2024 
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeSpam = Date.now()
// console.log(myTimeSpam);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.toLocaleString());

// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));




