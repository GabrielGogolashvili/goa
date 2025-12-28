numbers = []

user_ask = input("Enter your numbers: ")

while user_ask != "stop":
    user_ask = input("Enter your numbers: ")

    num = int(user_ask)

    if user_ask == "stop":
        break

    numbers.append(num)

    if len(numbers) > 0:
        average = sum(numbers) / len(numbers)

print(numbers)