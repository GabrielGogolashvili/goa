def new_list():
    numbers = [8, 9, 0, 12, 24, 56, 43, 2]
    empty = []

    for i in numbers:
        if i % 2 == 0 and numbers.index(i) % 2 != 0:
            empty.append(i ** 2)

    print(empty)
        
new_list()