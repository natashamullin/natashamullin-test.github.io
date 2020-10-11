const start = document.getElementById("timer");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
var counter = 0;
var lastQuestionIndex = question.length -1;
var runningQuestionIndex = 0;


var questions = [
    {
        question: 'What is window.prompt?',
        choiceA: 'a window that has text submitted by user with a button to submit',
        choiceB: 'is a window with cancle/ok button',
        choiceC: 'both A and B',
        answer: 'A'
    },
    {
        question: 'What is window.confirm?',
        choiceA: 'a window that has text submitted by user with a button to submit.',
        choiceB: 'is a window with cancle/ok button',
        choiceC:'Both A nad B', 
        answer: 'B',
    },
    { question: 'How do you know a function is a function?',
    choiceA: '{}', 
    choiceB: '()', 
    choiceC: '[]',
     answer: 'B' },
    
     { question: 'What signifies an array?',
     choiceA: '{}',
     choiceB: '()',
     choiceC: '[] ', 
     answer: 'C' },
    
    
     { question: 'The DOM is built into the javascript language?',
     choiceA: 'True', 
     choiceB: 'False ',
     choiceC: 'Neither true or false',
     answer: 'B' },
    
     { question: 'What is a great tool used to see if our code is working like it should?',
        choiceA: 'console.log',
        choiceB: 'inspect',
        choiceC: 'Google',
         answer: 'a'
    },
]

function renderQuestion(){
var q= questions[runningQuestionIndex];
question.innerHTML ="<p>" + q.question + "</p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;

}
var score = 0
for (var i = 0; i < questions.length; i++) {
    
    if (question[runningQuestionIndex].correct ==questions[i].answer) {
        score++;
        //alert("Correct!");
    } else { 
        //alert("wrong :(");
    }
    //alert("you got" + score + "/" + questions.length);

}



start.addEventListener("submit", questions);
{
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start')
    var timeLeft = 300

    function startTimer() {
        setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0)
                alert(" You ran out of time! better luck next time!")
            }



            timeLeftDisplay.innerHTML = timeLefttimeLeft -= 1
        }, 1000)
    }

    
};