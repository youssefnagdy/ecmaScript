 /**
 * Created by YoussefNagdy on 7/10/2020.
 */
/*
  there is another way to create object & inheritance
  we first define an object that act as a prototype
  and then create new object based on that prototype

 */


//Object.create
var personProto = {
    calculateAge:function () {
        console.log(2020-this.yearOfBirth);
    }
};

/*
  The object is Empty and u will fill it
 */
var youssef = Object.create(personProto);
 youssef.name = 'youssef';
 youssef.yearOfBirth = 1995;
 youssef.job = 'Programmer';

 var omar = Object.create(personProto,
     {
         name:{value:'omar'},
         yearOfBirth:{value:2001},
         job:{value:'student'}
     });