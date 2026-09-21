'use strict'
//basic  
function checkAdult(age){
    if (age>18){
        console.log("adult");
    }
}
checkAdult(27);

function checkEven(num){
    if(num %2==0){
        console.log("The number is even");
        
    }

}
checkEven(4);
//Mid
function chickLetter(char){
    if (
        typeof char =="string" &&
        char.length==1 &&
        char.toLowerCase() !== char.toUpperCase()

    ){
        console.groupCollapsed("letter")
    }
}
chickLetter("a"); 

function checkArray(list) {
  if (Array.isArray(list)) {
    console.log("It's an array");
  }
}
checkArray([1, 2, 3]); 


function checkPositive(x) {
  if (typeof x === "number" && x > 0) {
    console.log("x is a positive number");
  }
}
checkPositive(5); 
//Advanced
function checkMultipleOf3(z){
    if(z%3==0){
        console.log("z is multible of 3");

        
    }
}
checkMultipleOf3(9);


function checkPassswordStrenth(password){
    if (password.length>=8){
        console.log("strong");
        
    }
}
checkPassswordStrenth("mypassword123");


function checkWorkingAge(age){
    if(age >=18 && age<=65){
            console.log("You are of working age");

    }
}
checkWorkingAge(30);


function checkPrimaryColor(color) {
  if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color");
  }
}
checkPrimaryColor("red");


function isValidNumber(value) {
  if (!isNaN(value)) {
    console.log(`${value} is a valid number`);
  } else {
    console.log(`${value} is not a number`);
  }
}
 
isValidNumber(11); 
isValidNumber("19"); 
isValidNumber("xyz"); 
isValidNumber("17.5");
isValidNumber("21F"); 