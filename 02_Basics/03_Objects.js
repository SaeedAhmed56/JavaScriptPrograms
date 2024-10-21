//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser= {
    name: "Saeed",
    fullname : "Saeed Ahmed",
    [mySym] : "mykey1",
    age : 21,
    location : "Maharashtra",
    email : "saeed@google.com",
    isLoggedIn : false,
    LastLogingDays : ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser[mySym]);

JsUser.email= "saeed@chatgpt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.name="shaikh"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

