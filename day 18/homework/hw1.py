age = int(input("Enter your age: "))
name = input("Enter your name: ")

if age >= 60:
    if name == "kote":
        print("You are old and your name is kote")
    else:
        print("You are old but your name is not kote")

if age < 60:
    if name == "kote":
        print("You are young and your name is kote")
    else:
        print("You are young but your name is not kote")