def high_and_low(numbers):
    parts = numbers.split()

    first = int(parts[0])
    highest = first
    lowest = first

    for p in parts:
        num = int(p)
        if num > highest:
            highest = num
        elif num < lowest:
            lowest = num

    return str(highest) + " " + str(lowest)