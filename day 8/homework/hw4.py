age=int(input("Enter your age: "))
student=input("Are you student, yes or no: ")

if age<12 or age>65:
    print("ticket is on the house")
elif student=="yes" and age>12:
    print("ticket is half the price")
elif student!="yes" or student!="no":
    print("answer with yes or no")
else:
    print("pay the full price")