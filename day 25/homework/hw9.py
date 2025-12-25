nums = [1, 2, 3, 4]

user_index = int(input("Enter index: "))
user_number = int(input("Enter number: "))

if user_index in nums:
    nums.insert(user_index, user_number)

    print(nums)

elif user_index > 3:
    nums.append(user_number)

    print(nums)