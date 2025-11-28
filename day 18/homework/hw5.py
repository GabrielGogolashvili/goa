points = int(input("Enter your points: "))

if points > 50:
    if points >= 90:
        print("Amazing")
    if points < 90:
        print("Low score")
else:
    print("You fail")