temperature=int(input("enter temperature: "))
rainy_day=input("is it raining, yes or no: ")

if temperature>25 and rainy_day=="no":
    print("go touch some grass")
elif temperature>25 and rainy_day=="yes":
    print("hot rainy day")
elif temperature<10 or rainy_day=="yes":
    print("stay home")
else:
    print("nice weather")
