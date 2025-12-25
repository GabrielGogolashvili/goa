colors = ["red", "blue", "green", "yellow"]

user_color = input("Enter any color: ")

if user_color in colors:
    print(colors.index)

else:
    print("not found")