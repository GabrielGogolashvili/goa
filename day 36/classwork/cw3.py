def sum_numbers(list1):
    for i in range(len(list1)):
        list1[i] += list1[i]

    print(list1)


numbers =  [10, 20, 30, 100, 200, 500 ] 
sum_numbers(numbers)