/**
 * Created by YoussefNagdy on 7/21/2020.
 */
/*
  allow us to pass undetermined number of arguments into a function
  and use these arguments in that function

  rest look exactly the same spread operator
   use the same notation with 3 dots ...
   but actually rest is oppasite x  of spread operator

   and that's because S-operator takes an array
   and transform set into single values

   while rest-P recevie a couple of single values
   and transform them into an array
   when u call a function with multiple pramerters

 */

/*
   So suppose you want to create a function
   that receives undetermined number of years
   and then print to the console
   whither each person corresponding to these years
   is a full age or not

  */

//ES5 Way
/*
  if you want to receive an undetermined number of arguments
  simply you don't define any parameters to a function

  and just use the arguments keyword
  is very similar to this variable

 */
function isFullAge5() {
    //Special variable have access to in all functions
// console.log(arguments);

    // How To Convert args to array to loop through it
    // with this little hack
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2020 - cur) >= 18);
    })
}

/*
   You will got a something in console similar to array
   [1990,1999,1996]
   the __proto__ is Object

  after use hack way to convert args prototype to array
  you will get true true true false
 */
isFullAge5(1990,1999,1996,2015);


//ES6
/*
  now instead of haven't no parameters
  we use rest parameters operator

  as soon as we call the function
  its transform the arguments into an array
  and then pass it into this function
 */
function isFullAge6(...years) {
    // But it will back an array not an object
    // So that's very handy so we don't have to convert it to array like we did in es5 it's already an array
    // console.log(years);

    years.forEach(cur => console.log((2020-cur) >= 18));
}
isFullAge6(1990,1999,1996,2015);


/*
  The Big Different Between the spread operator
  and rest parameters is actually
  deplays in which we use each of them

  so the spread operator is used in a function call
  while the rest operator is used in function declaration
  to accept unknown number of parameters

 */

/////////////////////////////////////////////////////////////
/*
 enhancement the function change the 18 and make it a parameter
 so imagine it should be 21 in countries and 18 in another

 */

//Es5
/*
  we have a problem the limit will be part of arguments
  but slice method will help us here cuz
  here job is to cuz a piece of array
  its easy .call(arguments,1)
  to start from number 1 not 0;
 */
function isFullAge5(limit) {
    //Special variable have access to in all functions

    console.log(arguments);
    // How To Convert args to array to loop through it
    // with this little hack
    //how to cut limit parameter from argsArr
    var argsArr = Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function (cur) {
        console.log((2020 - cur) >= limit);
    })
}
isFullAge5(21,1990,1999,1996);


// If you want to cut Limit parameter with es6
/*
 all you have to do is to put the limit with ...years
 separated by comma ,
 */

function isFullAge6(limit,...years) {
    // But it will back an array not an object
    // So that's very handy so we don't have to convert it to array like we did in es5 it's already an array
    // console.log(years);

    years.forEach(cur => console.log((2020-cur) >= limit));
}
isFullAge6(21,1990,1999,1996,2015);