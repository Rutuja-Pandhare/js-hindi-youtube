const name="rutuja"
const repoCount = 50
//console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ruzz-25-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newStringOne= "  rutuja   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rutuja.com/rutuja%25pandhare"

console.log(url.replace('%25', '-'))

console.log(url.includes('ruzz'));

console.log(gameName.split("-"));




