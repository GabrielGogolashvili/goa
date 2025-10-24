number=int(input("Enter your number: "))

if number>90 or number==90:
    print("very high points")
elif number>50 or number==50:
    print("average points")
elif number>30 or number==30:
    print("low points")
elif number>10 or number==10:
    print("you failed")
else:
    print("how can you be THIS bad, never come back")