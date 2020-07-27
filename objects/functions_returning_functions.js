/**
 * Created by YoussefNagdy on 7/10/2020.
 */


// Functions Returning Functions
function interviewQuestion(job)
{
  if(job === 'designer')
  {
      return function (name) {
          console.log(name + ' , Can you Explain what UX design is ?');
      }
  }else if(job === 'teacher')
  {
      return function (name) {
          console.log("Hello " + name + ', What subject do you teach ?');
      }
  }else{
      return function (name) {
          console.log("Hello " + name + ', what do you do?');
      }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var desingerQuestions = interviewQuestion('designer');

desingerQuestions('Omar');
teacherQuestion('Youssef');