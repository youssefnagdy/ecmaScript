/**
 * Created by YoussefNagdy on 7/16/2020.
 */

/*
    very convenient way to extract data from the dataStructure
    Like object and Array
    So Imagine that we had an array filled with some data
    and that we know when to store each of it's elements
    of that array in a single variable

 */

//ES5
var youssef = ['youssef',24];
/*
  if you want to store the elements in separate variables
  samply have to write one variable for each element
 */
var name5 = youssef[0];
var age5  = youssef[1];

/*
   so now have both elements in separate variables
   imagine we have 10 elements in that array
   Htfdld Tktp kol element Fy variable Law7do Kda;

   So In Es6 we have something called destructuring
   we can Destructure a DataStructure

 */

//Es6
/*
   we Destructure this data structure here using this kind of syntax
   this opposite of constructing data structure

   the left Side const [name,age] is destructuring
   the right side ['youssef',26] is Constructing

 */
const [name,age] = ['youssef',26];
console.log(name);
console.log(age);

const obj = {
    firstName : 'youssef',
    lastName  : 'Nagdy'
};

const {firstName , lastName} = obj;
console.log(firstName);
console.log(lastName);

/*
   if you don't want the variables name to match with key names
 */

const{firstName:fname , lastName:lname} = obj;
console.log(fname);
console.log(lname);

//Es5
/*
   return Multiple Values from a function
   so in easy way than we used before

   in Es5 usually if we had more one value that we want to return from
   a function we would simply return an object

   but with Destructure its become Easier
 */

//ES6
function clacAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age , 65 - age];
}

const[age2,retirement] = clacAgeRetirement(1995);
console.log(age2);
console.log(retirement);