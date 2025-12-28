numbers = [10, -5, 3, -1, 8, -2]

for i in numbers[:]:
    if i < 0:
        numbers.remove(i)

print(numbers)