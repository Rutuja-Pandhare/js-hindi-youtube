// Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);  
})();

( (name)  => {
    
    console.log(`DB CONNECTD TWO ${name}`);
    
}  )("rutuja")