num = int(input("Enter your number: "))

if num > 0:
    if num % 2 == 0:
        print("+ even")
    if num % 2 == 1:
        print("+ odd")
else:
    print("Not more than 0")