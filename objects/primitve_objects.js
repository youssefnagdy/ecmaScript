/**
 * Created by YoussefNagdy on 7/10/2020.
 */

// Primitives Vs Objects



/*
  copy theValue from A to B
  and when change the value of a
  it's not effected
  each of them has own copy of the data
 */
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);



/*
      Objects
  the both Equal
  there is no copy
  there is a new Refer
  point to the sameObject
 */
var obj1 = {
    name:'youssef',
    age:24
};

var obj2 = obj1;
obj1.age = 25;

console.log(obj1.age);
console.log(obj2.age);

//Functions
/*
  the sameThing
  the primitive will Not Changed
  the obj will change the city Value
 */
var age = 24;
var obj = {
    name : 'youssef',
    city : 'Cairo'
};

function change(a,b) {
    a = 30;
    b.city = "giza";
}

change(age,obj);

console.log(age);
console.log(obj.city);


