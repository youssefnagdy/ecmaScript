/**
 * Created by YoussefNagdy on 7/9/2020.
 */
/*
 what is the major changes happened in string
 1- Template-Literals Backtics and ${}
 2- new built-in functions
    a- startswith()
    b- endswith()
    c- includes()
    d- repeat()
   All of Them Boolean.
 */


let firstName = 'youssef';
let lastName = 'hany';
const yearOfBirth = 1995;
function calcAge(year) {
    return 2020 - yearOfBirth;
}

/*
  The problem was if you want
  to print multiple vars
  with plain text u must use a
  concat + sign
 */
//Es5
console.log(
    'My firstName: ' + firstName +
        ' My lastName: ' +lastName +
        ' My age:' + calcAge(yearOfBirth)
);


//Es6 By BackTic & ${} it's being easier

console.log(`
 MyfirstName: ${firstName} MyLastName: ${lastName}
 MyAge: ${calcAge(yearOfBirth)}
`);

//New built-in function in Es6
console.log(firstName.startsWith('y'));
console.log(lastName.endsWith('y'));
const fullName = `${firstName} ${lastName}`;
console.log(fullName.includes('ss'));
console.log(firstName.repeat(3));