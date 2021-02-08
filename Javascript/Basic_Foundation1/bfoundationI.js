// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

console.log("#1");
function basic_array(){
    var array1 = [];
    for(var num = 1; num <= 255; num++){
        array1.push(num);
    }
    return array1;
}

var array255 = basic_array();
console.log(array255);

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// You may use a modulus operator for this exercise.

console.log("#2");
function even_sum(limit){
    var sum = 0;
    for(var num = 1; num <= limit; num++){
        if(num % 2 == 0){
            sum = sum + num;
        }
        else{
            // do nothing
        }
    }
    return sum;
}

var sum1000 = even_sum(1000);
console.log(sum1000);

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

console.log("#3");
function odd_sum(limit){
    var sum = 0;
    for(var num = 1; num <= limit; num++){
        if(num % 2 == 0){
            // do nothing
        }
        else{
            sum = sum + num;
        }
    }
    return sum;
}

var sum_odd5000 = odd_sum(5000);
console.log(sum_odd5000);

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

console.log("#4");
function arraysum(array2){
    var sum = 0;
    for(var i=0; i < array2.length; i++){
        sum = sum + array2[i];
    }
    return sum;
}

var array_test = [2, 3, 5];
var asumtest = arraysum(array_test);
console.log(asumtest);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

console.log("#5");
function maxArray([array3]){
    var num = 0;
    for(var i = 0; i < array3.length; i++){
        if(array3[i] > num){
            num = array3[i];
        }
        else{
            // do nothing
        }
    }
    return num;
}

var array_max_test = [2, 5, 7, 3];
var maxnum = maxArray([array_max_test]);
console.log(maxnum);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)

console.log("#6");
function array_avg([array5]){
    var sum = 0;
    for(var i = 0; i < array5.length; i++){
        sum = sum + array5[i];
    }
    console.log(sum);
    var arr_avg = sum/array5.length;
    return arr_avg;
}

var array4 = [1,3,5,7,20];
arr4avg = array_avg([array4]); // why do I need to put brackets here?
console.log(arr4avg);          // but not here?

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). 
// Hint: Use 'push' method.

console.log("#7");
function odd_array(){
    var array6 = [];
    for(var num = 1; num < 50; num++){
        if(num % 2 == 0){
            // do nothing
        }
        else{
            array6.push(num);
        }
    }
    return array6;
}

var odd_array1 = odd_array();
console.log(odd_array1);


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).

console.log("#8");
function min_counter([min_ct_array], min_value){ // should I define this variable before writing it into a function?
    var counter = 0;
    for(var i = 0; i < min_ct_array.length; i++){
        if(min_ct_array[i] > min_value){
            counter++;
        }
        else{ // do I have to write else if there is no additional code?
            // do nothing
        }
    }
    return counter;
}

var array7 = [1,3,9,11,4,1,5,12];
var min_arr7 = 4;
var minct = min_counter([array7], min_arr7);
console.log(minct);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
// (e.g. [1,5,10,-2] will become [1,25,100,4])

console.log("#9");
function squareit([array8]){
    var squared_value = 0;
    for(var i = 0; i < array8.length; i++){
        squared_value = array8[i]*array8[i];
        array8[i] = squared_value;
    }
    return array8;
}

var array8_unsquared = [1,5,10,-2]; // I can't just specify the array in the function call?
var square_array = squareit([array8_unsquared]);
console.log(square_array);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

console.log("#10");
function zero_floor([arr_w_negs]){
    for(var i = 0; i < arr_w_negs.length; i++){
        if(arr_w_negs[i] < 0){
            arr_w_negs[i] = 0;
        }
        else{
            // do nothing
        }
    }
    return arr_w_negs; // is this ok to return like this without writing to a new variable? (temp variables)
}

var neg_array = [1,5,-3, 10, -1];
var array9 = zero_floor([neg_array]);
console.log(array9);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the 
// maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

console.log("#11");
function array_stat([stat_array]){
    var stat_avg = 0; // does javascript not have any built in functions?
    var sum = 0;
    var max = 0;
    var min = stat_array[0];
    for(var i = 0; i < stat_array.length; i++){
        sum = sum + stat_array[i];
        if(stat_array[i]>max){
            max = stat_array[i];
        }
        else{
            // do nothing
        }
        if(stat_array[i]<min){
            min = stat_array[i];
        }
        else{
            // do nothing
        }
    }
    var avg = sum/stat_array.length;
    return [max, min, avg];
}

var array10 = [1,5,10,-2];
var arr10_stats = array_stat([array10]);
console.log(arr10_stats);

// Swap Values - Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

console.log("#12");
function value_swap([swap_this_array]){
    var newarray = swap_this_array;
    var num1 = swap_this_array[0];
    var arr = swap_this_array.length;
    var num2 = swap_this_array[arr-1];

    newarray[0] = num2;
    newarray[arr-1] = num1;
    return [newarray];
}

var array11 = [1,5,10,-2];
var arr11_swap = value_swap([array11]);
console.log(arr11_swap);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the 
// array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

console.log("#13");
function dojo_array([dojo_the_zeroes]){
    for(var i = 0; i < dojo_the_zeroes.length; i++){
        if(dojo_the_zeroes[i]<0){
            dojo_the_zeroes[i] = "dojo";
        }
        else{
            // do nothing
        }
    }
    return dojo_the_zeroes;
}

var array12 = [-1, -2, 2];
var arr12_dojoed = dojo_array([array12]);
console.log(arr12_dojoed);
