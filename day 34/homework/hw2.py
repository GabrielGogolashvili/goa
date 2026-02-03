def maxfinder():
    numbers = [12, 5, 78, 34, 2, 90, 41]

    maxnum = numbers[0]
    for num in numbers:
        if num > maxnum:
            maxnum = num

    print("biggest element:", maxnum)

maxfinder()