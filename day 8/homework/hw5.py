username=input("Log in, Enter your username: ")
password=int(input("Enter your password (in numbers): "))

if username=="admin" and password=="superSecretPassword":
    print("welcome admin")
elif username=="guest" and password=="1234":
    print("welcome guest")
else:
    print("Username or Password doesn't exist. Try again later")