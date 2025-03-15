const storyText = `
    Meet Rahul, a young software engineer who earned a good salary but never saved money. 
    He spent everything on gadgets and entertainment, believing his income would always grow.
    
    One day, an unexpected medical emergency left him struggling to pay bills.
    With no savings, he had to borrow money at high interest.

    That moment changed his life. He started budgeting, saving 20% of his income, 
    and investing in mutual funds. Over time, his financial stability improved, 
    and he achieved his dream of buying a house.

    The lesson? Start saving early, spend wisely, and always have an emergency fund.
`;

let index = 0;
function typeEffect() {
    if (index < storyText.length) {
        document.getElementById("story-text").innerHTML += storyText.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

function speakStory() {
    let speech = new SpeechSynthesisUtterance(storyText);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

document.addEventListener("DOMContentLoaded", typeEffect);
