words = ["NIKA", "Goga", "Luka", "Tamar"]

i = 0

while i < len(words):
    word = words[i]

    if word == words.lower():
        word = word.upper()
        i += 1
    else:
        words.pop(i)

print(words)
