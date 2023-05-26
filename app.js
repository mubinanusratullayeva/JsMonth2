//1-HOMEWORK

let foo = [1,2,3];
let bar = [4,5,6];
let emptyValue = 0;

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b) => a+b,emptyValue) + arr2.reduce((x,y) => x+y,emptyValue)
}

console.log(arrayPlusArray(foo, bar))