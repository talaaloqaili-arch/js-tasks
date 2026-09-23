//Basic
//1
let x=1;
while(x<=10){
    console.log(x);
    x++;
}
//2
let Arr=[1,2,3,4,5];
for(let i=0 ; i< Arr.length;i++){
    console.log(Arr[i])
}
//3
for(let a=0 ;a<=10 ;a++){
    if (a%2==0)console.log(a);
}
//4
let sum =0;
for(let b=0 ; b<=10 ;b++ ) sum=sum+b;
console.log(sum);
//5
let sumArr=[1,2,3,4,5];
let big = sumArr[0];
for(let c=1 ; c< sumArr ;c++){
    if(sumArr[c] > big) big=sumArr[c];
}
console.log(big);
//6
let dataArr = [1,2,3,4,5];
let total2=0;
for( let d= 1 ; d< dataArr.length ;d++)total2=total2+dataArr[d];
let avg=total2/dataArr.length;
console.log(avg);
//7
function findfactorial(num7){
    let fact=1;
    for(let e= 1 ; e<=num7 ; e++)fact=fact*e;
    return fact;
}
console.log(findfactorial(5));
//8
function printFibonacci(limit) {
    let first=0;
    let second=1;
    console.log(first);
    console.log(second);
    for(let f=2 ; f< limit ;f++){
        let next=first+second;
        console.log(next);
        first=second;
        second=next;

    }


}
printFibonacci(10);
// 9. 
function printPrimes(maxNum) {
  for (let g = 2; g <= maxNum; g++) {
    let isPrime = true;
    for (let h = 2; h < g; h++) {
      if (g % h === 0) isPrime = false;
    }
    if (isPrime) console.log(g);
  }
}
printPrimes(20);
//Advanced
//10
let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    console.log(grid[row][col]);
  }
}
// 11
let revArr = [1, 2, 3, 4, 5];
for (let k = revArr.length - 1; k >= 0; k--) {
  console.log(revArr[k]);
}
// 12
let stepArr = [1, 2, 3, 4, 5];
let stepVal = 2;
for (let m = 0; m < stepArr.length; m = m + stepVal) {
  console.log(stepArr[m]);
}
// 13
function findFrequency(arrNums, target13) {
  let count13 = 0;
  for (let q = 0; q < arrNums.length; q++) {
    if (arrNums[q] === target13) count13++;
  }
  return count13;
}
console.log(findFrequency([1, 2, 1, 3, 2, 1], 1));
// 14
const heros = [
  {name: 'Iron Man', power: 'Tech'},
  {name: 'Spider-Man', power: 'Spider abilities'},
  {name: 'Thor', power: 'Godly powers'},
  {name: 'Hulk', power: 'Super strength'}
];
const newHeros = heros.map(function(item, idx) {
  return { hero: item.name, power: item.power, id: idx };
});
console.log(newHeros);
// 15
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function longWords(wordsArr15) {
  return wordsArr15.filter(function(w) {
    return w.length > 7;
  });
}
console.log(longWords(inputWords));

// 16
const numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumSquaredDivisibleBy5 = numbers16.reduce(function(acc, cur) {
  if (cur % 5 === 0) return acc + (cur * cur);
  else return acc;
}, 0);
console.log(sumSquaredDivisibleBy5);