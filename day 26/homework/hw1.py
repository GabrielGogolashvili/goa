numbers = []

user_ask = input("Enter any number as many times as you want, type 'stop' when you want to stop:  ")

while user_ask != "stop":
    num = int(user_ask)
    
    if num > 0:
        numbers.append(num)

    user_ask = input("Enter any number as many times as you want, type 'stop' when you want to stop:  ")

print(numbers)