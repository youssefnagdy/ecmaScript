/**
 * Created by YoussefNagdy on 7/10/2020.
 */




//The way you can Write Object Literal
var youusef = {
    name:'youssef',
    yearOfBirth:1995,
    job:'Programmer'
};

/*
  In js there is many ways to create blueprint
  most uses way it something call Function Constructor
  very common pattern and pattern is Standard Way
 */

//Function Constructor
var Person   = function (name,yearOfBirth,job) {
    this.name  = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
// Inheritance
/*
 add all method and properties to prototype property
 */
Person.prototype.calculateAge =
    function () {
        console.log(2020 - this.yearOfBirth);
    };
Person.prototype.lastName = "Smith";

//How to create Youssef Object
//That called Instantiation
var youssef = new Person('Youssef',1995,"Programmer");
youssef.calculateAge();

var omar = new Person('Omar' , 2001 , 'Student');
omar.calculateAge();


