mylist = [1, "hello", 3.5, "world", True, "python"]

count = 0
for item in mylist:
    if type(item) == str:
        count += 1

print(count)
