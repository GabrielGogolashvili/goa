def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    empty = []
    count = 0
    ncount = 0
    for i in arr:
        if i > 0:
            count += 1
        elif i < 0:
            ncount += i
    empty.append(count)
    empty.append(ncount)
    return empty