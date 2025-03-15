from flask import Flask, request, render_template, jsonify
import joblib
from utils import preprocess_text  # Import text preprocessing function

app = Flask(__name__)

# ✅ Load trained scam detection model & TF-IDF vectorizer
try:
    model = joblib.load('models/scam_detector.pkl')  # Load trained classifier
    vectorizer = joblib.load('models/vectorizer.pkl')  # Load TF-IDF vectorizer
except Exception as e:
    print(f"Error loading model/vectorizer: {e}")

@app.route('/')
def home():
    return render_template('index.html')  # Home page

@app.route('/predict', methods=['GET'])
def predict():
    return render_template('predict.html')  # Prediction page

@app.route('/map')
def map_view():
    return render_template('map.html')

@app.route('/game2')
def game2():
    return render_template('game2.html')

@app.route('/game1')
def game1():
    return render_template('game1.html')

@app.route('/results')
def results_view():
    return render_template('results.html')

@app.route('/voice')
def voice():
    return render_template('voice.html')

@app.route('/scam')
def scam():
    return render_template('scam.html')

@app.route('/questions.js')
def questions_js():
    return app.send_static_file('questions.js')

@app.route('/story')
def story():
    return render_template('story.html')


@app.route('/predict1', methods=['POST'])
def predict1():
    try:
        data = request.get_json()
        if not data or "message" not in data:
            return jsonify({"error": "No message provided"}), 400

        message = data["message"]

        # Preprocess the text message
        processed_message = preprocess_text(message)

        # Convert text to numerical form using the trained vectorizer
        transformed_message = vectorizer.transform([processed_message])

        # ✅ Make prediction using scikit-learn model
        prediction = model.predict(transformed_message)[0]  # 0 = Safe, 1 = Scam
        probability = model.predict_proba(transformed_message)[0][1]  # Scam probability

        return jsonify({'prediction': int(prediction), 'probability': round(probability, 4)})

    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": "An error occurred during prediction", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
