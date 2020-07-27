/**
 * Created by YoussefNagdy on 7/21/2020.
 */

/*
   New DataStructure Called Map

   What Maps Are in Es6 ?
   vary common use of objects is to use them as
   Has Maps
   which simply means that you maps string keys
   to opertery values

   and we did that a lot earlier in the course
   specially in the basic section
   for more simple youssef object
   then we have sample keys like name,age,job
   and then maps values to them
   like youssef , 24 , programmer
   This Called a HashMap
   and up until es6 we had to use objects for that
   but know in es6 we have something better
   and that's maps
   so a map is a new key value data strucure in es6
   one of big differences is that in maps
   we can use any thing for the keys
   so in object a limited to strings
   but in map we can use any kind of primitve value
   like numbers / strings / booleans
   or can even use function or objects
   as keys which it's really cool and really big deal

 *Most Basic Method That you can use to Manipulate maps
   -set
   -get
   -delete
   -size
   -has for check
   -clear() everything


 */

/*
   1-create a variable called question new Map()
   2- to add elements to it we use set method
 */

const question = new Map();
// How To define new key Value Pair
question.set(
    'question',
    'What is the official name o' +
    'f the latest major javascript version');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct' , 3);

question.set(true,'Correct Answer :D');
question.set(false,'Wrong Please Try Again');

//Try to hit question in Console

//Retreive Data From that Map
console.log(question.get('question'));
// How to get the length
console.log(question.size);

//Delete Data Or Check if Certain key is there

// question.delete(4);

//Check
if(question.has(4))
{
    // question.delete(4);
}
//Remove Every Thing
// question.clear();


/*
   You Can Loop Through Map
   another thing we can't do with objects

 */

question.forEach((value,key) => console.log(`
This is Key ${key} amd it 's set to ${value}
`));

/*
   what if you want get access to the value not
   only the key you must use destructing
   and this is another useful use for destructing

   all you need to use entries() method
   to return all the key value pairs

   and use destructing [key,value]
   to store the keys and the values
   into separate variables

 */
for (let [key,value] of question.entries())
{
 console.log(` This is Key ${key} amd it 's set to ${value}`)
}

/*
   instead of print all elements
   list print all answers only
   the way to do this
   is to say that only one print value
   if the key is a number
   so that's the beauty of having custom dataType
   here for the key

 */

for (let [key,value] of question.entries())
{
   if(typeof(key) === 'number'){
       console.log(`Answer ${key} : ${value}`);
   }
}

// the prompt accept only string so i use parseInt to covert it to Number
const ans = parseInt(prompt('write The correct answer'));

/*
  ok we want to print the value of true key
  if the answer is correct
  or false if the answer is false

  we do that with regular way if else
  but you're not we can the advantage of store
  the values to the keys of true and false
  as boolean
 */

// i use the true key with put the condition in get
console.log(question.get(ans === question.get('correct')));


/*
 why maps is better than hash maps
 there're couple of reasons
 Summarize what we learned
 1- we can use anyThing as keys
 2- maps are iterable you can loop through them
 3- easy to get the size of a map using size property
 4- easily add and remove data from map
 */







