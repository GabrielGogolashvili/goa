animals = ["dog", "cat", "horse", "cow"]

user_animal = input("Enter animal: ")

if user_animal in animals:
    print(animals.index)

else:
    print("Animal not found")