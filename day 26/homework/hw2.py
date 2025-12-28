numbers = []

user_ask = input("Enter any number as many times as you want, type 'stop' when you want to stop:  ")

while user_ask != "stop":
    num = int(user_ask)
    if num < 50:
        numbers.insert(0, user_ask)
    elif num > 50:
        numbers.append(user_ask)

    user_ask = input("Enter any number as many times as you want, type 'stop' when you want to stop:  ")

print(numbers)