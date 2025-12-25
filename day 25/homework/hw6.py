numbers = []

n1 = int(input("Enter any number: "))
n2 = int(input("Enter any number: "))
n3 = int(input("Enter any number: "))
n4= int(input("Enter any number: "))
n5 = int(input("Enter any number: "))

numbers.append(n1)
numbers.append(n2)
numbers.append(n3)
numbers.append(n4)
numbers.append(n5)

total = 0

for i in numbers:
    total += i

print(total)