const quizData = [
    {
        question: 'how old is Florida?',
        a: '10',
        b: '12',
        c: '13',
        d: '15',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'

    },
    {
        question: 'Who is the President of US?',
        a: 'Trump',
        b: 'Biden',
        c: 'Obama',
        d: 'Osama',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hiper Text Markup Language',
        b: 'Cacading Style Sheet',
        c: 'JSON',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }
]

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelectAnswer()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
     
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        //console.log(answer.checked);

        if(answerEl.checked){
             answer = answerEl.id;
        }
    });

   return answer;
}

function deSelectAnswer(){

    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if(answer){
        
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
    
        }
        else{
            
                quiz.innerHTML = `<h2>You answered coorectly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">RELOAD</button>`;
        }

    }
})