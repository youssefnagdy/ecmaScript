/**
 * Created by YoussefNagdy on 7/11/2020.
 */
/*
  imagine that you want to build a little game
  where we win the game it a rendom scroe from
  0 to 9 greater or equal to 5 , and lose smaller
  but we want to keep score hidden this game

  so first thing you will think to store in function
  because the vars inside the function can't be access outside
  the function
 */

function game() {
    var score = Math.random() *10;
    console.log(score >= 5)
}
game();

/*
  there are a few problems with this
  if the only purpose is to hide the score variable from the
  outside so which means create a private variable
  then we don't need to declare whole function with a name
  then call it we can do this in a better way and that why use
  an immediately invoked function expression

 */
(function (goodluck) {
        var score = Math.random() *10;
        console.log(score >= 5 - goodluck)
})(5);

//if u will try to print the score u will get an error
console.log(score);

/*
  if  you try to write a function without name starts with
  function keyword the js will consider it as a function declation
  and it will throw an error
 function () {

 }
 so basically u need to trick the parser
 and make it Believe what you have here is an expression
 and not a declare
 the solution is to wrap entire thing into () cuz
 in js what in {} can't be a statement
 and like this js will know that it should teat it as an expression
 and after that u want to invoke the function
 so the reason for use iife is to create data-Privecay
 and you can add arguments to iife
 and pass it in ().

 Create scope hidden from outside scope.
 */
