//singleton
//Object.create
//object literals


const mySym = Symbol("key1")


const jsUser = {
    name: "Rutuja",
    "Full name": "Rutuja Pandhare",
    [mySym]:"myKey1",
    age: 22,
    location: "Nagpur",
    email: "rutujapandhare.google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "rutujapandhare25@gmail.com"
//Object.freeze(jsUser)
jsUser.email="rp@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(jsUser.greeting);
jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


