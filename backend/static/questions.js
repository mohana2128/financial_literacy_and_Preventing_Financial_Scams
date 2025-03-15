const questions = [
    { 
        question: "How much will you spend on Rent?", 
        options: ["₹4000", "₹6000", "₹8000"],
        correct: "₹6000", 
        category: "Essentials"
    },
    { 
        question: "How much will you save this month?", 
        options: ["₹2000", "₹4000", "₹6000"],
        correct: "₹4000", 
        category: "Savings"
    },
    { 
        question: "Unexpected Expense! Your phone broke. What do you do?", 
        options: ["Replace for ₹5000", "Repair for ₹2000", "Ignore it"],
        correct: "Repair for ₹2000", 
        category: "Emergency"
    }
];

let currentQuestionIndex = 0;
let balance = 10000;

function nextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("feedback").innerHTML = `<h3>Game Over! Final Balance: ₹${balance}</h3>`;
        return;
    }

    let q = questions[currentQuestionIndex];
    let container = document.getElementById("question-container");
    
    container.innerHTML = `<h3>${q.question}</h3>`;
    
    q.options.forEach(option => {
        container.innerHTML += `<button onclick="answer('${option}', '${q.correct}')">${option}</button>`;
    });

    currentQuestionIndex++;
}

function answer(selected, correct) {
    if (selected === correct) {
        balance -= parseInt(correct.replace("₹", ""));
        flyMoney("-" + correct);
    } else {
        balance -= 1000; // penalty
        flyMoney("-₹1000");
    }
    
    document.getElementById("balance").innerText = `Balance: ₹${balance}`;
}

function flyMoney(amount) {
    let money = document.createElement("div");
    money.classList.add("money-fly");
    money.innerText = amount;
    document.body.appendChild(money);

    setTimeout(() => {
        money.remove();
    }, 1000);
}

document.addEventListener("DOMContentLoaded", nextQuestion);
