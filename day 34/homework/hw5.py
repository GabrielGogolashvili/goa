def dupremover():
    numbers = [1, 2, 2, 3, 3, 4, 5, 6, 5]

    unique = []

    for num in numbers:
        if num not in unique:
            unique.append(num)

    print("after duplicator remover:", unique)