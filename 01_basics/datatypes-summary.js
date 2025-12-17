// Primitives

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 34454354346527840n


//Reference (non primitive)
// Array, Objects, Functions

const heros =["shaktiman", "naagraj" , "doga"];
let myObj ={
    name: "rutuja",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

//https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "rutujapandhare.com"

let anothername= myYoutubename
anothername="rutujapandhare25.com"

console.log(myYoutubename);
console.log(anothername);

let  userOne ={
    email:"user@google.com",
    upi:"user@bl"
}

let userTwo= userOne

userTwo.email = "rutuja@google.com"

console.log(userOne.email);
console.log(userTwo.email);



