colors = ["red", "blue", "green", "yellow"]

user_color = input("Enter any color: ")

if user_color in colors:
    print(colors.index(user_color))

else:
    print("not found")