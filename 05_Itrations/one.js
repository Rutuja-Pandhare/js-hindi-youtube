//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
        
    }
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + "*" + j + '=' + i*j);
        
    }
}

//break and continue
// for (let i = 0; i <= 20; i++) {
//     if(i == 5){
//         console.log("5 is best");
//         break;
//     }
//     console.log(`value is i is ${i}`);
    
    
// }

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("5 is best");
        continue;
    }
    console.log(`value is i is ${i}`);
    
    
}