/**
 * Created by YoussefNagdy on 7/28/2020.
 */

/*
   implement inheritance between classes using sub-classes
   SuperClass , SubClass

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

var Athlete5 = function (name,yearOfBirth,job,olympicGames,medals) {
    Person5.call(this,name,yearOfBirth,job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};


Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedel =
    function () {
        this.medals++;
        console.log(this.medals);
    };
var JoAthlete5 = new Athlete5('Youssef',1995,'Boxer',3,10);
JoAthlete5.calculateAge();
JoAthlete5.wonMedel();

//ES6
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
}
//SubClass
class Athlete6 extends Person6
{
    constructor(name,yearOfBirth,job,olympicGames,medals)
    {
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal()
    {
        this.medals++;
        console.log(this.medals);
    }
}

const JoAthlete6 = new Athlete6('Jo',1995,'swimmer',3,10);
JoAthlete6.wonMedal();
JoAthlete6.calcAge();

