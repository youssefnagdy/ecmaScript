/**
 * Created by YoussefNagdy on 7/16/2020.
 */

/*
   New Methods & New Loop
   form()
   for(  Element   of  ArrName  )
   findIndex
   find
 */


// Use Color Boxes In Html : Selecting Them
/*
  querySelector Return NodeList
 */
const boxes = document.querySelectorAll('.box');

//Es5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur =>
cur.style.backgroundColor = 'yellow'
);

/*
   usually loop through loop we use foreach or map method
   the problem with them is that be actually can't break from them
   and also can't use continue statement

   if you want to use break or continue statement
   u can't use foreach or map and i you want to use
   continue or break you must use simple for loop in es5

 */

//ES5
/*
    imagine u want to change text for box number 1 and 3
    and when the loop comes to box two you skip it.
 */
for(var i = 0 ; i < boxesArr5.length ; i++)
{
    if(boxesArr5[i].className === 'box blue')
    {
        //Skip the iteration
        continue;

        /* if you use break the first box the only one will change and
        the loop will break
        */
        // break;
    }
    boxesArr5[i].textContent = 'I Changed to blue !';
}

//ES6
for(const cur of boxesArr6)
{
 if(boxesArr6.className.includes('blue'))
 {
     continue;
 }
    cur.textContent = 'I Changed to blue !';
}

/*

   we have indexOf method to find elements in array in es5
    supose we have a group of Children one of them is full Age 18!

 */

 //ES5

var ages = [12,17,8,21,14,11];

/*
   return boolean true and false array
   for ages greater than 18 years old

 */
var fullAge = ages.map(function (cur) {
    return cur >= 18;
});
console.log(fullAge);

// Get The Poistion of True Element

console.log(fullAge.indexOf(true)); /**/
console.log(Ages[fullAge.indexOf(true)]);


//ES6
// Find the Index
ages.findIndex(cur => cur >= 18);
// Get the Value
ages.find(cur => cur >= 18);






