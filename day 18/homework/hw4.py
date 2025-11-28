temp = float(input("Enter temperature: "))

if temp > 0:
    if temp > 30:
        print("Hot")
    if temp < 30:
        print("Normal")
else:
    print("Freezing")