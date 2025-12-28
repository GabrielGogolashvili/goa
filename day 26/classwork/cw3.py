points =  [30, 20, 10, 5, 40, 60, 70, 80, 90]

i = 0
while i < len(points):
    if points[i] < 60:
        points.pop(i)

    else:
        i += 1

print(points)