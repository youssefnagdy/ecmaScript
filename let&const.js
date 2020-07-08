/**
 * Created by YoussefNagdy on 7/9/2020.
 */

/*
 With es5 var you can Mutated Values
 With let You can Mutated Values Also
 but The Differ Var has a Function Scope
 let has Block Scope
 Const Immutable

 */


//Es5
var name5 = 'youssef';
var age5  = 25;
name5 = 'youssef hany';
console.log(name5);


//Es6
let name6 = 'youssef';
const age6 = 25;
name6 = 'Youssef Hany'; /* of course you can change value with let */
// age6 = 24; /* you can't change value with const */
console.log(name6);

/* Ex-2 */
//Es5
function driversLicence(PassTest) {
    if(PassTest)
    {
        /*
          use it before declare it and got undefined
         */
        // console.log(firstName);
        var firstName = "Youssef";
        var yearOfBirth = 1995;
        console.log(
            firstName + "born in ." + yearOfBirth +
            " Allowrd To Drive a Car."
        )
    }
}
driversLicence(true);

//ES6
function driversLicence6(PassTest) {

    /*
     use it before declare it and got an error
     Cannot access 'firstName' before initialization
     */
    // console.log(firstName);

    //declare the vars here let,const to can use them any where
    let   firstName = "Youssef";
    const YearOfBirth = 1995;
    if(PassTest)
    {
        /*
        with theses vars here and console outer
        the if block scope and u will get an error

         let   firstName = "Youssef";
         const YearOfBirth = 1995;
         */
        console.log(
            firstName + "born in ." + YearOfBirth +
            " Allowrd To Drive a Car.");

    }

    /*
     console.log(
     firstName + "born in ." + yearOfBirth +
     " Allowrd To Drive a Car.");
     */

}
driversLicence6(true);
/*
  Is Es5 function if you put the console.log out the if
  block the function will still work

  In Es6 function if you try to make the samething
  you will get an error cause the let,const have
  a blocked scope not a function scope
  that means you must use the variables with const,let
  between the Curly-Braces {} for if Condition.

  the Solution is to use the variables let,const
  outside the if block
  with them in function block

  if you try to use firstname var in es5 before the declaration
  u will get undefined based on the execution-context

  if you try to do the same with es6 vars you will get
  an error cuz Technical Term calls temporary dead zone


*/


//Es6
// let i = 30;
// for(let i=0;i<5;i++)
// {
//     console.log(i);
// //output 0,1,2,3,4
// }
// console.log(i); /* output 30 */

// Es5
// var b = 30;
// for(var b=0;b<5;i++)
// {
//     console.log(b);
// }
// console.log(b);