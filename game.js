const question = document.querySelector('#question');
const choices = Array.form(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const question = document.querySelector('#question');

let currentQuestion={};
let acceptingAnswers = true;
let score =0
let questionCouner = 0
let availableQuestions = []

let question = [
    { 
        question: 'What is window.prompt?',
        choice1: 'a window that has text submitted by user with a button to submit',
        choice2: 'is a window with cancle/ok button',
        choice3: 'both A and B',
        answer: 2 ,
    },


    {
        question: 'What is window.confirm?',
        choice1: ' window that has text submitted by user with a button to submit',
        choice2: 'is a window with cancle/ok button',
        choice3: 'Both A nad B',
        answer: 2, 
    },

    {
        question: 'How do you know a function is a function?',
        choice1: '{}',
        choice2: '()',
        choice3: '[]',
        answer: 2,
    },

    {
        question: 'What signifies an array?',

        choice1: '{}',
        choice2: '()',
        choice3: '[]',
        answer: 3,
    },

    {
        question: 'The DOM is built into the javascript language?',
        choice1: 'True',
        choice2: 'False ',
        choice3: 'Neither true or false',
        answer: 2,
    },

    {
        question: 'What is a great tool used to see if our code is working like it should?',
        choice1: 'console.log',
        choice2: 'inspect',
        choice3: 'Google',
        answer: 1,
    }
]