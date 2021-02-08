// Part 1
// Print each array value and the sum so far

var testArr = [6,3,5,1,2,4];
var sum = 0;

for(var i = 0; i < testArr.length; i++){
    num = testArr[i];
    console.log("num: ",num);
    sum = sum + num;
    console.log("sum: ",sum);
}

// Multiply each value in the array by its array position
console.log("----product exercise----")

var product = 0;
var array2 = [];

for(var i = 0; i < testArr.length; i++){
    product = i*testArr[i];
    console.log("index: ", i);
    console.log("number: ", testArr[i]);
    console.log("product: ", product);
    array2.push(product);
}

console.log(array2);