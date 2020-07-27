/**
 * Created by YoussefNagdy on 7/11/2020.
 */

/*
  we know function is a special type of object
  the function inherit methods from function
  constructor object just like arrays
 e

  we will talk about powerful call,apply,bind
  methods

  these methods allow us to call a function inset to this
  variables manually

inside youssef object we have function to present himself
and this function has two styles formal style
and friendly style

now we have another object called omar
and assume you want to use presentation method
in omar object and isn't have this method
we can use call-method to do this
call(firstArgument,
firstArgument : always to set this Variable
if set this variable to omar
the this variable in youssef this.name , this.job
not longer belong to youssef

there is similar method called Apply
and the only difference is the this argument
and other argument will set in an array


the bind method is very similar to call method too
the difference is doesn't immediately call a function
but instead it generate a copy of the function
so you can store it somewhere
and the bind preset arguments


 */

var youssef = {
    name :'youssef',
    age:24,
    job:'Programmer',
    presentation:function (style,timeOfDay) {
        if(style === 'formal')
        {
            console.log("Good " + timeOfDay + ' ,Ladies and Gentlemen I\'m  ' +
            this.name + 'I\m a ' + this.job
            );
        }else if(style === 'friendly')
        {
            console.log(
                "Hey What\'s Up ? I\'m " + this.name +
                 "Have a nice " + timeOfDay
            );
        }
    }
};
var omar = {
    name : 'omar',
    age:19,
    job:'Student'
};
youssef.presentation('formal','morning');

youssef.presentation.call(omar,'friendly','afternoon');

//this not work cuz the presentation method arguments not array
// youssef.presentation.apply('omar',['formal','afternoon']);

var youssefFriendly = youssef.presentation.bind(youssef,
'friendly'
);

youssefFriendly('afternoon');