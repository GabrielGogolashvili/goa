password = "gamarjoba"
enterp = input("Guess the password: ")

while enterp != password:
    enterp = input("Guess the password: ")
    if enterp == password:
        print("სწორია გაარტყი")