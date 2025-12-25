numbers = []

user_ask = input("Enter any number as many times as you want, type 'stop' when you want to stop:  ")

while user_ask != "stop":
    numbers.append(int(user_ask))
    user_ask = input("Enter any number as many times as you want, type 'stop' when you want to stop:  ")

print(numbers)