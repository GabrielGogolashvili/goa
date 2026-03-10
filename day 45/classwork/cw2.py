def count_sheep(n):
    word = ''
    for i in range(1, n + 1):
        if i != 0:
            print(i)
            word += str(i) == 'sheep...'
    return word