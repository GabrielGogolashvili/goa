fruits = ["apple", "banana", "apple", "orange"]

user_fruit = input("Enter any type of fruit: ")

if user_fruit in fruits:
    fruits.remove("apple")

    print(fruits)

else:
    print("cool")