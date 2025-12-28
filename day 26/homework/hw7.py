numbers = []
count = 0
while True:
    user_ask = input("Enter numbers (type 'stop' to stop typing): ")

    if user_ask == "stop":
        break

    numbers.append(int(user_ask))

    count += 1

    if count >= 2:
        if numbers[-1] + numbers[-2] < 50:
            numbers.pop()
            count -= 1

print(numbers)