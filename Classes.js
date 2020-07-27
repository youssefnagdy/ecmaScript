/**
 * Created by YoussefNagdy on 7/22/2020.
 */
/*

 syntactic sugar of the way we do prototype and inheritance in js
 classes simply make it easier implement inheritance
 and create objects based on blueprints

 so in es5 these blueprints are called function constructor
 and we added method to their prototype properties
 in order to make all the  instances created through
 a function construction inherit these methods

 */
//ES5
var Person5 = function (name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
/*
  the way we make the instances inherit the CalcAge methods
 */

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var youssef5 = new Person5('youssef',1995,'programmer');

//ES6 Classes
/*
   Each class Declaration must have constructor

   You can Static Method With Classes
   it's a method simply attached to a class
   but not inherited by class instances
   but objects that you create through that class


   Class definition are not hoisted
   we can only add methods to classes
   but not properties 




 */
class Person6 {
    constructor (name,yearOfBirth,job)
    {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // TO Add Method To a class
    calcAge()
    {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    //Static Method
    static greeting()
    {
        console.log('Hey There !');
    }
}

var omar = new Person6('omar',2001,'Student');
omar.calcAge();

Person6.greeting();
