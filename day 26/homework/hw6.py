posnumbers = []
negnumbers = []

while True:
    user_input = input("Enter numbers (type 'stop' to stop typing): ")

    if user_input == "stop":
        break

    num = int(user_input)

    if num > 0:
        posnumbers.append(num)
    elif num < 0:
        negnumbers.append(num)

print(posnumbers)
print(negnumbers)