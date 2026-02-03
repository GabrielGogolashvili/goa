def countnumberstring():
    sentence = input("enter sentence: ")
    words = sentence.split()

    count = 0
    for word in words:
        if len(word) > 4:
            count += 1

    print("words with more than 4 char:", count)

countnumberstring()