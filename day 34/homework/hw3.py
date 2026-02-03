def evennumsum():
    numbers = [3, 10, 7, 8, 22, 5, 14]

    evensum = 0
    for num in numbers:
        if num % 2 == 0:
            evensum += num

    print("even numbers:", evensum)

evennumsum()