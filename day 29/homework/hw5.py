numbers = [10, -5, 20, -3, -7, 15]

positivesum = 0
negativecount = 0

for num in numbers:
    if num > 0:
        positivesum += num
    else:
        negativecount += 1

print("Positive:", positivesum)
print("Negative:", negativecount)
