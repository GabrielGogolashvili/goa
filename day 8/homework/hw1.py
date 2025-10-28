#1) მომხმარებელს შემოატანინე ტემპერატურა (რიცხვი) და შემდეგ შეამოწმე:
#თუ ტემპერატურა მეტია 30-ზე -> დაბეჭდე "ძალიან ცხელა!"
#თუ ტემპერატურა მეტია 20-ზე -> დაბეჭდე "სასიამოვნო ამინდია"
#თუ ტემპერატურა მეტია 10-ზე -> დაბეჭდე "ცოტა ცივა"
#თუ ტემპერატურა მეტია 0-ზე -> დაბეჭდე "ცივა, ჩაიცვი თბილად"
#სხვა შემთხვევაში -> "გაიყინები, სახლში დარჩი!"

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