def numbers():
    n = int(input("enter number: "))
    count = 0

    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1

    print("odd count:", count)