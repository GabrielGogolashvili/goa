numbers = []

user_ask = int(input("Enter numbers: "))

total = 0

while len(numbers) <= 100:
    user_ask = int(input("Enter numbers: "))

    total += user_ask

    if total >= 100:
        break

    numbers.append(user_ask)

print(numbers)
print(total)