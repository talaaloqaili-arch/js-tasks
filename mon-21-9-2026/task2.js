'use strict'
//Exercise 1
//section 1:
// Cash flow ratio  
function cashFlowRatio(cash , currentLiabilities){
    return cash/currentLiabilities;
}
console.log(cashFlowRatio(1000 , 500));
//Net income
function netIncome(revenues, expenses){
    return revenues - expenses;
}
console.log(netIncome(1000,500));
//Total assets
function totalAssets( liabilities , equity){
    return liabilities + equity;
}
console.log(totalAssets(1000 ,500));
//Net income (using profit margin and sales) 
function netIncomeFromMargin(profit, sales){
    const profitMargin = profit/sales;
    return profitMargin* sales *sales;
}
console.log(netIncomeFromMargin(1000 ,500));
//Average
function average(...numbers){
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}
console.log(average(7, 9, 2)); 
//Discount 
function discount( price ,discountPercent){
    return price - price*(discountPercent/100);
}
console.log(discount(150 ,30));
//Age limit (older than 18 and less than 30)  
function isEligibleAge(age){
    return age>18 && age<30;
}
console.log(isEligibleAge(20));
// Exponential
function exponential(base, exponent) {
  return base ** exponent;
}
console.log(exponential(2, 3)); 
 
// Remainder
function remainder(a, b) {
  return a % b;
}
console.log(remainder(10, 4)); // 2
 
//section 2:
const welcomeStr ="Welcome to Orange";
console.log(welcomeStr.toUpperCase());
console.log(welcomeStr.split(" ")[1].toLocaleUpperCase());
console.log(welcomeStr.replace("welcome to" ,"Hello from"));
console.log(welcomeStr.toLocaleLowerCase());
console.log(welcomeStr.length);
console.log(welcomeStr + "Jordan");
//Replace all occurrences of the FIRST LETTER of a string with '*'
function replaceRepeatedFirstLetter(str) {
  const firstChar = str[0];
  let result = firstChar;
  for (let i = 1; i < str.length; i++) {
    result += str[i] === firstChar ? "*" : str[i];
  }
  return result;
}
console.log(replaceRepeatedFirstLetter("cactus"));
//section 3:
const baseArray =["Coding", "Academy", "By", "Orange"];
// ["Coding", "Academy", "By", "Orange", "Jordan"]
console.log([...baseArray , "Jordan"]);
// ["Coding", "Academy"]
console.log(baseArray.slice(0,2));
// ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
console.log(["welcome " , "to" , ...baseArray]);
// ["Academy", "By", "Orange"]
console.log(baseArray.slice(1));
 
// "Coding Academy By Orange"
console.log(baseArray.join(" "));
 // ["Coding", "Academy", "By", "Orange"]  (unchanged copy)
console.log([...baseArray]);
// ["Coding", "Orange"]
console.log([baseArray[0], baseArray[3]]);
// Exercise 2:
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//  Remove the last item from the vegetable array
vegetables.pop();
//  Remove the first item from the fruit array
fruit.shift();
//  Find the index of "orange"
 const orangeIndex = fruit.indexOf("orange");

// Add that number to the end of the fruit array
fruit.push(orangeIndex);

// Find the length of the vegetable array
const vegLength = vegetables.length;

// Add that number to the end of the vegetable array
vegetables.push(vegLength);
//  Remove 2 elements from "food" starting at index 4
const food = ["pizza", "burger", "rice", "chicken", "salad", "pasta"];
food.splice(4, 2); 
 
// Reverse the array
food.reverse();
 
// Turn the array into a string
const foodString = food.toString();
 
console.log({ fruit, vegetables, food, foodString });
 // SECTION 4:
 //    from year of birth)
 function checkEligibility(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;
 
  if (age > 60) {
    console.log("You may join the seniors' program.");
  } else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
  } else if (age >= 18) {
    console.log("You are eligible. Start your application.");
  } else {
    console.log("You may join the kids' program.");
  }
}
checkEligibility(2004); 

// 2. Switch  
function swapCase(str) {
  let result = "";
  for (const char of str) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(swapCase("OrAnGe")); 
// 3. Capitalize
function toCamelLikeCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
console.log(toCamelLikeCase("Coding Academy by Orange"));
// 4. Remove a specific element from an array
function removeElement(arr, element) {
  return arr.filter((item) => item !== element);
}
console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));
// 5. Check if a number is odd or even
function isOddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isOddOrEven(7));
// 6. Check whether an input variable is a number
function isNumberType(value) {
  return typeof value === "number" && !isNaN(value);
}
console.log(isNumberType(42)); 
console.log(isNumberType("42")); 
// 7. Find the largest of two numbers
function largerOfTwo(a, b) {
  return a > b ? a : b;
}
console.log(largerOfTwo(10, 25));
// 8. Check if a triangle is equilateral, scalene, or isosceles
function triangleType(a, b, c) {
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}
console.log(triangleType(5, 5, 5)); 
console.log(triangleType(5, 5, 8)); 
console.log(triangleType(3, 4, 5)); 

