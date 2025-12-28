numbers = []

for i in range(1, 10):
    numbers.append(i)
    
    if i % 2 == 0:
        numbers.remove(i)
    else:
        False

print(numbers)

