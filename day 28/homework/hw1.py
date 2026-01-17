sentence = input("Enter sentence: ")

words = sentence.split()

print(words)

for i in range(len(words)):
    print(words[i].capitalize())