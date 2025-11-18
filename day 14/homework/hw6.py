#მომხმარებელს შემოატანინე რიცხვი, მანამ სანამ არ შემოიტანს  ტექტს - 'გამოთვალე საშუალო'. როგორც კი ამ ტექტს შემოიყვანს დაპრინტეთ ყველა შემოტანილი რიცხვის საერთო საშუალო არითმეტიკული.
number = (input("Enter your number or გამოთვალე შაშუალო: "))
sum_numbers = 0
count_numbers = 0

while number != "გამოთვალე საშუალო":
    count_numbers += 1
    sum_numbers = sum_numbers + int(number)
    number = (input("Enter your number or გამოთვალე შაშუალო: "))

sashualo = sum_numbers/count_numbers
print(sashualo)