const user ={
    username: "Rutuja",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
       //This refers current context 
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Rutuja"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "Rutuja"
//     console.log(this.username);
    
// }
// chai()

// const chai =  () => {
//     let username = "Rutuja"
//     console.log(this);
    
// }
// chai()

/* explicit return */
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

/****implycit return */
//const addTwo = (num1 , num2) =>  num1 + num2

//const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username: "rutuja"})

console.log(addTwo(3,4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()