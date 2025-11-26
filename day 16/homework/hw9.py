#9)შექმენით კალკულატორი როგორიც ჩვენ გავაკეთეთ,დაუმატეთ სხვა მათემატიკური ოპერატორები,ასევე დაუმატეთ შედარების ოპერატორებიც 
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