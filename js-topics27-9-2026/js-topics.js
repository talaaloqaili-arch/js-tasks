// Exercise 1: Hoisting & Scoping Challenge
console.log("--- Exercise 1 ---");
console.log(nameVar); // Output: undefined due to var hoisting
var nameVar = "Jone";

function testHoistingScope() {
    var x = 10;
    if (true) {
        var y = 20; // var is function-scoped, accessible outside the if block
    }
    console.log("Variable y inside function:", y);
}
testHoistingScope();


// Exercise 3: Array Methods Playground
console.log("--- Exercise 3 ---");
let studentNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Ian", "Julia"];
let moreStudents = ["Kevin", "Luna"];
let combinedStudents = studentNames.concat(moreStudents);
combinedStudents.sort();
combinedStudents.reverse();
let hasAli = combinedStudents.includes("Alice");
console.log("Includes Alice:", hasAli);

combinedStudents.forEach((student, index) => {
    console.log(`Index ${index}: ${student}`);
});


// Exercise 5: JSON Converter
console.log("--- Exercise 5 ---");
let product = {
    id: 1,
    name: "Smartphone",
    price: 499,
    category: "Electronics",
    available: true
};

let jsonString = JSON.stringify(product);
console.log("JSON String:", jsonString);

let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

try {
    let invalidJson = "{ invalid: json }";
    JSON.parse(invalidJson);
} catch (error) {
    console.log("Caught JSON parse error:", error.message);
}


// Exercise 7: Arrow Function Transformation
console.log("--- Exercise 7 ---");
const square = num => num * num;
const isEven = num => num % 2 === 0;

console.log("Square of 5:", square(5));
console.log("Is 4 even?", isEven(4));

let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(n => n * 2);
let evens = nums.filter(n => n % 2 === 0);
let totalSum = nums.reduce((acc, curr) => acc + curr, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Total Sum:", totalSum);


// Exercise 10: Dynamic Student Report
console.log("--- Exercise 10 ---");
let reportStudents = [
    { id: 1, name: "Sam", grade: 85 },
    { id: 2, name: "Dana", grade: 58 },
    { id: 3, name: "Omar", grade: 92 }
];

reportStudents.forEach(student => {
    let status = student.grade >= 60 ? "Pass" : "Fail";
    let report = `
    Student Report:
    - Name: ${student.name}
    - ID: ${student.id}
    - Grade: ${student.grade}
    - Status: ${status}
    `;
    console.log(report);
});


// Exercise 13: Web Storage Methods (Simulation)
console.log("--- Exercise 13 ---");
localStorage.setItem("theme", "dark");
localStorage.setItem("userRole", "Admin");
console.log("Retrieved theme:", localStorage.getItem("theme"));
console.log("Storage length:", localStorage.length);
console.log("First key:", localStorage.key(0));
localStorage.removeItem("theme");
// localStorage.clear();

// Exercise 2: Constructor Functions & Prototypal Inheritance
console.log("--- Exercise 2 ---");
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

function Employee(name, age, employeeId, position) {
    Person.call(this, name, age);
    this.employeeId = employeeId;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
    return `Hello, I am ${this.name}, working as a ${this.position}`;
};

let emp1 = new Employee("John", 30, "E101", "Developer");
let emp2 = new Employee("Sara", 28, "E102", "Designer");
console.log(emp1.greet());
console.log(emp2.greet());


// Exercise 4: Student Records Manager
console.log("--- Exercise 4 ---");
let studentRecords = [
    { id: 1, name: "Alex", grade: 78 },
    { id: 2, name: "Chris", grade: 90 },
    { id: 3, name: "Jordan", grade: 65 }
];

// Add, remove, and replace using splice
studentRecords.splice(1, 0, { id: 4, name: "Taylor", grade: 88 });

// Slice a portion of the array
let copiedPortion = studentRecords.slice(0, 2);
console.log("Sliced portion:", copiedPortion);

// Sort by grade
studentRecords.sort((a, b) => a.grade - b.grade);
studentRecords.forEach(s => console.log(`${s.name}: ${s.grade}`));


// Exercise 8: Destructuring & Default Parameters
console.log("--- Exercise 8 ---");
let userProfile = {
    name: "Michael",
    email: "michael@test.com",
    age: 25,
    address: "New York"
};

let { name: profileName, email: profileEmail } = userProfile;
console.log(profileName, profileEmail);

let userSkills = ["JavaScript", "HTML", "CSS"];
let [primarySkill, secondarySkill] = userSkills;
console.log(primarySkill, secondarySkill);

function createUser(username = "Guest", role = "Subscriber") {
    return { username, role };
}
console.log(createUser());


// Exercise 11: Classes & Inheritance
console.log("--- Exercise 11 ---");
class UniversityPerson {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class StudentClass extends UniversityPerson {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }
    getInfo() {
        return `Student -> ${super.getInfo()}, ID: ${this.studentId}`;
    }
}

let studentInstance = new StudentClass("Ray", "ray@univ.edu", "S999");
console.log(studentInstance.getInfo());


// Exercise 12: JavaScript Modules (Example structure)
console.log("--- Exercise 12 ---");
// Note: In real setup, use export in students.js and import in app.js with type="module"
const studentModuleData = [{ id: 1, name: "Module Student" }];
console.log("Modules concept demonstrated successfully.");


// Exercise 14: Local Storage To-Do List Logic
console.log("--- Exercise 14 ---");
let tasksList = [
    { id: 1, text: "Finish assignment", completed: false }
];
localStorage.setItem("tasks", JSON.stringify(tasksList));
let loadedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log("Loaded tasks from storage:", loadedTasks);

// Exercise 6: Product Inventory Analyzer
console.log("--- Exercise 6 ---");
let inventoryA = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", quantity: 4 },
    { id: 2, name: "Chair", price: 80, category: "Furniture", quantity: 15 }
];
let inventoryB = [
    { id: 3, name: "Mouse", price: 25, category: "Electronics", quantity: 50 }
];

let fullInventory = inventoryA.concat(inventoryB);
fullInventory.sort((a, b) => a.price - b.price);

let categoriesList = ["Electronics", "Furniture", "Stationery"];
console.log("Categories includes Furniture:", categoriesList.includes("Furniture"));

fullInventory.splice(0, 1); // Remove cheapest item
let topFiveProducts = fullInventory.slice(0, 5);
console.log("Top products:", topFiveProducts);


// Exercise 9: Spread, Rest, Map & Set Challenge
console.log("--- Exercise 9 ---");
let groupA = [101, 102, 103];
let groupB = [103, 104, 105];
let combinedGroups = [...groupA, ...groupB];

// Remove duplicates using Set
let uniqueStudentsSet = new Set(combinedGroups);
console.log("Unique Student IDs (Set):", uniqueStudentsSet);

// Rest parameter function
function calculateAverageGrade(...grades) {
    if (grades.length === 0) return 0;
    let sum = grades.reduce((acc, val) => acc + val, 0);
    return sum / grades.length;
}
console.log("Average Grade:", calculateAverageGrade(95, 85, 90));

// Map collection usage
let gradesMap = new Map();
gradesMap.set(101, 95);
gradesMap.set(102, 88);
gradesMap.set(101, 97); // Update entry
gradesMap.delete(102); // Delete entry
console.log("Map size:", gradesMap.size);
console.log("Map converted to array:", Array.from(gradesMap));


// Exercise 19: Cookie & Preferences Manager (Simulation)
console.log("--- Exercise 19 ---");
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Simulating setting preferences
setCookie("themePreference", "dark", 7);
setCookie("langPreference", "en", 7);
console.log("Cookies preferences simulation executed.");