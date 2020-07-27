/**
 * Created by YoussefNagdy on 7/10/2020.
 In js there is Primitive Values and Objects
 */
/*
    Object-Oriented Programming
    -Objects interacting with one another through
     methods and properties
    - used to store data , structure application into modules
      and keeping code clean

      the Problem :-
      var youssef = {
      name:'youssef',
      yearOfBirth:1995,
      isMarried: false
      }
      var omar =
      {
      name:'omar',
      yearOfBirth:2001,
      isMarried:false
      }
      this is a bad way to make same object with different Data

      you can make Person Object
       ------------
          Person
       ------------
           name
           job
       calculateAge()
       ------------
      -u can use as a blueprint
      in many language this is called a class
      but in js u can call it Constructor-Prototype
      with this constructor you can make many instances
      like Youssef,Omar,hany


      *** inheritance
         One Object is based on another Object.

         imagine you have an Athlete object and its a person too
 -----------------
 Athlete
 -----------------
 Olympics
 OlympicMedals
 allowedOlympics()
 -------------------
 why repeat the same stuff if you have a person constructor

you can inheritance from person object.
 ------------
 Person
 ------------
 name
 job
 calculateAge()
 ------------
       |
       |
       |
       |  INHERITANCE
       |
       ^
 -----------------
 Athlete
 -----------------
 Olympics
 OlympicMedals
 allowedOlympics()
 -------------------

Javascript is a prototype based Language which means
you inheritance by something called ProtoType
in practice that mean every object has a prototype

* inheritance is make Possible through the prototype Property
  That Every Object Has



How Does inheritance Actually Work ? Behind The
Person is the Constructor
and youssef is Instance
if we want to make youssef inheritance property or Method
from the person object we have to add that property or method
to the person prototype property
 ----------
 - Person -
 ----------
 |
 |
 --------------
 - Prototype  -
 - ------------
 -  CalcAge() -
 - ------------
 So , Prototype Property of an object is where we put methods
 and properties that we want other objects to inherit

 Person Prototype is not the Prototype of person itself
 but for all instances like youssef
 so in other word the person type property is the prototype of
 youssef
 the person object itself is an instance of bigger Constructor
 which is object-object


       ___________
         Object
       ___________
            |
    ------------------
        Prototype

      hasOwnProperty()
      isPrototpyeOf()
       constructor()
       toString()
          .
          .
          .
       valueOf()
  ------------------
  each object you create an instance from object-constructor
  with bunch of methods and properties and person object
  use them and the youssef object also inherit this methods

  and that is Explain of Prototype Chain.
  and it make all the inheritance Possibles
  How it works ?

  when you try to access a certain method or property
  on object js will first try to find this method on that exact object
  but if it can't find it , it will look in object Prototype
  it's parent
  if the method is still not there its continues to normal prototype
  which is null


Summary:-
- every Js object has a prototype Property , which makes inheritance
  possible in JavaScript;
- the prototype property of an object is where we put methods and
  properties that we want other object to inherit;
-The Constrictor's Prototype property is not the prototype of the
 constructor itself , its the prototype of all instances that are
 created through it.
-when a certain method or property is called , the search starts in the
 object itself , and if it cannot be found , the search moves on to the
 object's prototype this continues until the method is found:ProtoType Chain

  */
