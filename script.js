const questions = [
    {
        question: "which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Lion", correct: false },
            { text: "Whale", correct: true },
            { text: "Elephant", correct: false },

        ]
    },
    {
        question: "which is the smallest continent in the world",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "America", correct: false },
            { text: "Europe", correct: false },

        ]
    },
    {
        question: "which is the largest desert in the world",
        answer: [
            { text: "kalhari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica desert", correct: true },

        ]
    },
    {
        question: "which is the smallest country in the world",
        answer: [
            { text: "Nipal", correct: false },
            { text: "Vatican city", correct: true },
            { text: "Srirlanka", correct: false },
            { text: "Indonasia", correct: false },

        ]
    },
    {
        question: "which is the biggest foest in the world",
        answer: [
            { text: "Congo Basin, Africa", correct: false },
            { text: "Amazon Rainforest", correct: true },
            { text: "Yakushima, Japan ", correct: false },
            { text: "Black Forest, Germany", correct: false },

        ]
    }
];

let questionElement = document.querySelector(".question")
let answerbutton = document.querySelector(".buttons")
let btns = document.querySelector(".btn")
let nextbtn = document.querySelector("#nextbtn")

let currentquestionindex = 0;
let score = 0;
nextbtn.style.display = "none"

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbtn.style.display = "none"
    nextbtn.innerHTML = "Next"
    showquestion()

}

function showquestion() {
    resetstate()
    nextbtn.style.display = "none"
    let currentquestion = questions[currentquestionindex]
    let questionNo = currentquestionindex + 1;
    questionElement.innerHTML = questionNo + ")  " + currentquestion.question

    currentquestion.answer.forEach(ans => {
        let button = document.createElement("button");
        button.innerText = ans.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);

        if (ans.correct) {
            button.dataset.correct = ans.correct
        }
        button.addEventListener("click", selectanswer)
    });

}

function resetstate() {
    while(answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild)
    }
}

function selectanswer(e) {
    let selectedbtn = e.target;
    let iscorrect = selectedbtn.dataset.correct === "true"

    if (iscorrect) {
        selectedbtn.classList.add("correct")
        score++;
        console.log(score);
        console.log("truee");
    }
    else {
        selectedbtn.classList.add("incorrect")
    }
    Array.from(answerbutton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }       
       
              button.disabled = true

    });

    nextbtn.style.display = "block";


}


function showscore() {
    resetstate()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextbtn.innerHTML = "Next";
    nextbtn.style.display = "block";
    
}
function handleNextButton() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion()
    } else {
        showscore()
    }
}


nextbtn.addEventListener("click", function () {
    if (currentquestionindex < questions.length) {
        handleNextButton()
    } else {
        startquiz()
    }
})
startquiz()
