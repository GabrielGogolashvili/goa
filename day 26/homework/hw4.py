numbers = []

while True:
    user_ask = int(input("Enter numbers: "))

    if user_ask in numbers:
        break
    else:
        numbers.append(user_ask)

print(numbers)