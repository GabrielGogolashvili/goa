total = 0

num = int(input("Enter a number: "))

while num != 0:
    if num > 0:
        print("positive")
    elif num < 0:
        print("negative")
    else:
        break

    num = int(input("Enter a number: "))

    total += num

print(total)