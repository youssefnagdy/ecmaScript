/**
 * Created by YoussefNagdy on 7/9/2020.
 */

/*
   this-keyword:-

 */

//ES5

var box5 = {
  color:'green',
  position: 1,
    /* Attach an event handler to elements in html */
  clickMe:function () {
      /* Solution for this hack to Solve it */
      var self = this;
   document.querySelector('.green').addEventListener('click',function () {
       var str = 'This is box number ' + self.position + ' and it is ' +
                  self.color;
       alert(str);
   })
  }
};
/*
  the problem is the this keyword in regular function and its refer
  to its function not a box5

  the solution is  to store this variables outside the eventListener

 */

// box5.clickMe();


/*
  we will use Arrow-Function To solve the hack for this keyword problem
  in Es5;
 */

//Es6
const box6 = {
    color:'green',
    position: 1,
    /* Attach an event handler to elements in html */
    clickMe:function () {
        document.querySelector('.green').addEventListener('click',() => {
            var str = `This is box Number ${this.position} and it Color is : 
                       ${this.color}
                 `;
            alert(str);
        });
    }
};

// box6.clickMe();

const box66 = {
    color:'green',
    position: 1,
    /* Attach an event handler to elements in html */
    clickMe:function () {
        document.querySelector('.green').addEventListener('click',() => {
            var str = `This is box Number ${this.position} and it Color is : 
                       ${this.color}
                 `;
            alert(str);
        });
    }
};

//After tje OOP
function Person(name)
{
    this.name = name;
}
//Es5
Person.prototype.myFriends5 =function (friends) {

    var arr = friends.map(function (el) {
       return this.name + ' is Friends With ' + el
        /* Another way to hack the this Problem */
    }.bind(this));
    console.log(arr);
};

var friends = ['Bob','Jane','Mark'];
new Person('John').myFriends5(friends);


//Es6
Person.prototype.myFriends6 =function (friends) {

    var arr = friends.map(el =>
    `${this.name} is friends with ${el}`
    );
    console.log(arr);
};

new Person('Mike').myFriends6(friends);

















