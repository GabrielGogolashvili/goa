words = ["apple", "dog", "elephant", "cat"]
newwords = []

for word in words:
    if len(word) > 5:
        newwords.append(word.capitalize())
    else:
        newwords.append(word.upper())

print(newwords)
