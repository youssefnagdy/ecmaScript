/**
 * Created by YoussefNagdy on 7/9/2020.
 */

const years = [1999,1998,1997,1995,1996];

//Es5
var age5 = years.map(function (el) {
    return 2016-el;
});
console.log(age5);

//Es6
/*
  one-argument : ArgName => Expression -->1
  if you have more than one-argument you must add () --> 2
  if you have morethan one line you must use curlyBracese {}

  finally There is 3 ways to write ArrowFunctions
  a - One Argument.
  b-  if you have morethan one Argument.
  c-  if you have morethan one line of code you must add {}Curly-Braces
      and return keyword.
 */

let age6 = years.map(el=>2016-el);
console.log(age6);

/*
  map have access to current index and current Element and Array-itSelf
 */
age6 = years.map((el,index) => `
Age Element ${index + 1} : ${2016-el};
`);
console.log(age6);

age6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age Element ${index - 1} : ${age}.`
});
console.log(age6);