function isInRange(num, min, max) {
  return num >= min && num <= max;
}
console.log(isInRange(15, 10, 20));
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
 //SECTION 5:
 console.log("-- Even numbers via for loop --");
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
console.log("-- Even numbers via while loop --");
let w = 2;
while (w <= 50) {
  console.log(w);
  w += 2;
}
console.log("-- Even numbers twice, single for loop --");
for (let round = 1; round <= 2; round++) {
  for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
}
console.log("-- Evens --");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}
console.log("-- Odds --");
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) console.log(i);
}
console.log("-- FizzBuzz --");
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}
console.log(fizzBuzz(1)); 
console.log(fizzBuzz(15)); 
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
function fizzBuzzRecursive(n, max = 100) {
  if (n > max) return;
  console.log(fizzBuzz(n));
  fizzBuzzRecursive(n + 1, max);
}
fizzBuzzRecursive(1);
function toBanknotes(amount, denominations) {
  const result = [];
  let remaining = amount;
  // Ensure denominations are checked from largest to smallest
  const sortedDenoms = [...denominations].sort((a, b) => b - a);
  for (const note of sortedDenoms) {
    while (remaining >= note) {
      result.push(note);
      remaining -= note;
    }
  }
  return result;
}
console.log(toBanknotes(57, [25, 10, 5, 1])); // [25, 25, 5, 1, 1]
 
function countCharOccurrences(str, char) {
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  let count = 0;
  for (const c of lowerStr) {
    if (c === lowerChar) count++;
  }
  return count;
}
console.log(countCharOccurrences("Coding Academy by Orange", "o")); // 2
 
console.log("-- 0 to 20 --");
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
 
console.log("-- Odd 3 to 29 --");
for (let i = 3; i <= 29; i++) {
  if (i % 2 !== 0) console.log(i);
}
 
console.log("-- Even 12 down to -14 --");
for (let i = 12; i >= -14; i--) {
  if (i % 2 === 0) console.log(i);
}
 
console.log("-- Multiples of 3, 50 down to 20 --");
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) console.log(i);
}
 
const codingAcademyStr = "CodingAcademy";
const mixedArray = [7, 500, "KH404", "black", 36];
 
console.log("-- Array elements --");
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
}
 
console.log("-- String reversed --");
for (let i = codingAcademyStr.length - 1; i >= 0; i--) {
  console.log(codingAcademyStr[i]);
}
 
// 11. Sort numbers into evens and odds arrays using a for loop
const numsToSort = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
const evens = [];
const odds = [];
for (let i = 0; i < numsToSort.length; i++) {
  if (numsToSort[i] % 2 === 0) {
    evens.push(numsToSort[i]);
  } else {
    odds.push(numsToSort[i]);
  }
}
console.log({ evens, odds });
 
function generateMeals(numberOfMeals) {
  const proteins = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
  const grains = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
  const vegetablesOpt = [
    "peas",
    "green beans",
    "kale",
    "edamame",
    "broccoli",
    "asparagus",
  ];
  const beverages = ["juice", "milk", "water", "soy milk", "soda", "tea"];
  const desserts = [
    "apple",
    "banana",
    "more kale",
    "ice cream",
    "chocolate",
    "kiwi",
  ];
 
  const maxPossibleMeals =
    proteins.length *
    grains.length *
    vegetablesOpt.length *
    beverages.length *
    desserts.length;
 
  if (numberOfMeals > maxPossibleMeals) {
    throw new Error(
      `Cannot generate ${numberOfMeals} unique meals; max is ${maxPossibleMeals}.`
    );
  }
 
  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
 
  const meals = [];
  const seen = new Set();
 
  while (meals.length < numberOfMeals) {
    const meal = {
      protein: randomItem(proteins),
      grain: randomItem(grains),
      vegetable: randomItem(vegetablesOpt),
      beverage: randomItem(beverages),
      dessert: randomItem(desserts),
    };
    const key = JSON.stringify(meal);
    if (!seen.has(key)) {
      seen.add(key);
      meals.push(meal);
    }
  }
 
  return meals;
}
console.log(generateMeals(3));
 
 
//section 6:
 
function getProperties(obj) {
  return Object.keys(obj);
}
console.log(getProperties({ name: "Orange", age: 5 })); // ["name", "age"]
 
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties({ name: "Orange", age: 5 })); // 2
 
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
 
function uppercaseValues(obj) {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = String(obj[key]).toUpperCase();
    }
  }
  return result;
}
console.log(uppercaseValues({ city: "amman", country: "jordan" }));
 
function removeNullProperties(obj) {
  const result = {};
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      obj[key] !== null
    ) {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(removeNullProperties({ a: 1, b: null, c: "hi" }));
 
function sortedPropertyNames(obj) {
  return Object.keys(obj).sort();
}
console.log(sortedPropertyNames({ zebra: 1, apple: 2, mango: 3 }));
