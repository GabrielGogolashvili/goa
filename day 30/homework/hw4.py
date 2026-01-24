text = "AlekAok"

final = []

i = 0

while i < len(text):
    if text[i] == text[i].upper():
        final.append(text[i].lower())
    else:
        final.append(text[i].upper())

    i += 1

print(final)