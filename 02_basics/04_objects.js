//const tinderUser = new Object()//this is a singleton object
const tinderUser={} // this is not a singleton object

 tinderUser.id="1234abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false
 
//console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rutuja",
            Lastname:"Pandhare"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 ={obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2)

const obj3={...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email:"R@gmail.com"
    },
    {
        id: 1,
        email:"R@gmail.com"
    },
    {
        id: 1,
        email:"R@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rutuja"
}
//course.courseInstructor

const {courseInstructor:instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "rutuja",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]