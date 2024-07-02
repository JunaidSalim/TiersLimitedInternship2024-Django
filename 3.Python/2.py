# Task 2: Create a Python script that reads a text file and counts the frequency of
# each word. Use a dictionary to store the word counts and display the top 10 most
# frequent words.

import string
from collections import Counter

def read_file(filename):
    with open(filename, 'r') as file:
        return file.read()

def normalize_text(text):
    text = text.lower()
    return text.translate(str.maketrans('', '', string.punctuation))

def count_words(text):
    words = text.split()
    return Counter(words)

def display_top_words(word_counts, top_n=10):
    most_common = word_counts.most_common(top_n)
    for word, count in most_common:
        print(f'{word}: {count}')


filename = 'text.txt'
text = read_file(filename)
normalized_text = normalize_text(text)
word_counts = count_words(normalized_text)
display_top_words(word_counts)

