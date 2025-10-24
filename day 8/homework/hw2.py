points=int(input("Enter your points: "))
attendance=int(input("Enter your attendence points: "))

if points>80 and attendance>90:
    print("შენ შესანიშნავად დაწერე გამოცდა")
elif points>50 or points==50 and attendance>70 or attendance==70:
    print("საშუალოდ დაწერე გამოცდა")
elif points>30 or points==30 or attendance>50 or attendance==50:
    print("გაჭირვებით, მაგრამ ჩააბარე გამოცდა")
else:
    print("ჩაიჭერი!")

