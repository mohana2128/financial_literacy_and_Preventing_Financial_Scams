 // Load Chart.js Library
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
document.head.appendChild(script);

document.getElementById("budget-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let essentials = parseInt(document.getElementById("essentials").value);
    let wants = parseInt(document.getElementById("wants").value);
    let savings = parseInt(document.getElementById("savings").value);
    let debt = parseInt(document.getElementById("debt").value);

    let total = essentials + wants + savings + debt;

    if (total !== 10000) {
        alert("Your budget must total ₹10,000! Adjust your amounts.");
        return;
    }

    // Generate Pie Chart
    const ctx = document.getElementById("budgetChart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Essentials", "Wants", "Savings", "Debt Repayment"],
            datasets: [{
                data: [essentials, wants, savings, debt],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50"],
            }]
        }
    });

    let score = 50;
    if (essentials > 5000) score -= 10;
    if (wants > 3000) score -= 20;
    if (savings >= 3000) score += 30;
    if (debt > 2000) score -= 15;

    let feedback = score >= 70 ? "🔥 Smart Saver! Wealth grew 10%!" :
                  score >= 50 ? "💡 Doing okay! Try saving 30% next time." :
                  "⚠ Oops! Reduce expenses and budget better.";

    localStorage.setItem("finalScore", score);
    localStorage.setItem("feedback", feedback);

    setTimeout(() => { window.location.href = "{{ url_for('results_view') }}"; }, 110000);
});
