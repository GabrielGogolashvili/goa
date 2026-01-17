password = input("Enter password: ")

while len(password) < 8:
    print("password is weak")
    password = input("Enter password: ")

    if len(password) > 8:
        print("strong enough")