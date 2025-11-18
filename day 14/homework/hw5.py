#მომხმარებელს შემოატანინეთ რიცხვი სანამ თქვენს მიერ ჩაფიქრებულ რიცხვს არ შემოიტანს.
secretnumber = 99
enternumber = int(input("Guess my number: "))

while enternumber != secretnumber:
    print("Try again")
    enternumber = int(input("Guess my number: "))

    if enternumber == secretnumber:
        print("good job you got it")