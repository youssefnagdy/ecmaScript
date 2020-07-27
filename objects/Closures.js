/**
 * Created by YoussefNagdy on 7/11/2020.
 */
/*
  function calculate how many years until retirement
  passed an argument to retirementAge usually equal 65
  this function return another function which calculate the
  years the someone has left

  in anonymous function we use retirementAge argument
  inside it and this argument comes from retirement function
  and also the a variable and two of them declared outside
  the anonymous function
  innerfunction able to use retirementAge and a variables
  of retirement function thats already gone it's aleady return
  but somehow the variables are still there and this is the
  closure

  How Closure Works Behind The Scene

  - an inner function has always access to the variables
    and parameters of its outer function , even after the
    outer function has returned.

    what happen when we call retirement function ?
    the new function gets new execution context
    put on the top of execution stack
    that execution context has an object which stores
    variables the scope chain and this variables
    so lets see the scope chain for retirement function
    which mean the variables that the function has access to
    and remember the scope chain this like the pointer to all the
    vars objects  that the function has access to
    so the function has access to retirementAge-argument
    and a-argument and then the function returns
    after returns now the execution context of the
    retirement function is effectively gone
    and with it the scope chain should be gone
    but no, the secret of closure is that even after the function
    returns and execution context is gone the variable object
    is still there it's not gone still sits in scope chain in
    memory and it can be accessed

    when call youssef() function
    its will put on the top of the stack

    now in the scope chain since innerfunction is wriiten lexically
    in retirement function it get access to the scope
    Scope "youssef()" with retirementAge,a,yearOfBirth,age.
    and now here comes the magic since the variable object
    after retirement function still there the scope chain
    still too its keep working and so can access the variables
    created in the retirement function long after the
    function has completed execution and after execution-context
    is ofcourse gone the current execution-context is closed in
    the variable  object so we can use it
    and that's why its call a closure

    u can't create closure manually that's something really build
    into javascript


 */
//Generic Function
function retirement(retirementAge)
{
     var a = " years left until retirement";
     return function (yearOfBirth) {
         var age = 2020 - yearOfBirth;
         console.log((retirementAge - age +a));
 }
}

var me = retirement(65);
me(1995);
//or
retirement(65)(1995);

function interviewQuestion(job) {

    var designer = "can you please explain what ux design is ?";
    var teacher  =" What subject do you teach , ";
    return function (name) {
        if(job==="designer")
        {
            console.log(name + designer);
        }else if(job === "teacher")
        {
            console.log(name + teacher);
        }else{
            console.log("Hello " + name + " what can you do ?");
        }
    }
}

var teacherQuesion = interviewQuestion('teacher');
teacherQuesion('jo');

interviewQuestion('backend')('ahmed');