var currentQuestion = {}
var acceptAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []
var startButton = document.getElementById('start-btn')
var Questions = [


    {
        question: 'What is window.prompt?',
        choice1: 'a window that has text submitted by user with a button to submit',
        choice2: 'is a window with cancle/ok button',
        choice3: 'both A and B',
        answer: "is a window with cancle/ok button"
    },


    {
        question: 'What is window.confirm?',
        choice1: ' window that has text submitted by user with a button to submit',
        choice2: 'is a window with cancle/ok button',
        choice3: 'Both A nad B',
        answer: 'is a window with cancle/ok button'
    },

    {
        question: 'How do you know a function is a function?',
        choice1: '{}',
        choice2: '()',
        choice3: '[]',
        answer: '()'
    },

    {
        question: 'What signifies an array?',

        choice1: '{}',
        choice2: '()',
        choice3: '[]',
        answer: '[]'
    },

    {
        question: 'The DOM is built into the javascript language?',
        choice1: 'True',
        choice2: 'False ',
        choice3: 'Neither true or false',
        answer: 'false'
    },

    {
        question: 'What is a great tool used to see if our code is working like it should?',
        choice1: 'console.log',
        choice2: 'inspect',
        choice3: 'Google',
        answer: 'console.log'
    }
]
var SCORE_POINTS = 1
var MAX_QUESTIONS = 6
startButton.addEventListener('click', startQuiz)

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    startTimer()
    getNewQuestion()

}


getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++

    var questionsIndex = math.floor(math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    
};










