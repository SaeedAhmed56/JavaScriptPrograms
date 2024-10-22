// const AppUser = new Object()        //

const AppUser = {}

AppUser.id = "123abc"
AppUser.name = "Saeed"
AppUser.IsLoggedIn = false

// console.log(AppUser);

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName: {
            firstName : "Saeed",
            LastName : "Shaikh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "A", 2:"B"}
const obj2 = {3: "C", 4:"D"}

// const obj3 ={obj1 ,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const User = [
    {
        id : 1,
        email :"S@gmail.com"
    },
    {
        id : 2,
        email :"A@gmail.com"
    },
    {
        id : 3,
        email :"E@gmail.com"
    },
    {
        id : 4,
        email :"D@gmail.com"
    },
]
// console.log(User[1].email);
// console.log(AppUser);
// console.log(Object.keys(AppUser));
// console.log(Object.values(AppUser));
// console.log(Object.entries(AppUser));

// console.log(AppUser.hasOwnProperty('name'));

const course ={
    courseName : "JavaScript",
    Price : 999,
    Instructor : "Saeed"
}

// course.Instructor

const {Instructor : Teacher} = course

// console.log(course.Instructor);
console.log(Teacher);

{
    "name" : "Saeed"
    "course" : "JavaScript"
    "price" : "Free"
}






