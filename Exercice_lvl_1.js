//1.AGE PROMPT

/*
let age = Number(prompt("enter your age"));
let driverLicence = 18;

if(age >= driverLicence){
    console.log("you are old enough to drive")
}else{
    console.log(`you have to wait ${driverLicence - age} years in order to get your driving licence`)
}
*/

//2.COMPARE AGES
let myAge = 500;
let yourAge = 28;

if(myAge>yourAge){
    console.log(`I am ${myAge - yourAge} years older than you`)
}else if(myAge === yourAge){
    console.log("we are the same age")
}else{
    console.log(`you are ${yourAge - myAge} years older than me`)
}

//3. A GREATER THAN B
let a = 4;
let b = 3;

if(a>b){
    console.log("a is superior to b")
}else{
    console.log("b is superior to a")
}
 //-----
a>b
    ? console.log("a is superior to b")
    : console.log("b is superior to a")

//4.EVEN NUMBERS
let value1 = 2;
let value2 = 3;

if(value1 % 2 === 0){
    console.log("value 1 is an even number")
}else{
    console.log("the value is not an even number")
}

value2 % 2 === 0
    ? console.log("is an even number")
    : console.log("is not an even number")



