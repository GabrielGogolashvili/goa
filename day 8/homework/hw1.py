temperature=int(input("Enter temperature as number: "))

if temperature>30 or temperature == 30:
    print("very hot")
elif temperature>20 or temperature == 20:
    print("nice temperature")
elif temperature>10 or temperature == 10:
    print("a little cold")
elif temperature>0 or temperature == 0:
    print("its cold, wear warm clothes")
else:
    print("youll freeze, stay home")