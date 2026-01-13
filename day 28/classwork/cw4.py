age = int(input("Enter your age: "))

if age < 18:
    print("you are underage")
elif age >= 18 and age <= 64:
    print("adult")
elif age >= 65:
    print("Retirement")
else:
    print("...")