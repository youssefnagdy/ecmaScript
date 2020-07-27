/**
 * Created by YoussefNagdy on 7/17/2020.
 */
/*
   new Operator
   way to expend Element of an array
   in places like arguments and functions Calls

 */

//What Expend Element Mean
//Create Simple Function which simply adds 4 values

function addFourAages(a , b ,c ,d) {
    return a + b + c + d;
}

var sum1 = addFourAages(18 , 13 , 12 , 21);
console.log(sum1);
/*
  Now imagine we had these four numbers
  in an array instead of four different Variables
  how pass the entire array into that function

  Let's Start With Es5 example

  applay method what is does is to recive an array
  and it calls the function that the apply method
  is to used on using the elements of the array
  as the arguments

  its take the ages2 array
  and call addFourAges function using elements of the array
  18,13,12,21 as the arguments


  */

//ES5
var ages = [18  , 13 , 12 , 21];
var sum2 = addFourAages.apply(null,ages);
console.log(sum2);


//ES6
/*
   This what Expending Means ...
   what this operator here does
   is to expend this array into it's compounds
   so in this case 18,30,12,21

 */
const sum3 = addFourAages(...ages);
console.log(sum3);

/*
  And there is many use cases
  example joins arrays
  imagine you have 2 arrays

 */
const youssefFamily = ['john' , 'jane' , 'mark'];
const omarFamily = ['youssef' , 'eman' , 'yassin']

// Joins
/*
  Simply you take the elements out from youssef family
  and [...PutThemHere,]
  of course with spread operator
  next we do the same thing with omarFamily
  take element out and but them beside the youssef family
  [...youssefFamily-Elements,...omarFamily-elements]
  finally we got one big array [HaveTheElementsFromBothArrays]

  of course if you want add new element to the new array
  you put it in the middle [...yousseffamily,'NewElement',...omarFamily]
 */
const bigFamily = [...youssefFamily,'Hany',...omarFamily];
console.log(bigFamily);


/*
   use case 2
   you can use spread operator with another
   Structure Not just Array
   but for Example Also with NodeList

   And Remember the node list is what queryselectorAll returns


 */

//Es5
const h = document.querySelector('h1');
const Boxes1 = document.querySelectorAll('.box');
const all = [h , ...Boxes1];

//Convert NodeList To Array
Array.from(all).forEach(cur=>cur.style.color="purple");







