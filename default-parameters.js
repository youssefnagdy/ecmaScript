/**
 * Created by YoussefNagdy on 7/21/2020.
 */

/*
   very straightForward Concept
   we use it when ever we want one or more
   parameters of a function to be preset
   so we want them to have Default Value

 */

//ES5

function youssefPerson(fname,yearOfBirth,lname,nationality) {

    //Ternary Operator
    //Ternary Operator
    lname === undefined ? lname = 'Hany' : lname = lname;
    nationality === undefined ? nationality = 'Egyptian' : nationality = nationality;


    this.fname = fname;
    this.lname = lname;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

/*
 So js allows us to call any function
 without specify all arguments
 so in this case we only specify 2 args
 and js will assign UnDefined the others


 if you call omar in the console u will get
 undefined value to lname and nationality
 what if we want to set default to these parameters

 */
var omar = new youssefPerson('Omar' , 2001);
var emily = new youssefPerson('Emily' , 1993 , 'Diaz' , 'Spanish');


//ES6
/*
  simply you set default by assign value to the parameters
  lastname = 'hany'
 */
function YousserPerson6(
    firstName,
    lastName='hany'
    ,yearOfBirth,
    nationality='Egyptian'
)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var omar6 = new youssefPerson6('Omar' , 2001);
var emily6 = new youssefPerson6('Emily' , 1993 , 'Diaz' , 'Spanish');