text = input("Enter a string: ")
vowels = "aeiouAEIOU"

vowelcount = 0
consonantcount = 0

for letter in text:
    if letter in vowels:
        vowelcount += 1
    else:
        consonantcount += 1

print("Vowels:", vowelcount)
print("Consonants:", consonantcount)
