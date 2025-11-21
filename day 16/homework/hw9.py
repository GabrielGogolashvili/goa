n1 = int(input("Enter number 1: "))
n2= int(input("Enter number 2: "))
operator = input("Enter operator (+, -, *, /, **, %): ")

if operator == "+":
    print(n1 + n2)
elif operator == "-":
    print(n1 - n2)
elif operator == "*":
    print(n1 * n2)
elif operator == "/":
    print(n1 / n2)
elif operator == "**":
    print(n1 ** n2)
elif operator == "%":
    print(n1 % n2)