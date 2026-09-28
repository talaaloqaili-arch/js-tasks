//Basic
//1
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));
//2
function AlphabeticalOrder(str) {
    let arr= str.split("");
    arr.sort();
    return arr.join("");
}
console.log(AlphabeticalOrder('hello'))
//3
function factorial(n){
    let result=1;
    for( let i=1 ;i<=n ;i++) result=result*i;
    return result;

}
console.log(factorial(8));
//4
function oddEven(num)
{
    if(num%2==0)return "Even";
    else return "odd";
}
console.log(oddEven(9));
//5
function addUp(num){
    let total =0;
    for( let count=num ;count>=0 ; count--)total=total+count;
    return total;

}
console.log(addUp(8));
//6
function minMaxLengthAverage(arr){
    let min = num[0];
    let max=num[0];
    let sum= 0;
    for(let index=0 ; index< num.length;index++){
        if(num[index]< min) min=num[index];
        if(num[index]>max ) max=num[index];
        sum=sum+num[index];
    }
    let avg =sum/num.length;
    return [min , max , Number.length , avg];
}
console.log(minMaxLengthAverage([7,13,3,77,100]));
//7
function countWords(sentence){
    let wordArr= sentence.split(" ");
    return wordArr.length;

}
console.log(countWords('hello from CodingAcademy!'));
//8
function MultiplyByLength(num){
    let len=FileList.length;
    let newList=[];
    for( let n=0 ; n< newList.length ; n++)
        newList.push(list[n]*len);
    return newList;
}
console.log(MultiplyByLength([4, 2, 5]));
//9
function checkEnding(firstStr, secondStr){
    let firstLen = firstStr.length;
    let secondLen = secondStr.length;
    let ending = firstStr.slice(firstLen - secondLen, firstLen);
      return ending === secondStr;
}
console.log(checkEnding("CodingSchool", "Ac"));
//10 
function doubleChar(word){
    let double="";
    for( let i=0 ; i< word.length ; i++)
        doubled = doubled + word[i] + word[i];
  return doubled;
}
console.log(doubleChar('Coding'));
 //11
 function findIndex(arrList , target){
    for(let j=0 ; j< arrList.length;j++){
        if(arrList[j]===target)return j;

    }

    return -1;
 }

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));