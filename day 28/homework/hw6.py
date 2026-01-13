minor = 0
adult = 0
retired = 0

age = int(input("Enter age: "))

while age != -1:

    age = int(input("Enter age: "))

    if age < 18:
        minor += 1
    elif age < 65:
        adult += 1
    elif age == -1:
        break
    else:
        retired += 1

print("minor: ", minor)
print("adult: ", adult)
print("retired: ", retired)