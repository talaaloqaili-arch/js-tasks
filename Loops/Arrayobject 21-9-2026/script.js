//1
const person={name:"Adam" ,age :25 , gender:"male"};
console.log(person.name , person.age , person.gender);
//2
const person1={name:"adam" , age: 25};
person1.gender="male";
console.log(person1);
//3
const person2 = { name: "Adam", age: 25 };
console.log(person2.name);
//JS Array 
//1
const num1=[1,2,3,4,5];
num1.forEach(num=> console.log(num));
//2
const fruits =["banana", "cherry", "apple"];
console.log(fruits.sort());
//3
const fruits2 = ["apple", "banana", "cherry"];
console.log(fruits2.reverse());
//4
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
console.log(arrA.concat(arrB));
//5
const nums2 = [1, 2, 3, 4, 5, 6];
console.log(nums2.slice(2,4));
//6
const nums3 = [1, 2, 3, 4, 5];
const removed = nums3.splice(2, 1, "a", "b");
console.log(nums3);
console.log(removed);
//7
const nums4 = [1, 2, 3, 4, 5];
console.log(nums4.indexOf(3));
//8
const nums5 = [1, 2, 3, 4, 5];
console.log(nums5.join(",")); 
//9
const str1 = "1,2,3,4,5";
console.log(str1.split(","));
//10
const nums6 = [1, 2, 3, 4, 5];
console.log(nums6.length); 
//11
const nums7 = [1, 2, 3, 4, 5];
for (const n of nums7) {
  console.log(n);
}
//12
const nums8 = [1, 2, 3, 4, 5];
console.log(Array.isArray(nums8)); // true


