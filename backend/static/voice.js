const startButton = document.getElementById("startButton");
const resultDisplay = document.getElementById("result");
const micAnimation = document.getElementById("micAnimation");

// Check browser support
if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser does not support speech recognition. Try Chrome!");
} else {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-IN";

    startButton.addEventListener("click", () => {
        micAnimation.style.animation = "pulse 0.5s infinite";
        recognition.start();
        resultDisplay.textContent = "Listening...";
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        resultDisplay.textContent = transcript;

        // Stop mic animation
        micAnimation.style.animation = "none";

        // Scam Detection Keywords
        const scamWords = ["otp", "bank", "lottery", "fraud", "password", "card", "payment", "loan"];
        let isScam = scamWords.some(word => transcript.includes(word));

        if (isScam) {
            alert("⚠️ Potential Scam Detected! Be Cautious.");
        }
    };

    recognition.onerror = () => {
        resultDisplay.textContent = "Error occurred. Try again.";
        micAnimation.style.animation = "none";
    };
}
