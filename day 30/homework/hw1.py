names = ["dato", "DATO", "kaxa", "luka"]

newlist = []

for name in names:
    if name == name.lower() and name[0] == "d":
        newlist.append("NIKA")
    elif name == name.upper() or name[0] == "K":
        newlist.append("GOGA")
    else:
        newlist.append("leader")

print(newlist)