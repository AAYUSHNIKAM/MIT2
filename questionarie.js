

// ======================================================================= Dahboard for the user ======================================================================

// ============================================== Questionarie for the user ==============================================

const questions = [
    {
        question: " At what time did you wake up today?",
        options: ["Before 05:00 am", "05:00 am to 07:00 am", "07:00 am to 09:00 am", " After 09:00 am"],
        correctAnswer: 0,
        points: [40, 30, 20, 10]
    },
    {
        question: "How many hours of sleep did you get last night?",
        options: ["Less than 6 hours", "6-8 hours", "8-10 hours", "More than 10 hours"],
        correctAnswer: 0,
        points: [40, 30, 20, 10]
    },
    {
        question: "Did you engage in intentional physical activity today?",
        options: ["Yes, vigorous exercise", "Yes, moderate exercise", "Yes, light exercise", " No exercise"],
        correctAnswer: 0,
        points: [40, 30, 20, 10]
    },
    {
        question: " At what time did you have your breakfast today?",
        options: ["Before 07:00 am", "07:00 am - 08:00 am", "08:00 am - 09:00 am", " After 09:00 am"],
        correctAnswer: 0,
        points: [40, 30, 20, 10]
    },
    // Add more questions with options and correct answers
];

let userAnswers = [];
let totalPoints = 0;

function generateQuestions() {
    const quizContainer = document.getElementById("quiz-container");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            <label><input type="radio" name="q${index}" value="0"> ${q.options[0]}</label><br>
            <label><input type="radio" name="q${index}" value="1"> ${q.options[1]}</label><br>
            <label><input type="radio" name="q${index}" value="2"> ${q.options[2]}</label><br>
            <label><input type="radio" name="q${index}" value="3"> ${q.options[3]}</label><br>
            <button onclick="submitAnswer(${index})">Submit Answer</button>
            <p id="result${index}"></p>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function submitAnswer(questionIndex) {
    const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);

    if (selectedOption) {
        const points = questions[questionIndex].points[selectedOption.value];
        totalPoints += points;
        document.getElementById(`result${questionIndex}`).textContent = `Points: ${points}`;
        userAnswers[questionIndex] = selectedOption.value;
        document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(input => {
            input.disabled = true;
        });
    }
}

function calculatePercentage() {
    if (userAnswers.length === questions.length) {
        const percentage = (totalPoints / (questions.length * 40)) * 100;
        document.getElementById("result").textContent = `Final Percentage: ${percentage.toFixed(2)}%`;
        document.getElementById("final-submit").disabled = true;
    }
}

// Call function to generate questions when the page loads
generateQuestions();



/* ========================================= hamburger menu =======================================*/

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    // sidebar.style.transition = '0.7s'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    // sidebar.style.transition = '0.7s'
}

/* ========================================== search box ========================================= */

function redirect() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    
    // Assuming your HTML pages are named one.html, two.html, ..., ten.html
    var validPages = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'pimple', 'Acne'];

    if (validPages.includes(searchTerm)) {
        window.location.href = searchTerm + '.html';
    } else {
        alert('Page not found for the entered search term.');
    }
}

// ============================================= log in =================================================

function login(){
    const log = document.querySelector('.flexloginmodal')
    log.style.display = 'flex'
}
function closeloginmodal(){
    const close = document.querySelector('.flexloginmodal')
    close.style.display = 'none'
}

// ============================================= Blogs slide show ===============================================

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}


// ================================================ navigation among the days =============================================

// function showBlock(color) {
//     const block = document.getElementById('flex');
//     block.style.backgroundColor = color;
//     block.classList.remove('hidden');
// }

function goBack() {
    window.location.href = "questionarie.html";
}
