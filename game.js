const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is window.prompt?',
        choice1: 'a window that has text submitted by user with a button to submit',
        choice2: 'is a window with cancle/ok button',
        choice3: 'both A and B',
        answer: 2,
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

const SCORE_POINTS = 1
const MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter ++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionIndex = Math.floor(Math.random() *availableQuestions.length)
    currentQuestion =availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach (choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    
    })

availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}

choices.forEach (choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
    
    const selectedAnswer = selectedChoice.dataset['number']

    if(selectedAnswer === 'answer') {
        incrementScore(SCORE_POINTS)
    }
setTimeout(() => {
    getNewQuestion ()
}, 1000)
    
})
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score

}

startGame()