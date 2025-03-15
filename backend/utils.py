import re
import string

def preprocess_text(text):
    """
    Cleans the input text by removing special characters, converting to lowercase, and stripping whitespace.
    """
    text = text.lower()
    text = re.sub(r"http\S+|www\S+|https\S+", '', text, flags=re.MULTILINE)  # Remove URLs
    text = re.sub(r'\d+', '', text)  # Remove numbers
    text = text.translate(str.maketrans('', '', string.punctuation))  # Remove punctuation
    return text.strip()
