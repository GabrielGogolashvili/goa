total = 0
count = 0

while count < 5:
    num = int(input("Enter number: "))
    total += num
    count += 1

average = total / 5
print("average:", average)

if average > 50:
    print("big average")
else:
    print("small average")
