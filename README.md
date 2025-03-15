Scam Detector & Financial Literacy Project

📖 Overview

This project aims to educate users on financial literacy and protect them from scams through an interactive platform. It consists of six core modules:

Chatbot - Provides financial guidance and scam awareness.

Voice Scam Detector - Detects potential scams in voice messages.

ML-Based Scam Message Detection - Identifies scam messages using machine learning.

Game-Based Budget Planning - Teaches financial planning through an interactive game.

Story-Based Game - Engages users in financial literacy through storytelling.

Heatmap Analysis - Visualizes scam trends for better understanding.

🚀 How to Run the Project

1️⃣ Clone the Repository

 git clone https://github.com/your-repo-link.git
 cd your-repo-name

2️⃣ Backend Setup

Navigate to the Backend Directory:

cd backend

Install Dependencies:

pip install -r requirements.txt

Run the Backend:

python app.py

Backend will start on http://127.0.0.1:5000/

3️⃣ chatbot integration:

Navigate to the Backend Directory in chatbot folder:

cd backend

run "node index.js"

the server will be running

add a terminal and Navigate to the Frontend Directory in chatbot:

cd frontend

Install Dependencies:

npm install

Run the Frontend:

npm start

Frontend will start on http://localhost:3000/

📂 Project Structure

├── backend
│   ├── app.py  # Flask backend
│   ├── models  # ML models for scam detection
│   ├── static  # Static files (CSS, JS, images)
│   ├── templates  # HTML files
│   ├── requirements.txt  # Python dependencies
│
├── frontend
│   ├── src
│   │   ├── components  # React components
│   │   ├── pages  # Webpages
│   │   ├── App.js  # Main React app
│   ├── public
│   ├── package.json  # Dependencies
│   ├── index.js  # React entry point
│
├── README.md

📌 Features of Each Module:

🔹 Chatbot

Provides real-time scam detection advice.

Answers financial literacy-related queries.

🔹 Voice Scam Detector

Uses speech recognition to analyze suspicious calls.

Detects fraudulent keywords and patterns.

🔹 ML-Based Scam Message Detection

Identifies scam messages using machine learning algorithms.

Highlights risk levels and suggests preventive actions.

🔹 Game-Based Budget Planning

Allows users to allocate ₹10,000 wisely across essential categories.

Provides real-time feedback on spending decisions.

🔹 Story-Based Game

Engages users in interactive storytelling to teach financial decision-making.

Features AI-powered dynamic content generation.

🔹 Heatmap Analysis

Visualizes scam trends based on location and frequency.

Uses color-coded intensity maps to highlight high-risk areas.

🛠️ Technologies Used

Frontend: React.js, JavaScript, HTML, CSS

Backend: Flask, Python

Database: SQLite / PostgreSQL

Machine Learning: TensorFlow, Scikit-Learn

APIs: OpenAI, Google Speech-to-Text

🎯 Future Enhancements

✅ Real-time fraud detection API integration.
✅ Advanced ML models for scam prevention.
✅ Gamification elements for enhanced user engagement.