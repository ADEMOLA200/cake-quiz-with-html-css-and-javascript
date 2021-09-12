const quizData = [
    {
        question: "What is at the centre of a Bundt cake??",
        a: "Butter Cake",
        b: "Cup Cake",
        c: "Tube center",
        d: "Central Tube",
        correct: "d",
    },
    {
        question: "What flavour is Devil’s Food Cake??",
        a: "Strawberry",
        b: "Chocolate",
        c: "Orange",
        d: "Lemon Juice",
        correct: "b",
    },
    {
        question: "What are edible flowers for cakes?",
        a: "Bean Flowers",
        b: "Best Carrot  Cake Recipes",
        c: "Cream Chesse",
        d: "Burger",
        correct: "a",
    },
    {
        question: "What can I use instead of cream cheese frosting?",
        a: "Bean Cake",
        b: "Cottage Chesse",
        c: "carnation",
        d: "begonia.",
        correct: "b",
    },
    {
        question: "What type of frosting is best for decorating?",
        a: "Bean Cake",
        b: "relative pancake",
        c: "royal icing",
        d: "Suya",
        correct: " c",
    },
    {
        question: "Is it OK to put fresh flowers on a cake?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "None",
        correct: "a",
    },
    {
        question: "Is it OK to put fresh flowers on a cake?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "None",
        correct: "a",
    },
    {
        question: "Can I use milk instead of cream cheese?",
        a: "Maybe",
        b: "No",
        c: "Yes",
        d: "None",
        correct: "c",
    },
    {
        question: "Can I use Greek yogurt as a substitute for cream cheese?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "None",
        correct: "a",
    },
    {
        question: "What's the difference between icing and frosting?",
        a: "b and c",
        b: "Icing is bogger",
        c: "frosting is slimer",
        d: "frosting is thick and fluffy while Icing is thinner and glossier than frosting",
        correct: "d",
    },
        {
        question: "What are the six basic types of icing?",
        a: "Cream,Butter,jam,Flour,Fondat,Margarine",
        b: "Butter Cream,Whipped Cream,Royal Icing,Cream Cheese, Frosting,Meringue,Fondant.",
        c: "MButter,Whipped,Icing,Flour,Egg,Cream Cheese",
        d: "None",
        correct: "b",
    },
        {
        question: "What is the best store bought icing?",
        a: "Duncan Hines Creamy Home-Style",
        b: "Betty Crocker Rich & Creamy Vanilla Frosting.",
        c: "Aldi",
        d: "None",
        correct: "b",
    },
        {
        question: "How nuts can be used to decorate cakes?",
        a: "They can be used whole",
        b: "They can be used chopped",
        c: "a and d",
        d: "They can be used whole or chopped",
        correct: "d",
    },
     {
        question: "Is white frosting the same as vanilla?",
        a: "Maybe",
        b: "No",
        c: "a and d",
        d: "Yes",
        correct: "d",
    },
     {
        question: "In the process of cake baking which of the following is NOT a raising agent?",
        a: "Steam",
        b: " Yeast",
        c: "Powdered Sugar",
        d: "Baking Powder",
        correct: "c",
    },
     {
        question: "The classic chocolate brownie consists of butter, sugar, chocolate, flour and what other ingredient?",
        a: "Coffee",
        b: "Milk",
        c: "Sour Cream",
        d: "Eggs",
        correct: "d",
    },
     {
        question: "What baking technique breaks up lumps in flour to get a more accurate measurement?",
        a: "Whisking",
        b: "Separating",
        c: "Mixing",
        d: "Sifting",
        correct: "d",
    },
    {
        question: "What is the special feature of a convection oven that helps cookies and cakes bake more evenly?",
        a: "Whisking",
        b: "Separating",
        c: "Mixing",
        d: "Sifting",
        correct: "d",
    },
    {
        question: "What baking technique breaks up lumps in flour to get a more accurate measurement?",
        a: "More consistent pre-heating",
        b: "The creation of steam",
        c: "Fan that circulates the air",
        d: "An airtight seal",
        correct: "c",
    },
    {
        question: "What is the more common name for sodium bicarbonate which is often used in baking as a leavening agent?",
        a: "Baking Soda",
        b: "Baking Powder",
        c: "Cream Of Tartar",
        d: "Cornstarch",
        correct: "a",
    },
    {
        question: "In bread making, what is the process of folding and pressing dough to create gluten and elasticity?",
        a: "Kneading",
        b: "Leavening",
        c: "Proofing",
        d: "Laminating",
        correct: "a",
    },
    {
        question: "What type of sugar contains the most molasses?",
        a: "Brown Sugar",
        b: "White Sugar",
        c: "Powdered Sugar",
        d: "Raw Sugar",
        correct: "a",
    },
    {
        question: "Do you want me to wait until you're ready?",
        a: "Yes",
        b: "No",
        c: "Never",
        d: "Never Never",
        correct: "a",
    },
     {
        question: "I want you to tell me what you feel",
        a: "WhatsApp",
        b: "i hope you enjoyed the app",
        c: "Never",
        d: "Never Never",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
}) 


