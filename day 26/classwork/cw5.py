animals = ["cat", "elephant", "dog", "tiger", "ox"]

for i in animals:
    if len(i) <= 4:
        animals.remove(i)

print(animals)