/**
 * Created by YoussefNagdy on 7/10/2020.
 */
/*
  Function is an instance of the object type;
  A function behaves like any other object;
  we Can Store functions in a Variable;
  we can pass a function as an argument to another function
  we can return a function from a function

   ++ First Class Functions
 */


// Passing Functions as Arguments
var years = [1990,1995,1997,1996,2006];

function arrayCalc(arr , fn) {
    var arrRes = [];
    for(var i =0 ;i < arr.length ;i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// Function passed intoFunction Callback Function

function calcAge(el) {
    return 2020- el ;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81)
    {
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

//Callback function calc
var ages = arrayCalc(years, calcAge);
console.log(ages);

var FullAges = arrayCalc(ages,isFullAge);
console.log(FullAges);

var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(rates);