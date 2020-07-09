/**
 * Created by YoussefNagdy on 7/9/2020.
 */
//Es5
//Immediately Invoked Function Expression (IIFEs)
/*
  why the iiEfs and block useful ?
  DataPrivacy!!
 */
(function () {
    var firstName = "youssef";
    var age = 24;
    console.log('MyName is ' + firstName
                +'MyAge . ' + age
    )
})();

//Es6
{
    let firstName6 = 'youssef';
    const age6 = 24;
    var c = 9;
    console.log(
        'Name: ' + firstName6 + 'age: ' +age6
    );
}
console.log(9);

  /*
   OutPut the firstName6 and age6 and u will get an error
   cuz it's ava only on block {}

   ** if you add var c to the block {}
      and output it outside the block
      guess what it will printed at the console
      remember what ! it's Function Scope so it's doesn't care
  */