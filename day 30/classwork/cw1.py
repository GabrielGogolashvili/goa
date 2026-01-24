word = "1234560987"

newlist = []

num = 0

for i in word:
    if int(i) % 2 == 0 and int(i) > 5 and word.index(i) % 2 == 0:
        num += int(i)
    else:
        newlist.append(int(i))

print(num)
print(newlist)