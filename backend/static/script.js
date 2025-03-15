function checkScam() {
    let message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    fetch("/predict1", {  // ✅ Corrected API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("result").innerHTML = 
            `<strong>Prediction:</strong> ${data.prediction === 1 ? "Scam" : "Safe"} <br> 
             <strong>Probability:</strong> ${(data.probability * 100).toFixed(2)}%`;
    })
    .catch(error => console.error("Error:", error));
}
