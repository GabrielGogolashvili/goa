age = int(input("Enter your age: "))

if age >= 18:
    if age >= 60:
        print("Retired")
    if age != 60 and age < 60:
        print("Adult")
else:
    print("Child")